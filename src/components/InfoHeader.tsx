import { useLanguage } from "../context/LanguageContext";
import bg from "../assets/backgroundHeaderFooter.svg";

function InfoHeader() {
  const { language } = useLanguage();

  const texts = {
    lunch:
      language === "pt"
        ? "Almoço: Segunda a sexta-feira, das 12h30 às 15h00"
        : "Lunch: Monday to Friday, from 12:30 PM to 3:00 PM",
    dinner:
      language === "pt"
        ? "Jantar: Todos os dias, das 19h30 às 0h00"
        : "Dinner: Every day, from 7:30 PM to 12:00 AM",
    address:
      language === "pt"
        ? "Calçada do Sacramento, 44, Lisboa, Portugal"
        : "Calçada do Sacramento, 44, Lisbon, Portugal",
  };

  return (
    <div
      className="rounded-b-4xl lg:rounded-b-full p-10 lg:p-5 flex py-4 lg:flex-row items-center lg:h-13 justify-center lg:gap-5 flex-col text-white text-center mx-0 lg:mx-20"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h2 className="text-xs lg:text-sm ">
        {texts.lunch}
        <br />
      </h2>
      <h2 className="text-xs lg:text-sm ">{texts.dinner}</h2>
      <h3 className="font-bold text-[9px] lg:text-sm">{texts.address}</h3>
    </div>
  );
}

export default InfoHeader;
