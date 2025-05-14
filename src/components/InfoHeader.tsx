import { useLanguage } from "../context/LanguageContext";
import bg from "../assets/backgroundHeaderFooter.svg";

function InfoHeader() {
  const { language } = useLanguage();

  const texts = {
    openingHours:
      language === "pt"
        ? "Horário de Funcionamento: 18h00 - 01h00"
        : "Opening Hours: 6:00 PM – 1:00 AM",
    terrace:
      language === "pt"
        ? "Explanada: 16h00 - 23h00"
        : "Terrace: 4:00 PM – 11:00 PM",
    address:
      language === "pt"
        ? "Calçada do Sacramento, 44, Lisboa, Portugal"
        : "Calçada do Sacramento, 44, Lisbon, Portugal",
  };

  return (
    <div
      className="rounded-b-4xl lg:rounded-b-full p-10 lg:p-5 flex py-4 lg:flex-row items-center lg:h-15 justify-center lg:gap-5 flex-col text-white text-center mx-0 lg:mx-20"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <p className="text-xs lg:text-sm ">
        {texts.openingHours}
        <br />
      </p>
      <p className="text-xs lg:text-sm ">{texts.terrace}</p>
      <p className="font-bold text-[9px] lg:text-sm">{texts.address}</p>
    </div>
  );
}

export default InfoHeader;
