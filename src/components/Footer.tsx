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
          { name: "Grupos", path: "/grupos" },
          { name: "Jantar Tarde", path: "/jantar-tarde" },
          { name: "Esplanada", path: "/esplanada" },
          { name: "Club", path: "/club" },
        ]
      : [
          { name: "Restaurant", path: "/restaurante" },
          { name: "Gastronomy", path: "/jantar-tarde" },
          { name: "History", path: "/" },
          { name: "Events", path: "/grupos" },
          { name: "Contact", path: "/club" },
          { name: "Reservations", path: "/esplanada" },
        ],
    hours: isPT
      ? ["Jantar: 18h00 às 01h00", "Esplanada: 16h00 às 23h00"]
      : ["Dinner: 6:00 PM – 1:00 AM", "Terrace: 4:00 PM – 11:00 PM"],
    address: [
      { type: "map", value: [
        "Sacramento do Chiado",
        "Calçada do Sacramento, 44",
        "1200-394 Lisboa, Portugal"
      ] },
      { type: "phone", value: "+351 213 420 572" },
      { type: "email", value: "reservas@tablegroup.pt" },
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
            <p className="mb-1">{t.hours[0]}</p>
            <p className="mb-1">{t.hours[1]}</p>
          </div>
          <div>
            <p className="mt-3 mb-1">{t.hours[2]}</p>
            <p>{t.hours[3]}</p>
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col  items-top text-sm lg:text-xl w ">
          {t.address.map((line, i) => {
            if (typeof line === "string") {
              return <p key={i}>{line}</p>;
            } else if (line.type === "map" && Array.isArray(line.value)) {
              return (
                <a
                  key={i}
                  href="https://maps.app.goo.gl/vxAt4pjoHFPRP1LA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  {line.value.map((l: string, idx: number) => (
                    <span key={idx}>
                      {l}
                      {idx < line.value.length - 1 && <br />}
                    </span>
                  ))}
                </a>
              );
            } else if (line.type === "phone" && typeof line.value === "string") {
              return (
                <p key={i}>
                  <a href={`tel:${(line.value as string).replace(/\s+/g, "")}`} className="hover:text-yellow-400">{line.value}</a>
                </p>
              );
            } else if (line.type === "email" && typeof line.value === "string") {
              return (
                <p key={i}>
                  <a href={`mailto:${line.value}`} className="hover:text-yellow-400">{line.value}</a>
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
      {/* Redes Sociais */}
      <div className="flex flex-row  p-6 text-sm gap-2 lg:text-lg  lg:pt-30 lg:gap-10">
        <a
          href="https://www.instagram.com/sacramentodochiado"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
        >
          {t.social[0]}
        </a>
        <a
          href="https://www.facebook.com/restaurantesacramentodochiado"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
        >
          {t.social[1]}
        </a>
      </div>
    </div>
  );
}

export default Footer;
