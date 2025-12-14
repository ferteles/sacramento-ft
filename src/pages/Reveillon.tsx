
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

import topheader from "../assets/backgroundHeaderFooter.svg";
import logo from "../assets/LogoBranca.svg";
import menuIcon from "../assets/MenuIcoWhite.svg";
import gifHeaderPC from "../assets/images/pg1/gifHeaderPC.webm";
import gifHeaderMobile from "../assets/images/pg1/gifHeaderMobile.gif";

const InfoHeader = React.lazy(() => import("../components/InfoHeader"));
const Footer = React.lazy(() => import("../components/Footer"));
const MobileNavBar = React.lazy(() => import("../components/MobileNavbar"));

function useScrolled(threshold = 0.2) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * threshold);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

const NavLinks = ({ labels, paths, scrolled }) => (
  <>
    {labels.map((label, idx) => (
      <Link
        key={idx}
        to={paths[idx]}
        className={`hover:underline ${scrolled ? "text-black" : "text-white"}`}
      >
        {label}
      </Link>
    ))}
  </>
);

function Reveillon() {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const scrolled = useScrolled();

  const transitionSettings = { duration: 0.5, ease: "easeInOut" };

  const headerLinks = {
    pt: {
      left: ["Restaurante", "Bar", "Grupos"],
      right: ["Jantar Tarde", "Esplanada", "Club", "Réveillon"],
    },
    en: {
      left: ["Restaurant", "Bar", "Groups"],
      right: ["Late Dinner", "Esplanade", "Club", "Réveillon"],
    },
  };
  const leftPaths = ["/restaurante", "/cocktails", "/grupos"];
  const rightPaths = ["/jantar-tarde", "/esplanada", "/club", "/reveillon"];

  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`
      );
    }
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: scrolled ? "#E4D9CD" : "#000000",
      height: scrolled ? "" : "100vh",
      transition: transitionSettings,
    });
  }, [scrolled, controls]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Réveillon Sacramento Chiado</title>
        <meta name="description" content="Réveillon especial no Sacramento Chiado. Reserve sua noite de Ano Novo no coração de Lisboa!" />
        <meta property="og:title" content="Réveillon Sacramento Chiado" />
        <meta property="og:description" content="Réveillon especial no Sacramento Chiado. Reserve sua noite de Ano Novo no coração de Lisboa!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sacramentolisboa.com/reveillon" />
      </Helmet>
      <div className="w-full overflow-x-hidden">
        {/* Header/Banner */}
        <motion.div
          ref={headerRef}
          animate={controls}
          initial={{ backgroundColor: "#000000", height: "100vh" }}
          className="w-full flex flex-col fixed top-0 left-0 z-50 overflow-hidden"
        >
          {/* Vídeo/GIF de fundo */}
          {!scrolled && (
            <div className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
              {!isMobile ? (
                <video autoPlay loop muted src={gifHeaderPC} className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
              ) : (
                <img src={gifHeaderMobile} alt="Background Animation" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
              )}
            </div>
          )}
          {/* Faixa superior */}
          <motion.div
            className="h-8 lg:h-10 bg-center flex flex-row-reverse items-center px-5 lg:px-10"
            style={{
              backgroundImage: `url(${topheader})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#000000",
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionSettings}
          >
            <button onClick={toggleLanguage}>
              <p className="text-sm font-semi text-white cursor-pointer">PT/EN</p>
            </button>
          </motion.div>
          {/* Navbar */}
          <div className={`flex items-center justify-between lg:justify-evenly w-full px-5 lg:px-20 py-4 shadow-md${scrolled ? "bg-[#E4D9CD] shadow-md" : "bg-transparent"} transition-all duration-500`}>
            <div className="hidden lg:flex gap-6 text-sm">
              <NavLinks labels={headerLinks[language].left} paths={leftPaths} scrolled={scrolled} />
            </div>
            <Link to="/">
              <motion.img
                src={logo}
                alt="Logo Sacramento"
                animate={{ filter: scrolled ? "brightness(0)" : "brightness(1)" }}
                transition={transitionSettings}
                className="h-7 lg:h-10"
              />
            </Link>
            <div className="hidden lg:flex gap-6 text-sm">
              <NavLinks labels={headerLinks[language].right} paths={rightPaths} scrolled={scrolled} />
            </div>
            {/* Mobile menu */}
            <div className="flex lg:hidden">
              <button onClick={() => setMenuOpen(true)}>
                <motion.img
                  src={menuIcon}
                  alt="Menu Icon"
                  animate={{ filter: scrolled ? "brightness(0)" : "brightness(1)" }}
                  transition={transitionSettings}
                  className="h-5"
                />
              </button>
            </div>
          </div>
          {/* Hero */}
          {!scrolled && (
            <div className="flex flex-col items-center justify-center flex-grow text-center px-5 py-10">
              <h1 className="text-4xl lg:text-7xl font-caudex text-white uppercase max-w-5xl">
                {language === "pt" ? "Réveillon Sacramento Chiado" : "New Year's Eve Sacramento Chiado"}
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8"
              >
                <a
                  href="#form-reveillon"
                  className="border border-white px-5 py-3 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition duration-300 inline-block"
                >
                  {language === "pt" ? "Reservar Réveillon" : "Book New Year's Eve"}
                </a>
              </motion.div>
            </div>
          )}
          {menuOpen && (
            <Suspense fallback={<div className="text-white text-center">Carregando menu...</div>}>
              <MobileNavBar onClose={() => setMenuOpen(false)} />
            </Suspense>
          )}
        </motion.div>
        {/* Espaço do Header */}
        <div style={{ height: "40vh" }} />
        {/* Conteúdo principal */}
        <Suspense fallback={<div className="text-center py-10">Carregando conteúdo...</div>}>
          <InfoHeader />
          <div className="flex flex-col items-center justify-center min-h-[40vh] py-20">
            <h2 className="text-3xl lg:text-5xl font-caudex uppercase mb-6 text-center">
              {language === "pt"
                ? "Celebre o Ano Novo no Sacramento Chiado!"
                : "Celebrate New Year's Eve at Sacramento Chiado!"}
            </h2>
            <p className="max-w-2xl text-center mb-10">
              {language === "pt"
                ? "Uma noite inesquecível com gastronomia especial, ambiente sofisticado e muita animação no coração de Lisboa. Reserve já o seu lugar para o Réveillon mais exclusivo do Chiado!"
                : "An unforgettable night with special cuisine, a sophisticated atmosphere, and lots of fun in the heart of Lisbon. Book your spot now for the most exclusive New Year's Eve in Chiado!"}
            </p>
            <a
              id="form-reveillon"
              href="https://reserve.dish.co/258346"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#C19A6B] bg-[#C19A6B] text-white px-6 py-3 rounded-full font-bold uppercase shadow-lg hover:bg-[#b88a4c] transition-colors duration-200"
            >
              {language === "pt" ? "Reservar agora" : "Book now"}
            </a>
          </div>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default Reveillon;
