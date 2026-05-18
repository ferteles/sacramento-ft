import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import imgForm from "../assets/imgForm.webp";

function Form() {
  const { language } = useLanguage();

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="easytable.com"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://book.easytable.com/book/widget/v3/book.js";
      document.body.appendChild(script);
    }
  }, []);

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

        <div
          key={language}
          className="BookingBox"
          data-place="76f08"
          data-lang={language === "pt" ? "pt" : "en"}
        >
          <span>
            In cooperation with{" "}
            <a
              href="http://easytable.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Restaurant reservation and booking system"
            >
              easyTable.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Form;