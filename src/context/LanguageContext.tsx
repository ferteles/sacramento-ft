import { createContext, useContext, useState, ReactNode } from "react";

// Definição do tipo do contexto
interface LanguageContextType {
  language: "pt" | "en";
  toggleLanguage: () => void;
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Criando o Provider que envolverá a aplicação
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para acessar o idioma facilmente nos componentes
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}
