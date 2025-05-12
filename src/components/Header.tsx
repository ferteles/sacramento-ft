import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/Logo.svg";
import InfoHeader from "./InfoHeader";
import menu from "../assets/MenuIco.svg";
import bgHeader from "../assets/bgHeader.webp";
import bg from "../assets/backgroundHeaderFooter.svg";
import MobileNavBar from "./MobileNavbar";

type HeaderProps = {
  titlePt: string;
  titleEn: string;
  imgSrc?: string;
  backgroundPosition?: "top center" | "center";
};

function Header({
  titlePt,
  titleEn,
  imgSrc,
  backgroundPosition = "center", // Valor padrão agora é "center"
}: HeaderProps) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { toggleLanguage, language } = useLanguage();

  const texts = {
    restaurante: language === "pt" ? "Restaurante" : "Restaurant",
    bar: language === "pt" ? "Bar" : "Bar",
    grupos: language === "pt" ? "Grupos" : "Groups",
    jantar: language === "pt" ? "Jantar Tarde" : "Late Dinner",
    esplanada: language === "pt" ? "Esplanada" : "Terrace",
    club: language === "pt" ? "Club" : "Club",
    title: language === "pt" ? titlePt : titleEn,
  };

  return (
    <div className="top-0 w-full bg-repeat overflow-hidden ">
      {/* Faixa superior com PT/EN */}
      <motion.div
        className=" lg:h-7 h-8 bg-center flex flex-row-reverse px-2 fixed top-0 left-0 w-full z-50 bg-[#E4D9CD]"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button className="cursor-pointer " onClick={toggleLanguage}>
          <p className="text-xs lg:text-base font-semi  text-white">PT/EN</p>
        </button>
      </motion.div>

      {/* Navbar desktop */}
      <motion.div
        className="hidden lg:flex items-center justify-evenly w-full lg:gap-100 px-20 py-6 fixed top-6 lg:top-6 left-0 bg-[#E4D9CD] z-40 h-30  shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex gap-4 text-black text-sm lg:text-base">
          <Link to="/restaurante" className="cursor-pointer hover:underline">
            {texts.restaurante}
          </Link>
          <Link to="/cocktails" className="cursor-pointer hover:underline">
            {texts.bar}
          </Link>
          <Link to="/eventos" className="cursor-pointer hover:underline">
            {texts.grupos}
          </Link>
        </div>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ y: 200, opacity: 0, scale: 1.4 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
        >
          <Link to="/">
            <motion.img
              src={logo}
              alt="Logo Sacramento"
              className="h-12 "
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </Link>
        </motion.div>

        <div className="flex gap-4 text-black text-sm lg:text-base">
          <Link to="/saboreie-noite" className="cursor-pointer hover:underline">
            {texts.jantar}
          </Link>
          <Link
            to="/melhor-alternativa"
            className="cursor-pointer hover:underline"
          >
            {texts.esplanada}
          </Link>
          <Link to="/ambiente" className="cursor-pointer hover:underline">
            {texts.club}
          </Link>
        </div>
      </motion.div>

      {/* Navbar mobile */}
      <div className="flex lg:hidden flex-row w-full px-5 justify-between items-center fixed h-14 top-8 left-0 bg-[#E4D9CD] z-40">
        <Link to="/">
          <img src={logo} alt="Logo" className=" h-7" />
        </Link>
        <button
          className="cursor-pointer"
          onClick={() => setShowMobileNav(true)}
        >
          <img src={menu} alt="Menu" className="h-5" />
        </button>
      </div>

      {showMobileNav && (
        <MobileNavBar onClose={() => setShowMobileNav(false)} />
      )}

      {/* Banner com título e animação no background */}
      <motion.div
        className="relative w-full h-60 lg:h-120  lg:pl-20 flex items-center pt-24 lg:pt-40 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${
              imgSrc || bgHeader
            })`,
            backgroundSize: "cover",
            backgroundPosition: backgroundPosition, // Usa o valor da prop
          }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          className="relative z-10 text-2xl lg:text-5xl font-caudex py-10 px-5 text-white text-left  lg:max-w-2/5 uppercase"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {texts.title}
        </motion.h1>
      </motion.div>

      {/* InfoHeader */}
      <motion.div
        className="z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <InfoHeader />
      </motion.div>
    </div>
  );
}

export default Header;
