import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import imgForm from "../assets/imgForm.webp";

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

        <a
          href="https://reserve.dish.co/258346"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#441F0E] text-white px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-widest hover:bg-[#6B5B50] transition-colors duration-300"
          tabIndex={0}
        >
          {language === "pt" ? "Reservar Mesa" : "Book a Table"}
        </a>

        <p className="text-xs text-[#6B5B50] mt-4">
          {language === "pt"
            ? "Ao fazer uma reserva, será redirecionado para o sistema externo Dish.co"
            : "By making a reservation, you will be redirected to the external Dish.co system."}
        </p>
      </div>
    </div>
  );
}

export default Form;