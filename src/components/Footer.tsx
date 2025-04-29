import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import logo from "../assets/LogoBranca.svg";
import bg from "../assets/backgroundHeaderFooter.svg";

function Footer() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    nav: isPT
      ? [
          { name: "Home", path: "/" },
          { name: "Restaurante", path: "/restaurante" },
          { name: "Bar", path: "/cocktails" },
          { name: "Grupos", path: "/eventos" },
          { name: "Jantar Tarde", path: "/saboreie-noite" },
          { name: "Esplanada", path: "/melhor-alternativa" },
          { name: "Club", path: "/ambiente" },
        ]
      : [
          { name: "Restaurant", path: "/restaurante" },
          { name: "Gastronomy", path: "/saboreie-noite" },
          { name: "History", path: "/" },
          { name: "Events", path: "/eventos" },
          { name: "Contact", path: "/ambiente" },
          { name: "Reservations", path: "/melhor-alternativa" },
        ],
    hours: isPT
      ? [
          "Almoço: Segunda a sexta-feira,",
          "das 12h30 às 15h00",
          "Jantar: Todos os dias,",
          "das 19h30 às 0h00",
        ]
      : [
          "Lunch: Monday to Friday,",
          "from 12:30 PM to 3:00 PM",
          "Dinner: Every day,",
          "from 7:30 PM to 12:00 AM",
        ],
    address: [
      "Sacramento do Chiado",
      "Calçada do Sacramento, 44",
      "1200-394 Lisboa, Portugal",
      "+351 213 420 572",
      "reservas@sacramentodochiado.com",
    ],
    social: ["Instagram", "Facebook"],
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover w-full bg-no-repeat bg-center text-white lg:flex lg:flex-row justify-end font-catamaran font-thin"
    >
      {/* Bloco do logo */}
      <div className="bg-[#441F0E] flex items-center lg:w-1/3   justify-center p-10 lg:p-5  lg:h-[684px] ">
        <img src={logo} alt="Logo Sacramento" className="w-40 md:w-52" />
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col lg:items-start lg:pt-40 lg:flex-row justify-start px-6 gap-5 lg:gap-10 max-w-7xl  py-10 lg:pl-20 lg:w-2/3">
        {/* Navegação */}
        <div className="flex flex-col gap-2 text-sm lg:text-xl lg:w-80 lg:gap-7">
          {t.nav.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Horários */}
        <div className="flex flex-col text-sm lg:text-xl lg:gap-7 lg:w-80 ">
          <div>
            <h2 className="mb-1">{t.hours[0]}</h2>
            <h2 className="mb-1">{t.hours[1]}</h2>
          </div>
          <div>
            <h2 className="mt-3 mb-1">{t.hours[2]}</h2>
            <h2>{t.hours[3]}</h2>
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col  items-top text-sm lg:text-xl w ">
          {t.address.map((line, i) => (
            <h2 key={i}>{line}</h2>
          ))}
        </div>
      </div>
      {/* Redes Sociais */}
      <div className="flex flex-row  p-6 text-sm gap-2 lg:text-lg  lg:pt-30 lg:gap-10">
        <a
          href="https://www.instagram.com/sacramentodochiado"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          {t.social[0]}
        </a>
        <a
          href="https://www.facebook.com/restaurantesacramentodochiado"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.social[1]}
        </a>
      </div>
    </div>
  );
}

export default Footer;
