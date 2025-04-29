import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import topheader from "../assets/backgroundHeaderFooter.svg";
import logo from "../assets/LogoBranca.svg";
import menuIcon from "../assets/MenuIcoWhite.svg";
import InfoHeader from "../components/InfoHeader";
import Card from "../components/Card";
import HistoriaSection from "../components/HistoriaSection";
import GaleryFlex from "../components/GaleriaFlex";
import Arrow from "../components/Arrow";
import Footer from "../components/Footer";
import Form from "../components/Form";
import MobileNavBar from "../components/MobileNavbar";

import imgHeader from "../assets/images/pg1/imgHeader.jpg";
import img1 from "../assets/images/pg1/img1.jpg";

function OndeAHistoria() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const headerRef = useRef<HTMLDivElement>(null);

  const { language, toggleLanguage } = useLanguage();

  const transitionSettings = { duration: 0.5, ease: "easeInOut" };

  const headerLinks = {
    pt: {
      left: ["Restaurante", "Bar", "Grupos"],
      right: ["Jantar Tarde", "Esplanada", "Club"],
    },
    en: {
      left: ["Restaurant", "Bar", "Groups"],
      right: ["Late Dinner", "Esplanade", "Club"],
    },
  };

  const leftPaths = ["/restaurante", "/cocktails", "/eventos"];
  const rightPaths = ["/saboreie-noite", "/melhor-alternativa", "/ambiente"];

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.2;

      if (window.scrollY > threshold && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY <= threshold && scrolled) {
        setScrolled(false);
      }
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeaderHeight);
    updateHeaderHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [scrolled]);

  useEffect(() => {
    controls.start({
      backgroundColor: scrolled ? "#E4D9CD" : "#000000",
      height: scrolled ? "5rem" : "100vh",
      transition: transitionSettings,
    });
  }, [scrolled, controls]);

  const texts = {
    title:
      language === "pt"
        ? "Onde a História de Lisboa Encontra a Gastronomia Portuguesa"
        : "Where Lisbon's History Meets Portuguese Gastronomy",
    cta: language === "pt" ? "Faça Sua Reserva" : "Book Your Table Now",
    h2:
      language === "pt"
        ? "No coração do Chiado, o Sacramento é uma viagem pela história de Lisboa"
        : "In the heart of Chiado, Sacramento is a journey through Lisbon's history",
    paragraph:
      language === "pt"
        ? "No coração do Chiado, o Sacramento é uma viagem pela história de Lisboa, onde a arquitetura centenária se une à cozinha portuguesa moderna. Descubra um ambiente único, que combina requinte e descontração, ideal para momentos inesquecíveis. Localizado no antigo Palácio dos Condes de Valadares, o Sacramento oferece uma experiência gastronómica que honra a tradição portuguesa, enquanto surpreende com toques modernos. Reserve já a sua mesa e desfrute de uma experiência única no coração de Lisboa."
        : "In the heart of Chiado, Sacramento is more than a restaurant: it's a journey through Lisbon's history, where centuries-old architecture meets reinvented Portuguese cuisine. Discover a unique setting that blends sophistication and relaxation, ideal for unforgettable moments. Located in the former Palace of the Counts of Valadares, Sacramento offers a dining experience that honors Portuguese tradition while surprising with modern twists. Book your table now and enjoy a unique experience in the heart of Lisbon.",
    arrow:
      language === "pt" ? (
        <>
          Conheça <br /> nosso menu
        </>
      ) : (
        <>
          Discover <br /> our menu
        </>
      ),
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header completo */}
      <motion.div
        ref={headerRef}
        animate={controls}
        initial={{
          backgroundColor: "#000000",
          height: "100vh",
        }}
        className="w-full flex flex-col fixed top-0 left-0 z-50"
        style={{
          backgroundImage: !scrolled
            ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imgHeader})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Faixa superior */}
        <motion.div
          className="h-8 lg:h-10 bg-center flex flex-row-reverse items-center px-5 lg:px-10 "
          style={{
            backgroundImage: `url(${topheader})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSettings}
        >
          <button onClick={toggleLanguage}>
            <h1 className="text-sm font-semi text-white">PT/EN</h1>
          </button>
        </motion.div>

        {/* Navbar */}
        <div
          className={`flex items-center justify-between lg:justify-evenly w-full px-5  lg:px-20 py-4 ${
            scrolled ? "bg-[#E4D9CD] shadow-md" : "bg-transparent"
          } transition-all duration-500`}
        >
          {/* Left Links */}
          <div className="hidden lg:flex gap-6 text-sm">
            {headerLinks[language].left.map((label, idx) => (
              <Link
                key={idx}
                to={leftPaths[idx]}
                className={`hover:underline ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/">
            <motion.img
              src={logo}
              alt="Logo Sacramento"
              animate={{ filter: scrolled ? "brightness(0)" : "brightness(1)" }}
              transition={transitionSettings}
              className="h-7 lg:h-12"
            />
          </Link>

          {/* Right Links */}
          <div className="hidden lg:flex gap-6 text-sm">
            {headerLinks[language].right.map((label, idx) => (
              <Link
                key={idx}
                to={rightPaths[idx]}
                className={`hover:underline ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <motion.img
                src={menuIcon}
                alt="Menu Icon"
                animate={{
                  filter: scrolled ? "brightness(0)" : "brightness(1)",
                }}
                transition={transitionSettings}
                className="h-5 "
              />
            </button>
          </div>
        </div>

        {/* Hero */}
        {!scrolled && (
          <motion.div
            className="flex flex-col items-center justify-center flex-grow text-center px-5 py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-7xl font-caudex text-white uppercase max-w-5xl">
              {texts.title}
            </h1>
            <a href="#form" className="mt-8">
              <button className="border border-white px-5 py-3 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition duration-300">
                {texts.cta}
              </button>
            </a>
          </motion.div>
        )}
        {menuOpen && <MobileNavBar onClose={() => setMenuOpen(false)} />}
      </motion.div>

      {/* Placeholder */}
      <div style={{ height: "40vh" }} />

      {/* InfoHeader */}
      <div className="w-full">
        <InfoHeader />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start">
        <div className="flex flex-col lg:flex-row px-6 py-20 gap-10 lg:justify-evenly">
          <div className="lg:w-1/2 flex lg:justify-center">
            <Card
              imageSrc={img1}
              width="w-40 lg:w-[599px]"
              height="h-48 lg:h-[735px]"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-10 justify-start lg:mt-20">
            <h1 className="text-3xl lg:text-6xl font-caudex uppercase lg:max-w-2/3 ">
              {texts.h2}
            </h1>
            <p className="w-full lg:max-w-xl">{texts.paragraph}</p>
          </div>
        </div>

        <HistoriaSection />
        <div className="-mt-10 lg:-mt-50 w-full flex flex-col items-center gap-20 px-6">
          <GaleryFlex />
          <Arrow title={texts.arrow} fontSize="text-5xl" />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OndeAHistoria;
