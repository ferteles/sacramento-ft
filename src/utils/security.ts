// src/utils/basicSecurity.ts - VERSÃO SIMPLES SEM COMPLICAÇÕES
import { useState } from "react";

// Detecta se está em produção (sem process.env)
const isProduction = () => {
  return (
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  );
};

// Rate limiting simples
class SimpleRateLimit {
  private attempts = new Map<string, { count: number; firstAttempt: number }>();
  private readonly maxAttempts = 3;
  private readonly windowMs = 60 * 60 * 1000; // 1 hora

  private getClientFingerprint(): string {
    return btoa(
      [
        navigator.userAgent,
        navigator.language,
        screen.width + "x" + screen.height,
        new Date().getTimezoneOffset().toString(),
      ].join("|")
    ).slice(0, 16);
  }

  canSubmit(): boolean {
    const fingerprint = this.getClientFingerprint();
    const now = Date.now();
    const userAttempts = this.attempts.get(fingerprint);

    if (!userAttempts) {
      this.attempts.set(fingerprint, { count: 1, firstAttempt: now });
      return true;
    }

    if (now - userAttempts.firstAttempt > this.windowMs) {
      this.attempts.set(fingerprint, { count: 1, firstAttempt: now });
      return true;
    }

    if (userAttempts.count >= this.maxAttempts) {
      return false;
    }

    userAttempts.count++;
    return true;
  }
}

export const rateLimit = new SimpleRateLimit();

// Validação básica
export const validateInput = {
  sanitize(input: string): string {
    return input
      .replace(/[<>]/g, "")
      .replace(/javascript:/gi, "")
      .replace(/data:/gi, "")
      .trim()
      .slice(0, 1000);
  },

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s\-'\.]{2,50}$/;
    return nameRegex.test(name);
  },

  isSpam(text: string): boolean {
    const spamWords = [
      "bitcoin",
      "crypto",
      "investment",
      "loan",
      "seo",
      "marketing",
      "viagra",
      "casino",
    ];
    const lowerText = text.toLowerCase();
    const hasSpamWords = spamWords.some((word) => lowerText.includes(word));
    const hasUrls = /https?:\/\//.test(text);
    const hasTooManyCapitals = /[A-Z]{10,}/.test(text);

    return hasSpamWords || hasUrls || hasTooManyCapitals;
  },
};

// Proteção contra bots
export const botProtection = {
  honeypotTriggered(value: string): boolean {
    return value !== "";
  },

  validateFormTime(startTime: number): boolean {
    const minTime = 3000; // 3 segundos mínimo
    return Date.now() - startTime >= minTime;
  },
};

// Proteções da página
export const pageProtection = {
  disableRightClick() {
    if (isProduction()) {
      document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    }
  },

  blockDevKeys() {
    if (isProduction()) {
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && e.key === "I") ||
          (e.ctrlKey && e.shiftKey && e.key === "C") ||
          (e.ctrlKey && e.key === "U")
        ) {
          e.preventDefault();
          return false;
        }
      });
    }
  },

  detectDevTools() {
    if (isProduction()) {
      setInterval(() => {
        if (
          window.outerHeight - window.innerHeight > 200 ||
          window.outerWidth - window.innerWidth > 200
        ) {
          console.clear();
          console.warn("🔒 Área restrita");
        }
      }, 1000);
    }
  },

  disableConsole() {
    if (isProduction()) {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.info = () => {};
      console.debug = () => {};
    }
  },
};

// Hook do formulário
export function useSecureForm() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [formStartTime] = useState(Date.now());

  const validateForm = (data: {
    name: string;
    email: string;
    message: string;
    honeypot?: string;
  }) => {
    const errors: string[] = [];

    if (!rateLimit.canSubmit()) {
      setIsBlocked(true);
      errors.push("Muitas tentativas. Tente novamente em 1 hora.");
      return { isValid: false, errors };
    }

    if (data.honeypot && botProtection.honeypotTriggered(data.honeypot)) {
      errors.push("Erro de validação");
      return { isValid: false, errors };
    }

    if (!botProtection.validateFormTime(formStartTime)) {
      errors.push("Formulário enviado muito rapidamente");
      return { isValid: false, errors };
    }

    if (!validateInput.isValidName(data.name)) {
      errors.push("Nome inválido");
    }

    if (!validateInput.isValidEmail(data.email)) {
      errors.push("Email inválido");
    }

    if (validateInput.isSpam(data.message)) {
      errors.push("Mensagem contém conteúdo não permitido");
    }

    return { isValid: errors.length === 0, errors };
  };

  return { validateForm, isBlocked };
}

// Inicialização simples
export function initBasicSecurity() {
  pageProtection.disableConsole();
  pageProtection.disableRightClick();
  pageProtection.blockDevKeys();
  pageProtection.detectDevTools();

  if (!isProduction()) {
    console.log("🛡️ Proteção básica ativada");
  }
}
