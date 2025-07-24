import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import imgForm from "../assets/imgForm.webp";

const DishReservationWidget: React.FC = () => {
  const [scriptSrc, setScriptSrc] = useState('');
  
  const isPortugueseSpeakingCountry = (): boolean => {
    const locale = navigator.language || navigator.languages[0] || 'en-US';
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const portugueseCountries = [
      'pt', 'pt-PT', 'pt-BR', 'pt-AO', 'pt-MZ', 'pt-CV', 'pt-GW', 'pt-ST', 'pt-TL'
    ];
    
    const portugueseTimezones = [
      'Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores',
      'America/Sao_Paulo', 'America/Recife', 'America/Manaus', 'America/Fortaleza', 'America/Belem', 'America/Campo_Grande', 'America/Cuiaba', 'America/Porto_Velho', 'America/Boa_Vista', 'America/Rio_Branco', 'America/Bahia', 'America/Maceio', 'America/Santarem', 'America/Araguaina', 'America/Noronha',
      'Africa/Luanda',
      'Africa/Maputo',
      'Atlantic/Cape_Verde',
      'Africa/Bissau',
      'Africa/Sao_Tome',
      'Asia/Dili'
    ];
    
    if (portugueseCountries.some(country => locale.toLowerCase().startsWith(country))) {
      return true;
    }
    
    if (portugueseTimezones.includes(timezone)) {
      return true;
    }
    
    return false;
  };

  useEffect(() => {
    setScriptSrc(`https://reservation.dish.co/widget.js?v=${Date.now()}`);
    
    const widgetLanguage = isPortugueseSpeakingCountry() ? 'pt' : 'en';
    
    (window as any)._hors = [
      ['eid', 'hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d'],
      ['tagid', 'hors-hydra-f7eb4900-ff50-11ea-a5ce-6522f13fc41d'],
      ['width', '100%'],
      ['height', ''],
      ['language', widgetLanguage],
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
      <div className="w-full lg:w-1/3 flex justify-center">
        <Card
          imageSrc={imgForm}
          width="w-full max-w-md"
          height="h-96 lg:h-[600px]"
          hasOverlay={false}
        />
      </div>

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

        <div className="bg-[#D6CBBB] p-1 lg:p-6 rounded-2xl shadow-lg">
          <DishReservationWidget />
        </div>

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