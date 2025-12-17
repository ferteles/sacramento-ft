import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import topheader from "../assets/backgroundHeaderFooter.svg";
import logo from "../assets/LogoBranca.svg";
import menuIcon from "../assets/MenuIcoWhite.svg";

// Reveillon assets - agora usando imagens desktop/mobile
const reveillonBgDesk = "/assets/reveillon/fundo-rev-desk.gif";
const reveillonBgMobile = "/assets/reveillon/fundo-rev-mobile.gif";
const fullPackImg = "/assets/reveillon/club-nude-project.webp";
const clubDiscoImg = "/assets/reveillon/club-main.webp";
const bulletIcon = "/assets/reveillon/bullet-icon.svg";
const sacramentoStories2512 = "/assets/reveillon/sacramento-stories-2512.png";
const sacramentoStories2513 = "/assets/reveillon/sacramento-stories-2513.png";
const maskShape = "/assets/reveillon/mask-shape.svg";
const jantarFestaMeninas = "/assets/reveillon/jantar-festa-meninas.webp";

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
      language === "pt" ? (
        <>
          A NOITE COMPLETA <br /> NO CORAÇÃO DO CHIADO
        </>
      ) : (
        "THE COMPLETE NIGHT IN THE HEART OF CHIADO"
      ),
    cta: language === "pt" ? "FAÇA SUA RESERVA" : "BOOK YOUR TABLE",
    fullPackTitle: language === "pt" ? (
      <>
        Full-Pack <br /> Experience
      </>
    ) : (
      <>
        Full-Pack <br /> Experience
      </>
    ),
    fullPackParagraph:
      language === "pt"
        ? "Celebre a chegada de 2026 no Sacramento do Chiado com uma experiência pensada ao detalhe. O Full-Pack Experience combina um jantar exclusivo no Restaurante Sacramento com acesso direto à festa de Réveillon no Club Sacramento, garantindo uma noite sofisticada, vibrante e inesquecível."
        : "Celebrate the arrival of 2026 at Sacramento do Chiado with a carefully curated experience. The Full-Pack bundles an exclusive dinner with direct access to the New Year's Eve party at Club Sacramento, ensuring a sophisticated, vibrant and unforgettable night.",
    dinnerTitle: language === "pt" ? "Jantar + Festa" : "Dinner + Party",
    dinnerBullets: language === "pt" ? [
      "Menu especial de Réveillon, cuidadosamente elaborado para a ocasião.",
      "Entrada, prato principal, opção vegetariana e sobremesa.",
      "Bebidas incluídas durante o jantar, incluindo espumante para o brinde da meia-noite.",
      "Acesso ao Club Sacramento após o jantar, sem necessidade de adquirir outro bilhete e 2 bebidas incluídas no club.",
      "Ambiente elegante, serviço dedicado e uma celebração completa."
    ] : [
      "Special New Year's Eve menu, carefully crafted for the occasion.",
      "Starter, main course, vegetarian option and dessert.",
      "Drinks included during dinner, including sparkling wine for the midnight toast.",
      "Access to Club Sacramento after dinner without purchasing another ticket and 2 drinks included at the club.",
      "Elegant atmosphere, dedicated service and a complete celebration."
    ],
    reserveCta: language === "pt" ? "faça sua reserva" : "book your table",
    menuCta: language === "pt" ? "conheça o menu" : "see the menu",
    ticketsAvailableLabel: language === "pt" ? "Bilhetes Disponíveis" : "Tickets Available",
    buyTicketsLabel: language === "pt" ? "Compre seus bilhetes agora" : "Buy your tickets now",
    menuBannerTitle: language === "pt" ? (
      <>
        Conheça nosso menu<br />de réveillon
      </>
    ) : (
      "Discover our New Year's Eve menu"
    ),
    menu: language === "pt" ? {
      entrada: { title: 'Entrada', desc: 'Medalhão de queijo de cabra gratinado, realçado por compota artesanal de morango.' },
      sobremesa: { title: 'Sobremesa', desc: "Degustação de sobremesas do chef, finalizada com um cálice de Vinho do Porto." },
      principal: { title: 'Principal', desc: 'Camarão tigre selvagem, servido sobre cremoso arroz de alho. Costeletinhas de cordeiro lechal acompanhadas de puré trufado e brócolos biológicos confitados.' },
      bebidas: { title: 'Bebidas Incluídas', desc: 'Água (natural ou com gás); Refrigerantes; Vinho Tinto ou Branco Esporão Biológico; Cerveja; Café ou Chá. Garrafa de espumante para celebrar a entrada do ano novo. 2 bebidas no Club após a meia noite.' },
      vegetariano: { title: 'Vegetariano', desc: 'Trilogia de cogumelos biológicos acompanhada com risotto de espargos e alho francês.' }
    } : {
      entrada: { title: 'Starter', desc: 'Gratinated goat cheese medallion, enhanced by homemade strawberry jam.' },
      sobremesa: { title: 'Dessert', desc: "Chef's dessert tasting, with a glass of Port Wine." },
      principal: { title: 'Main', desc: 'Wild tiger prawn served on creamy garlic rice. Suckling lamb chops accompanied by truffle purée and organic broccoli confit.' },
      bebidas: { title: 'Drinks Included', desc: 'Still or Sparkling Mineral Water; Soft Drinks; Esporão Organic Red or White Wine; Beer; Coffee or Tea. Bottle of sparkling wine to celebrate the arrival of the new year. 2 drinks at the Club after midnight.' },
      vegetariano: { title: 'Vegetarian', desc: 'Trilogy of organic mushrooms served with asparagus and leek risotto.' }
    },
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
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
    const setHeaderHeightVar = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    // Set immediately and again after animation/resize settles
    setHeaderHeightVar();
    const t = window.setTimeout(setHeaderHeightVar, 400);

    return () => window.clearTimeout(t);
  }, [scrolled]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          content="https://sacramentolisboa.com/assets/og-sacramento-banner.webp"
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
              <p className="text-xl lg:text-3xl font-catamaran text-white uppercase tracking-widest">
                {texts.title}
              </p>
              <h1 className="font-caudex text-[48px] text-white uppercase max-w-4xl leading-tight">
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
        <div style={{ height: "var(--header-height, 100vh)" }} />

        {/* Conteúdo principal */}
        <Suspense
          fallback={
            <div className="text-center py-10">Carregando conteúdo...</div>
          }
        >
          <InfoHeader />
          <div className="flex flex-col items-start">
            {/* Seção Full-Pack Experience */}
            <section className="w-screen relative py-10 lg:py-60">
              <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 lg:mb-16">
                  <h2 className="font-caudex uppercase text-[32px] lg:text-[48px] justify-self-center text-center" style={{ color: '#1e1e1e', fontStyle: 'normal', fontWeight: 'normal' }}>
                    {texts.fullPackTitle}
                  </h2>
                  <p className="font-catamaran text-[16px] lg:text-[20px]" style={{ color: '#1e1e1e', fontWeight: '300' }}>
                    {texts.fullPackParagraph}
                  </p>
                </div>
                
                <div className="relative w-full" style={{ paddingBottom: isMobile ? '80%' : '33.13%' }}>
                  {/* Camada de máscara com imagens de fundo */}
                  <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                    <div 
                      className="absolute rounded-[40px]"
                      style={{
                        height: '341.56%',
                        left: '-45.91%',
                        top: '119.21%',
                        width: '215.34%',
                        WebkitMaskImage: `url(${maskShape})`,
                        maskImage: `url(${maskShape})`,
                        WebkitMaskSize: '1219px 479px',
                        maskSize: '1219px 479px',
                        WebkitMaskPosition: '702.696px 569.285px',
                        maskPosition: '702.696px 569.285px',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                      }}
                    >
                      <img 
                        src={sacramentoStories2512}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                        style={{
                          objectPosition: '50% 50%'
                        }}
                      />
                    </div>
                    <div 
                      className="absolute rounded-[40px]"
                      style={{
                        height: '285.17%',
                        left: '-45.37%',
                        top: '172.86%',
                        width: '179.69%',
                        WebkitMaskImage: `url(${maskShape})`,
                        maskImage: `url(${maskShape})`,
                        WebkitMaskSize: '1219px 479px',
                        maskSize: '1219px 479px',
                        WebkitMaskPosition: '696.082px 443.823px',
                        maskPosition: '696.082px 443.823px',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                      }}
                    >
                      <img 
                        src={sacramentoStories2513}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                        style={{
                          objectPosition: '50% 50%'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Imagem principal */}
                  <div 
                    className="absolute overflow-hidden rounded-[40px]"
                    style={{
                      height: '100%',
                      left: '0',
                      top: '0',
                      width: '100%'
                    }}
                  >
                    <img 
                      src={fullPackImg}
                      alt="Full Pack Experience"
                      className="absolute"
                      style={{
                        height: '199.37%',
                        left: '-12.29%',
                        top: '-56.94%',
                        width: '117.47%',
                        maxWidth: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Seção Jantar + Festa */}
            <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-10 lg:py-20 mb-20 lg:mb-40">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[480px]">
                    <img 
                      src={jantarFestaMeninas}
                      alt="Jantar + Festa"
                      className="w-full h-auto rounded-[40px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 text-[#3b1a1a]">
                <h3 className="font-caudex text-[32px] lg:text-[48px]">{texts.dinnerTitle}</h3>
                <div className="relative">
                  <div className="bg-[#21283b] h-[50px] lg:h-[60px] rounded-[15.62px] w-full max-w-[265px] flex items-center justify-center px-4">
                    <span className="font-caudex text-[20px] lg:text-[26.77px] leading-tight text-[#fcf7e5] uppercase">230€ por pessoa</span>
                  </div>
                </div>
                <ul className="space-y-6 lg:space-y-10 text-[16px] lg:text-[20px] leading-relaxed">
                  {texts.dinnerBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <img src={bulletIcon} alt="" className="mt-0.5 h-4 w-4" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-8 pt-6">
                  <div className="relative inline-block">
                    <a
                    href="https://wa.me/351213420572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col items-start gap-2"
                    >
                      <span className="font-caudex text-[20px] lg:text-[27.048px] leading-tight text-[#1e1e1e] uppercase not-italic font-normal">
                        {texts.reserveCta}
                      </span>
                      <img
                        src="data:image/svg+xml,%3csvg%20width='154'%20height='8'%20viewBox='0%200%20154%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Arrow%204'%20d='M153.286%204.35062C153.479%204.15698%20153.479%203.84302%20153.286%203.64938L150.13%200.493782C149.937%200.300139%20149.623%200.300139%20149.429%200.493782C149.235%200.687425%20149.235%201.00138%20149.429%201.19503L152.234%204L149.429%206.80497C149.235%206.99862%20149.235%207.31257%20149.429%207.50622C149.623%207.69986%20149.937%207.69986%20150.13%207.50622L153.286%204.35062ZM0.708008%204.49585H152.935V3.50415H0.708008V4.49585Z'%20fill='%231E1E1E'/%3e%3c/svg%3e"
                        alt="seta"
                        className="block w-full h-2 object-contain transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                      />
                    </a>
                  </div>
                  
                  <div className="relative inline-block">
                    <a
                      href="#menu"
                      className="group inline-flex flex-col items-start gap-2"
                    >
                      <span className="font-caudex text-[20px] lg:text-[27.048px] leading-tight text-[#1e1e1e] uppercase not-italic font-normal">
                        {texts.menuCta}
                      </span>
                      <img
                        src="data:image/svg+xml,%3csvg%20width='154'%20height='8'%20viewBox='0%200%20154%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Arrow%204'%20d='M153.286%204.35062C153.479%204.15698%20153.479%203.84302%20153.286%203.64938L150.13%200.493782C149.937%200.300139%20149.623%200.300139%20149.429%200.493782C149.235%200.687425%20149.235%201.00138%20149.429%201.19503L152.234%204L149.429%206.80497C149.235%206.99862%20149.235%207.31257%20149.429%207.50622C149.623%207.69986%20149.937%207.69986%20150.13%207.50622L153.286%204.35062ZM0.708008%204.49585H152.935V3.50415H0.708008V4.49585Z'%20fill='%231E1E1E'/%3e%3c/svg%3e"
                        alt="seta"
                        className="block w-full h-2 object-contain transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* Seção Club Sacramento New Year's Eve / Bilhetes */}
            <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-10 lg:py-20 mb-10 lg:mb-20">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10">
                <div className="flex flex-col gap-6 text-[#3b1a1a] lg:max-w-1/2">
                  <h3 className="font-caudex text-[32px] lg:text-[48px] leading-snug">Club Sacrament<br />New Year's Eve</h3>
                  <p className="text-[16px] lg:text-[20px] leading-relaxed">Para quem prefere celebrar apenas a partir das 23h00, o Club Sacramento oferece várias opções de bilhetes para uma noite de música, dança e celebração no centro de Lisboa.</p>
                  <div className="flex flex-col gap-2 text-[16px] lg:text-[20px] leading-relaxed">
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
                    width="w-full max-w-[620px]"
                    hasOverlay={false}
                    backgroundPosition="center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 mt-20 lg:mt-60">
                <div className="bg-[#2f2437] text-[#f2e9e4] px-6 lg:px-9 py-2 lg:py-3 rounded-full text-[16px] lg:text-[20px] font-caudex uppercase tracking-[0.08em] shadow-sm self-center">{texts.ticketsAvailableLabel}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#3b1a1a] mt-10">
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
                    <a
                      key={item.title}
                      href="https://web.fourvenues.com/pt/club-sacramento/events/club-sacramento---new-years-eve-31-12-2025-A4G0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-[#3b1a1a] border-dashed px-4 py-4 rounded-md bg-white/50"
                    >
                      <div className="font-caudex text-[28px] lg:text-[48px] uppercase mb-2">{item.title}</div>
                      <p className="text-[16px] lg:text-[20px] leading-relaxed">{item.desc}</p>
                    </a>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#3b1a1a]">
                  <a
                    href="https://web.fourvenues.com/pt/club-sacramento/events/club-sacramento---new-years-eve-31-12-2025-A4G0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-start-2 lg:col-start-2 block border border-[#3b1a1a] border-dashed px-4 py-4 rounded-md bg-white/50 text-center"
                  >
                    <div className="font-caudex text-[28px] lg:text-[48px] uppercase mb-2">Open Bar — 100€</div>
                    <p className="text-[16px] lg:text-[20px] leading-relaxed">Inclui acesso ao open bar das 23h00 às 03h00.</p>
                  </a>
                </div>
                <div className="flex flex-col items-center mt-10 text-[#3b1a1a]">
                  <a
                    href="https://web.fourvenues.com/pt/club-sacramento/events/club-sacramento---new-years-eve-31-12-2025-A4G0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col items-start gap-2"
                  >
                    <span className="font-caudex text-[20px] lg:text-[27.048px] leading-tight text-[#1e1e1e] uppercase not-italic font-normal">
                      {texts.buyTicketsLabel}
                    </span>
                    <img
                      src="data:image/svg+xml,%3csvg%20width='154'%20height='8'%20viewBox='0%200%20154%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Arrow%204'%20d='M153.286%204.35062C153.479%204.15698%20153.479%203.84302%20153.286%203.64938L150.13%200.493782C149.937%200.300139%20149.623%200.300139%20149.429%200.493782C149.235%200.687425%20149.235%201.00138%20149.429%201.19503L152.234%204L149.429%206.80497C149.235%206.99862%20149.235%207.31257%20149.429%207.50622C149.623%207.69986%20149.937%207.69986%20150.13%207.50622L153.286%204.35062ZM0.708008%204.49585H152.935V3.50415H0.708008V4.49585Z'%20fill='%231E1E1E'/%3e%3c/svg%3e"
                      alt="seta"
                      className="block w-full h-2 object-contain transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* Galeria (acima do Menu de Reveillon) */}
            <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 mb-10">
              <picture className="block w-full">
                <source media="(min-width:1024px)" srcSet="/assets/reveillon/galeria-desk.webp" />
                <img
                  src="/assets/reveillon/galeria-mobile.webp"
                  alt="Galeria Sacramento"
                  className="w-full h-auto rounded-[40px]"
                />
              </picture>
            </section>

            {/* Menu de Reveillon Section */}
            <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
              <div id="menu" className="relative mt-10 w-full h-[300px] lg:h-[568px]">
                <img 
                  src="/assets/reveillon/fundo-menu.webp" 
                  alt="Menu de Réveillon"
                  className="w-full h-full object-cover rounded-[40px]"
                />
                <div className="absolute inset-0 flex items-end justify-start pl-4 lg:pl-16 pb-6 lg:pb-16 pointer-events-none">
                  <h2 className="font-caudex text-[28px] lg:text-[48px] uppercase text-white leading-tight max-w-none">
                    {texts.menuBannerTitle}
                  </h2>
                </div>
              </div>
              <div className="w-full mt-10 lg:mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <h3 className="font-caudex text-[28px] lg:text-[48px] uppercase text-[#1e1e1e] mb-3 font-semibold">{texts.menu.entrada.title}</h3>
                      <p className="text-[16px] lg:text-[20px] font-catamaran text-[#1e1e1e] leading-relaxed">{texts.menu.entrada.desc}</p>
                    </div>
                    <div>
                      <h3 className="font-caudex text-[28px] lg:text-[48px] uppercase text-[#1e1e1e] mb-3 font-semibold">{texts.menu.sobremesa.title}</h3>
                      <p className="text-[16px] lg:text-[20px] font-catamaran text-[#1e1e1e] leading-relaxed">{texts.menu.sobremesa.desc}</p>
                    </div>
                    <div>
                      <h3 className="font-caudex text-[28px] lg:text-[48px] uppercase text-[#1e1e1e] mb-3 font-semibold">{texts.menu.principal.title}</h3>
                      <p className="text-[16px] lg:text-[20px] font-catamaran text-[#1e1e1e] leading-relaxed">{texts.menu.principal.desc}</p>
                    </div>
                    <div>
                      <h3 className="font-caudex text-[28px] lg:text-[48px] uppercase text-[#1e1e1e] mb-3 font-semibold">{texts.menu.bebidas.title}</h3>
                      <p className="text-[16px] lg:text-[20px] font-catamaran text-[#1e1e1e] leading-relaxed">{texts.menu.bebidas.desc}</p>
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                      <h3 className="font-caudex text-[28px] lg:text-[48px] uppercase text-[#1e1e1e] mb-3 font-semibold">{texts.menu.vegetariano.title}</h3>
                      <p className="text-[16px] lg:text-[20px] font-catamaran text-[#1e1e1e] leading-relaxed">{texts.menu.vegetariano.desc}</p>
                    </div>
                    <div className="col-span-1 lg:col-span-2 mt-10 lg:mt-20">
                      <a
                        href="https://reserve.dish.co/258346"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                      >
                        <h3 className="font-caudex text-[28px] lg:text-[48px] uppercase text-[#1e1e1e] font-semibold">{texts.reserveCta}</h3>
                        <div className="mt-2">
                          <img
                            src="data:image/svg+xml,%3csvg%20width='154'%20height='8'%20viewBox='0%200%20154%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Arrow%204'%20d='M153.286%204.35062C153.479%204.15698%20153.479%203.84302%20153.286%203.64938L150.13%200.493782C149.937%200.300139%20149.623%200.300139%20149.429%200.493782C149.235%200.687425%20149.235%201.00138%20149.429%201.19503L152.234%204L149.429%206.80497C149.235%206.99862%20149.235%207.31257%20149.429%207.50622C149.623%207.69986%20149.937%207.69986%20150.13%207.50622L153.286%204.35062ZM0.708008%204.49585H152.935V3.50415H0.708008V4.49585Z'%20fill='%231E1E1E'/%3e%3c/svg%3e"
                            alt="Seta"
                            className="block w-full h-2 object-contain transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                          />
                        </div>
                      </a>
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