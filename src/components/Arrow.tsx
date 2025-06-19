import arrow from "../assets/Arrow.svg";
import TagManager from "react-gtm-module";

type ArrowProps = {
  title: React.ReactNode;
  fontSize?: string; // Ex: "text-base", "text-xl"
  section?: string; // Para identificar de qual seção veio o clique
};

function Arrow({
  title,
  fontSize = "text-lg",
  section = "unknown",
}: ArrowProps) {
  // Função para enviar evento para o GTM
  const handleCTAClick = () => {
    // Declara o dataLayer se não existir
    if (typeof window !== "undefined") {
      // Type assertion para o TypeScript
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "cta_click",
        cta_text: typeof title === "string" ? title : "CTA Arrow",
        cta_location: section,
        destination: "form",
        restaurant_name: "Sacramento Chiado",
      });
    }
  };

  return (
    <div className="my-5">
      <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-2 lg:gap-4">
        <p
          className={`font-caudex uppercase ${fontSize} text-center lg:text-left`}
        >
          {title}
        </p>
        <a
          href="#form"
          className="cursor-pointer group mt-2 lg:mt-0"
          onClick={handleCTAClick}
        >
          <img
            src={arrow}
            alt="Seta"
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
          />
        </a>
      </div>
    </div>
  );
}

export default Arrow;
