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
  to,
  fontSize = "text-lg",
  section = "unknown",
}: ArrowProps) {
  const handleCTAClick = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "cta_click",
        cta_text: typeof title === "string" ? title : "CTA Arrow",
        cta_location: section,
        destination: to ?? "form",
        restaurant_name: "Sacramento Chiado",
      },
    });
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    handleCTAClick();
    const el = document.getElementById("form");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const content = (
    <>
      <p className={`font-caudex uppercase ${fontSize} text-center lg:text-left`}>
        {title}
      </p>
      <img
        src={arrow}
        alt="Seta"
        className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 mt-2 lg:mt-0"
      />
    </>
  );

  return (
    <div className="my-5">
      {to ? (
        <Link
          to={to}
          className="flex flex-col lg:flex-row items-center lg:justify-start gap-2 lg:gap-4 cursor-pointer group"
          onClick={handleCTAClick}
        >
          {content}
        </Link>
      ) : (
        <a
          href="#form"
          className="flex flex-col lg:flex-row items-center lg:justify-start gap-2 lg:gap-4 cursor-pointer group"
          onClick={scrollToForm}
        >
          {content}
        </a>
      )}
    </div>
  );
}

export default Arrow;
