import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Helmet } from "react-helmet-async";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

import { useLanguage } from "../context/LanguageContext";

import topheader from "../assets/backgroundHeaderFooter.svg";
import logo from "../assets/LogoBranca.svg";
import menuIcon from "../assets/MenuIcoWhite.svg";

// Reveillon assets - agora usando imagens desktop/mobile
const reveillonBgDesk = "/assets/reveillon/fundo-rev-desk.gif";
const reveillonBgMobile = "/assets/reveillon/fundo-rev-mobile.gif";
const fullPackImg = "/assets/reveillon/full-pack-main.webp";
const jantarFestaImg = "/assets/reveillon/jantar-festa-left.webp";
const clubDiscoImg = "/assets/reveillon/club-main.webp";
const menuImg2 = "/assets/reveillon/menu-img-2.webp";
const menuTitle = "/assets/reveillon/menu-banner.webp";
const bulletIcon = "/assets/reveillon/bullet-icon.svg";

// Lazy load dos componentes
const InfoHeader = React.lazy(() => import("../components/InfoHeader"));
const Card = React.lazy(() => import("../components/Card"));
const Footer = React.lazy(() => import("../components/Footer"));
import Form from "../components/Form";
const MobileNavBar = React.lazy(() => import("../components/MobileNavbar"));

// Hook de scroll (mantido)
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

// Hook de textos (mantido)
function useTexts(language: string) {
  return {
    title:
      language === "pt"
        ? "Reveillon Sacramento"
        : "Reveillon Sacramento",
    subtitle:
      language === "pt"
        ? "A NOITE COMPLETA NO CORAÇÃO DO CHIADO"
        : "THE COMPLETE NIGHT IN THE HEART OF CHIADO",
    cta: language === "pt" ? "FAÇA SUA RESERVA" : "BOOK YOUR TABLE",
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

// Componente auxiliar (mantido)
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

function Reveillon() {
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

  const leftPaths = ["/restaurante", "/cocktails", "/grupos"];
  const rightPaths = ["/jantar-tarde", "/esplanada", "/club"];

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
    // Garante que o dataLayer existe antes de enviar o evento
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view_virtual",
      page_path: "/",
      page_title: "Sacramento Chiado – História e Gastronomia em Lisboa",
      // Pode adicionar mais informações úteis aqui
      h1_text: texts.title,
    });
  }, [texts.title]); // Dispara quando o texto (e o idioma) mudam

  return (
    <>
      <Helmet>
        <title>Sacramento Chiado – História e Gastronomia em Lisboa</title>
        <meta
          name="description"
          content="Descubra o Sacramento Chiado, onde a história de Lisboa encontra a gastronomia portuguesa. Experiência única no coração do Chiado."
        />
        <meta
          property="og:image"
          content="https://sacramentolisboa.com/assets/og-sacramento-banner.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sacramento Chiado – História e Gastronomia em Lisboa"
        />
        <meta
          property="og:description"
          content="Refeições ao ar livre com vista única no Chiado. Gastronomia portuguesa num ambiente sofisticado e histórico."
        />
        <meta property="og:url" content="https://sacramentolisboa.com/" />
        <link rel="canonical" href="https://sacramentolisboa.com/" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
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
          {/* Vídeo/GIF de fundo */}
          {!scrolled && (
            <div className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
              <picture className="w-full h-full block">
                <source media="(min-width:1024px)" srcSet={reveillonBgDesk} />
                <img
                  src={reveillonBgMobile}
                  alt="Reveillon Background"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.5 }}
                />
              </picture>
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
              <p className="text-sm font-semi text-white cursor-pointer">
                PT/EN
              </p>
            </button>
          </motion.div>

          {/* Navbar */}
          <div
            className={`flex items-center justify-between lg:justify-evenly w-full px-5 lg:px-20 py-4 shadow-md${scrolled ? "bg-[#E4D9CD] shadow-md" : "bg-transparent"
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
            <div className="flex flex-col items-center justify-center flex-grow text-center px-5 py-10 gap-6">
              <p className="text-sm lg:text-base font-catamaran text-white uppercase tracking-widest">
                {texts.title}
              </p>
              <h1 className="text-3xl lg:text-6xl font-caudex text-white uppercase max-w-4xl leading-tight">
                {texts.subtitle}
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4"
              >
                <a
                  href="https://reserve.dish.co/258346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-6 py-3 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition duration-300 inline-block"
                >
                  {texts.cta}
                </a>
              </motion.div>
            </div>
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
            {/* Seção Full-Pack Experience */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 px-6 lg:px-20 py-20">
              <div className="flex flex-col justify-center lg:max-w-1/2 gap-6">
                <h2 className="text-3xl lg:text-6xl font-caudex uppercase text-[#3b1a1a]">Full-Pack Experience</h2>
                <p className="text-base lg:text-lg font-catamaran text-[#3b1a1a] text-justify">
                  Celebre a chegada de 2026 no Sacramento do Chiado com uma experiência pensada ao detalhe. O Full-Pack Experience combina um jantar exclusivo no Restaurante Sacramento com acesso direto à festa de Réveillon no Club Sacramento, garantindo uma noite sofisticada, vibrante e inesquecível.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <Card
                  imageSrc={fullPackImg}
                  width="w-full lg:w-[600px]"
                  height="h-[320px] lg:h-[420px]"
                  hasOverlay={false}
                  backgroundPosition="left -8% top 0%"
                />
              </div>
            </section>

            {/* Seção Jantar + Festa */}
            <section className="flex flex-col lg:flex-row items-center justify-evenly gap-10 px-6 lg:px-20 py-20">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Card
                  imageSrc={jantarFestaImg}
                  width="w-full lg:w-[520px]"
                  height="h-[360px] lg:h-[520px]"
                  hasOverlay={false}
                  backgroundPosition="center"
                />
              </div>
              <div className="flex flex-col gap-6 lg:max-w-1/2 text-[#3b1a1a]">
                <h3 className="text-2xl lg:text-4xl font-caudex">Jantar + Festa</h3>
                <div className="relative">
                  <div className="bg-[#21283b] h-[60px] rounded-[15.62px] w-[265px] flex items-center justify-center">
                    <span className="font-caudex text-[26.77px] leading-[28.1px] text-[#fcf7e5] uppercase">230€ por pessoa</span>
                  </div>
                </div>
                <ul className="space-y-3 text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <img src={bulletIcon} alt="" className="mt-0.5 h-4 w-4" aria-hidden="true" />
                    <span>Menu especial de Réveillon, cuidadosamente elaborado para a ocasião.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src={bulletIcon} alt="" className="mt-0.5 h-4 w-4" aria-hidden="true" />
                    <span>Entrada, prato principal, opção vegetariana e sobremesa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src={bulletIcon} alt="" className="mt-0.5 h-4 w-4" aria-hidden="true" />
                    <span>Bebidas incluídas durante o jantar, incluindo espumante para o brinde da meia-noite.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src={bulletIcon} alt="" className="mt-0.5 h-4 w-4" aria-hidden="true" />
                    <span>Acesso ao Club Sacramento após o jantar, sem necessidade de adquirir outro bilhete e 2 bebidas incluídas no club.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src={bulletIcon} alt="" className="mt-0.5 h-4 w-4" aria-hidden="true" />
                    <span>Ambiente elegante, serviço dedicado e uma celebração completa.</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="https://reserve.dish.co/258346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#3b1a1a] px-5 py-3 text-xs uppercase tracking-wide text-[#3b1a1a] hover:bg-[#3b1a1a] hover:text-white transition duration-200 text-center"
                  >
                    Faça sua reserva
                  </a>
                  <a
                    href="#menu"
                    className="border border-transparent px-5 py-3 text-xs uppercase tracking-wide text-[#3b1a1a] hover:underline text-center"
                  >
                    Conheça o menu
                  </a>
                </div>
              </div>
            </section>

            {/* Seção Club Sacramento New Year's Eve / Bilhetes */}
            <section className="flex flex-col gap-16 py-20 px-6 lg:px-20">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10">
                <div className="flex flex-col gap-6 text-[#3b1a1a] lg:max-w-1/2">
                  <h3 className="text-2xl lg:text-5xl font-caudex leading-snug">Club Sacramento New Year's Eve</h3>
                  <p className="text-base lg:text-lg leading-relaxed">Para quem prefere celebrar apenas a partir das 23h00, o Club Sacramento oferece várias opções de bilhetes para uma noite de música, dança e celebração no centro de Lisboa.</p>
                  <div className="flex flex-col gap-2 text-base leading-relaxed">
                    <div>
                      <div className="font-semibold uppercase tracking-wide">Horário</div>
                      <div>31 de dezembro, das 23h00 às 04h00.</div>
                    </div>
                    <div>
                      <div className="font-semibold uppercase tracking-wide">Localização</div>
                      <div>Club Sacramento</div>
                      <div>Calçada do Sacramento 46, 1200-022 Lisboa, Portugal</div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                  <Card
                    imageSrc={clubDiscoImg}
                    width="w-full lg:w-[440px]"
                    height="h-[320px] lg:h-[440px]"
                    hasOverlay={false}
                    backgroundPosition="center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 mt-12">
                <div className="bg-[#2f2437] text-[#f2e9e4] px-9 py-3 rounded-full text-base font-caudex uppercase tracking-[0.08em] shadow-sm self-center">Bilhetes Disponíveis</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#3b1a1a]">
                  {[
                    {
                      title: "Early Bird — 25€",
                      desc: "Inclui uma cerveja ou um copo de vinho/sidra e um copo de espumante à meia-noite.",
                    },
                    {
                      title: "General Ticket — 35€",
                      desc: "Inclui uma cerveja ou um copo de vinho/sidra e um copo de espumante à meia-noite.",
                    },
                    {
                      title: "Last Chance — 50€",
                      desc: "Inclui uma cerveja ou um copo de vinho/sidra, um cocktail e um copo de espumante à meia-noite.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border border-[#3b1a1a] border-dashed px-4 py-4 rounded-md bg-white/50"
                    >
                      <div className="text-base font-caudex uppercase mb-2">{item.title}</div>
                      <p className="text-base leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#3b1a1a]">
                  <div className="md:col-start-2 lg:col-start-2 border border-[#3b1a1a] border-dashed px-4 py-4 rounded-md bg-white/50 text-center">
                    <div className="text-base font-caudex uppercase mb-2">Open Bar — 100€</div>
                    <p className="text-base leading-relaxed">Inclui acesso ao open bar das 23h00 às 03h00.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-10 text-[#3b1a1a]">
                  <a
                    href="https://reserve.dish.co/258346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-caudex uppercase tracking-wide"
                  >
                    Compre seus bilhetes agora
                  </a>
                  <div className="mt-2">
                    <img
                      src="/assets/reveillon/imgArrow9.png"
                      alt="Decorative underline"
                      className="block w-40 h-[4px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Menu de Reveillon Section */}
            <section id="menu" className="flex flex-col gap-16 py-20 px-6 lg:px-20">
              <div>
                {/* Custom gallery layout matching reference screenshot */}
                {/* uses menuImg2, menuImg3, clubDiscoImg, fullPackImg by default */}
                <React.Suspense fallback={null}>
                  {/* lazy import not necessary here, simple component */}
                </React.Suspense>
                <div className="w-full flex justify-center px-6 lg:px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-[1100px] w-full">
                    <div className="sm:col-span-1 flex items-start">
                      <img src={jantarFestaImg} alt="gallery-1" className="rounded-xl w-full object-cover" style={{ height: 160 }} />
                    </div>
                    <div className="sm:col-span-1 flex items-center justify-center">
                      <img src={menuImg2} alt="gallery-2" className="rounded-xl w-full object-cover" style={{ height: 120 }} />
                    </div>
                    <div className="sm:col-span-2 flex items-start">
                      <img src={clubDiscoImg} alt="gallery-3" className="rounded-xl w-full object-cover" style={{ height: 360 }} />
                    </div>

                    <div className="sm:col-span-2">
                      <img src={fullPackImg} alt="gallery-4" className="rounded-xl w-full object-cover" style={{ height: 260 }} />
                    </div>
                    <div className="sm:col-span-2" />
                  </div>
                </div>
              </div>
              <div className="relative mt-10">
                <Card
                  imageSrc={menuTitle}
                  width="w-full"
                  height="h-[280px] lg:h-[380px]"
                  hasOverlay={true}
                  backgroundPosition="center"
                />
                <div className="absolute inset-0 flex items-center justify-start pl-8 lg:pl-16 pointer-events-none">
                  <h2 className="font-caudex text-3xl lg:text-4xl uppercase text-white leading-tight max-w-xs">
                    Conheça nosso menu de réveillon
                  </h2>
                </div>
              </div>
              <div className="w-full mt-10">
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <h3 className="font-caudex text-base lg:text-lg uppercase text-[#1e1e1e] mb-3 font-semibold">Entrada | Starter</h3>
                      <p className="text-sm lg:text-base font-catamaran text-[#1e1e1e] leading-relaxed">Medalhão de queijo de cabra gratinado, realçado por compota artesanal de morango. Gratinated goat cheese medallion, enhanced by homemade strawberry jam.</p>
                    </div>
                    <div>
                      <h3 className="font-caudex text-base lg:text-lg uppercase text-[#1e1e1e] mb-3 font-semibold">Sobremesa | Dessert</h3>
                      <p className="text-sm lg:text-base font-catamaran text-[#1e1e1e] leading-relaxed">Degustação de sobremesas do chef, finalizada com um cálice de Vinho do Porto. Chefs dessert tasting, with a glass of Port Wine.</p>
                    </div>
                    <div>
                      <h3 className="font-caudex text-base lg:text-lg uppercase text-[#1e1e1e] mb-3 font-semibold">Principal | Main</h3>
                      <p className="text-sm lg:text-base font-catamaran text-[#1e1e1e] leading-relaxed">Camarão tigre selvagem, servido sobre cremoso arroz de alho. Wild tiger prawn served on creamy garlic rice.<br/><br/>Costeletinhas de cordeiro lechal acompanhadas de puré trufado e brócolos biológicos confitados. Suckling lamb chops accompanied by truffle purée and organic broccoli confit.</p>
                    </div>
                    <div>
                      <h3 className="font-caudex text-base lg:text-lg uppercase text-[#1e1e1e] mb-3 font-semibold">Bebidas Incluidas | Drinks Included</h3>
                      <p className="text-sm lg:text-base font-catamaran text-[#1e1e1e] leading-relaxed">Água (natural ou com gás); Refrigerantes; Vinho Tinto ou Branco Esporão Biológico; Cerveja; Café ou Chá.<br/><br/>Garrafa de espumante para celebrar a entrada do ano novo. Bottle of sparkling wine to celebrate the arrival of the new year.<br/><br/>2 bebidas no Club após a meia noite. 2 drinks at the Club after midnight.</p>
                    </div>
                    <div className="col-span-2">
                      <h3 className="font-caudex text-base lg:text-lg uppercase text-[#1e1e1e] mb-3 font-semibold">Vegetariano | Vegetarian</h3>
                      <p className="text-sm lg:text-base font-catamaran text-[#1e1e1e] leading-relaxed">Trilogia de cogumelos biológicos acompanhada com risotto de espargos e alho francês. Trilogy of organic mushrooms served with asparagus and leek risotto.</p>
                    </div>
                    <div className="col-span-2 mt-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-caudex text-xl lg:text-2xl uppercase text-[#1e1e1e] font-semibold whitespace-nowrap">Faça sua reserva</h3>
                        <div className="flex-grow border-b border-[#1e1e1e]"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>

          
            <Form />

            <div className="mt-20 lg:mt-32" />
            <Footer />
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default Reveillon;