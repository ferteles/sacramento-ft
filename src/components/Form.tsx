import React, { useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import imgForm from "../assets/imgForm.webp";

// Componente do Widget Dish.co
const DishReservationWidget: React.FC = () => {
  useEffect(() => {
    // Configurar variáveis globais para o widget Dish.co
    (window as any)._hors = [
      ['eid', 'hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d'],
      ['tagid', 'hors-hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d'],
      ['width', '100%'],
      ['height', ''],
      // Estilos customizados para integrar com o design do site
      ['foregroundColor', '#441F0E'], // Cor do texto principal (marrom escuro)
      ['backgroundColor', 'transparent'], // Fundo transparente para herdar do container
      ['linkColor', '#441F0E'], // Cor dos links
      ['errorColor', '#c0392b'], // Cor para mensagens de erro (vermelho)
      ['primaryButtonForegroundColor', '#FFFFFF'], // Cor do texto do botão primário (branco)
      ['primaryButtonBackgroundColor', '#441F0E'], // Cor de fundo do botão primário (marrom escuro)
      ['secondaryButtonForegroundColor', '#FFFFFF'], // Cor do texto do botão secundário (branco)
      ['secondaryButtonBackgroundColor', '#441F0E'], // Cor de fundo do botão secundário (marrom escuro)
    ];

    // Carregar script
    const script = document.createElement('script');
    script.src = 'https://reservation.dish.co/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[src="https://reservation.dish.co/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      delete (window as any)._hors;
    };
  }, []);

  return (
    <div id="hors-hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d" />
  );
};

function Form() {
  const { language } = useLanguage();

  const texts = {
    title:
      language === "pt"
        ? "Reserve a sua mesa para uma experiência única no coração de Lisboa"
        : "Book your table for a unique experience in the heart of Lisbon",
    paragraph:
      language === "pt"
        ? "Faça a sua reserva diretamente através do nosso sistema online."
        : "Make your reservation directly through our online system.",
  };

  return (
    <div id="form" className="py-20 w-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20 px-6 lg:px-20">
      {/* Imagem */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <Card
          imageSrc={imgForm}
          width="w-full max-w-md"
          height="h-96 lg:h-[600px]"
        />
      </div>

      {/* Widget de Reservas */}
      <div className="w-full lg:w-1/2 max-w-lg">
        <h3
          className="text-3xl lg:text-5xl font-caudex max-w-lg uppercase"
          style={{ fontWeight: 50 }}
        >
          {texts.title}
        </h3>

        <p className="font-catamaran text-base mt-3 mb-8">
          {texts.paragraph}
        </p>

        {/* Widget de Reservas Dish.co */}
        <div className="bg-[#D6CBBB] p-4 lg:p-6 rounded-2xl shadow-lg">
          <DishReservationWidget />
        </div>

        {/* Aviso de privacidade */}
        <p className="text-xs text-[#6B5B50] mt-4">
          {language === "pt"
            ? "Ao fazer uma reserva, concorda com a nossa política de privacidade."
            : "By making a reservation, you agree to our privacy policy."}
        </p>
      </div>
    </div>
  );
}

export default Form;