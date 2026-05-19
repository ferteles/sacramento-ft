import { Link } from "react-router-dom";
import arrow from "../assets/Arrow.svg";
import TagManager from "react-gtm-module";

type ArrowProps = {
  title: React.ReactNode;
  to?: string;
  fontSize?: string;
  section?: string;
};

function Arrow({
  title,
  to = "/reservar",
  fontSize = "text-lg",
  section = "unknown",
}: ArrowProps) {
  // Função para enviar evento para o GTM
  const handleCTAClick = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "cta_click",
        cta_text: typeof title === "string" ? title : "CTA Arrow",
        cta_location: section,
        destination: "form",
        restaurant_name: "Sacramento Chiado",
      },
    });
  };

  return (
    <div className="my-5">
      <Link
        to={to}
        className="flex flex-col lg:flex-row items-center lg:justify-start gap-2 lg:gap-4 cursor-pointer group"
        onClick={handleCTAClick}
      >
        <p
          className={`font-caudex uppercase ${fontSize} text-center lg:text-left`}
        >
          {title}
        </p>
        <img
          src={arrow}
          alt="Seta"
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 mt-2 lg:mt-0"
        />
      </Link>
    </div>
  );
}

export default Arrow;
