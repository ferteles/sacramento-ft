import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import imgForm from "../assets/imgForm.webp";

// Componente do Widget Dish.co
const DishReservationWidget: React.FC = () => {
  const [scriptSrc, setScriptSrc] = useState('');

  useEffect(() => {
    setScriptSrc(`https://reservation.dish.co/widget.js?v=${Date.now()}`);
    
    // Configurar variáveis globais para o widget Dish.co
    (window as any)._hors = [
      ['eid', 'hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d'],
      ['tagid', 'hors-hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d'],
      ['width', '100%'],
      ['height', ''],
      ['foregroundColor', '#441F0E'],
      ['backgroundColor', 'transparent'],
      ['linkColor', '#441F0E'],
      ['errorColor', '#c0392b'],
      ['primaryButtonForegroundColor', '#FFFFFF'],
      ['primaryButtonBackgroundColor', '#441F0E'],
      ['secondaryButtonForegroundColor', '#FFFFFF'],
      ['secondaryButtonBackgroundColor', '#441F0E'],
    ];

    return () => {
      const widgetContainer = document.getElementById('hors-hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d');
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
      delete (window as any)._hors;
    };
  }, []);

  return (
    <>
      {scriptSrc && (
        <Helmet>
          <script src={scriptSrc} async />
        </Helmet>
      )}
      <div 
        id="hors-hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d" 
        translate="no"
        className="notranslate"
      />
    </>
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
    <div id="form" className="py-20 w-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20 px-6 lg:px-20" style={{ scrollMarginTop: '100px' }}>
      {/* Imagem */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <Card
          imageSrc={imgForm}
          width="w-full max-w-md"
          height="h-96 lg:h-[600px]"
          hasOverlay={false}
        />
      </div>

      {/* Botão de Reserva Externa */}
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

        <a
          href="https://reserve.dish.co/258346"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#441F0E] text-white px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-widest hover:bg-[#6B5B50] transition-colors duration-300"
          tabIndex={0}
        >
          {language === "pt" ? "Reservar Mesa" : "Reserve Table"}
        </a>

        {/* Aviso de privacidade */}
        <p className="text-xs text-[#6B5B50] mt-4">
          {language === "pt"
            ? "Ao fazer uma reserva, será redirecionado para o sistema externo Dish.co."
            : "By making a reservation, you will be redirected to the external Dish.co system."}
        </p>
      </div>
    </div>
  );
}

export default Form;