import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { useLanguage } from "../context/LanguageContext";

import topheader from "../assets/backgroundHeaderFooter.svg";
import logo from "../assets/LogoBranca.svg";
import menuIcon from "../assets/MenuIcoWhite.svg";
import gifHeader from "../assets/images/pg1/gifHeader.gif";
import img1 from "../assets/images/pg1/img1.webp";

// Lazy load dos componentes
const InfoHeader = React.lazy(() => import("../components/InfoHeader"));
const Card = React.lazy(() => import("../components/Card"));
const HistoriaSection = React.lazy(
  () => import("../components/HistoriaSection")
);
const GaleryFlex = React.lazy(() => import("../components/GaleriaFlex"));
const Arrow = React.lazy(() => import("../components/Arrow"));
const Footer = React.lazy(() => import("../components/Footer"));
const Form = React.lazy(() => import("../components/Form"));
const MobileNavBar = React.lazy(() => import("../components/MobileNavbar"));
// Hook de scroll
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

// Hook de textos
function useTexts(language: string) {
  return {
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
}

// Componente auxiliar
const NavLinks = ({
  labels,
  paths,
  scrolled,
}: {
  labels: string[];
  paths: string[];
  scrolled: boolean;
}) => (
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

function OndeAHistoria() {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();
  const headerRef = useRef<HTMLDivElement>(null);

  const { language, toggleLanguage } = useLanguage();
  const scrolled = useScrolled();
  const texts = useTexts(language);

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

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <motion.div
        ref={headerRef}
        animate={controls}
        initial={{
          backgroundColor: "#000000",
          height: "100vh",
        }}
        className="w-full flex flex-col fixed top-0 left-0 z-50 overflow-hidden" // Adicionando overflow-hidden
      >
        {/* Vídeo de fundo */}
        {!scrolled && (
          <img
            src={gifHeader} // Certifique-se de que gifHeader aponta para o .mp4
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            style={{ opacity: 0.5 }} // Ajuste a opacidade conforme necessário
          />
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
        <div
          className={`flex items-center justify-between lg:justify-evenly w-full px-5 lg:px-20 py-4 shadow-md${
            scrolled ? "bg-[#E4D9CD] shadow-md" : "bg-transparent"
          } transition-all duration-500`}
        >
          <div className="hidden lg:flex gap-6 text-sm">
            <NavLinks
              labels={headerLinks[language].left}
              paths={leftPaths}
              scrolled={scrolled}
            />
          </div>

          <Link to="/">
            <motion.img
              src={logo}
              alt="Logo Sacramento"
              animate={{
                filter: scrolled ? "brightness(0)" : "brightness(1)",
              }}
              transition={transitionSettings}
              className="h-7 lg:h-10"
            />
          </Link>

          <div className="hidden lg:flex gap-6 text-sm">
            <NavLinks
              labels={headerLinks[language].right}
              paths={rightPaths}
              scrolled={scrolled}
            />
          </div>

          {/* Mobile menu */}
          <div className="flex lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <motion.img
                src={menuIcon}
                alt="Menu Icon"
                animate={{
                  filter: scrolled ? "brightness(0)" : "brightness(1)",
                }}
                transition={transitionSettings}
                className="h-5"
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

        {menuOpen && (
          <Suspense
            fallback={
              <div className="text-white text-center">Carregando menu...</div>
            }
          >
            <MobileNavBar onClose={() => setMenuOpen(false)} />
          </Suspense>
        )}
      </motion.div>

      {/* Espaço do Header */}
      <div style={{ height: "40vh" }} />

      {/* Conteúdo principal */}
      <Suspense
        fallback={
          <div className="text-center py-10">Carregando conteúdo...</div>
        }
      >
        <InfoHeader />
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
              <h2 className="text-3xl lg:text-5xl font-caudex uppercase lg:max-w-2/3">
                {texts.h2}
              </h2>
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
      </Suspense>
    </div>
  );
}

export default OndeAHistoria;
