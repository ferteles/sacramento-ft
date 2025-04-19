import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import topheader from "../assets/backgroundHeaderFooter.svg";
import logo from "../assets/LogoBranca.svg";
import InfoHeader from "../components/InfoHeader";
import menu from "../assets/MenuIcoWhite.svg";
import Card from "../components/Card";
import HistoriaSection from "../components/HistoriaSection";
import GaleryFlex from "../components/GaleriaFlex";
import Arrow from "../components/Arrow";
import Footer from "../components/Footer";
import Form from "../components/Form";
import MobileNavBar from "../components/MobileNavbar";

function OndeAHistoria() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const texts = {
    title:
      language === "pt"
        ? "Onde a História de Lisboa Encontra a Gastronomia Portuguesa"
        : "Where Lisbon's History Meets Portuguese Gastronomy",
    cta: language === "pt" ? "faça sua reserva" : "Book your table now",
    h2:
      language === "pt"
        ? "No coração do Chiado, o Sacramento é uma viagem pela história de Lisboa"
        : "In the heart of Chiado, Sacramento is a journey through Lisbon's history",
    paragraph:
      language === "pt"
        ? "Descubra um ambiente único, que combina requinte e descontração, ideal para momentos inesquecíveis. Localizado no antigo Palácio dos Condes de Valadares, o Sacramento oferece uma experiência gastronómica que honra a tradição portuguesa, enquanto surpreende com toques modernos. Reserve já a sua mesa e desfrute de uma experiência única no coração de Lisboa."
        : "Discover a unique setting that blends sophistication and relaxation, ideal for unforgettable moments. Located in the former Palace of the Counts of Valadares, Sacramento offers a dining experience that honors Portuguese tradition while surprising with modern twists. Book your table now and enjoy a unique experience in the heart of Lisbon.",
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
    <div>
      <div className="top-0 w-full bg-repeat max-w-screen">
        {/* Faixa superior PT/EN */}
        <motion.div
          className="h-6 bg-center flex flex-row-reverse px-2"
          style={{ backgroundImage: `url(${topheader})` }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="cursor-pointer" onClick={toggleLanguage}>
            <h1 className="text-xs text-white">PT/EN</h1>
          </button>
        </motion.div>

        {/* Header com fundo e texto animado */}
        <motion.div
          className="bg-black flex flex-col items-center justify-start w-full h-[665px] relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://s3-alpha-sig.figma.com/img/c48f/2622/ffe386edd5d0bba4833406f81886e5bb?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eqENCwSlnkj1CSw62VDrfICHcJ-PAuOi5SqIPwK69QYD6sFhPnznCA~DB7mN8gH8i3rlDVqzVS-mq8JNcDzBQwp1t8-T1nFj-kLUKkOwrOii0pme7~A6b3B~x5-CPUDTc-fX-9RW6Ne6~N8Y3nkyNnQpSN79DheJkKd5SI1XTHKnXTFHl5YL5AuFrivNIrCWYY4EgKLr0u7UqtfIpUE~1V5Hy5eD5AfH4ddc-iiOax8keIJGZ~8BUtx~~D1fXQ3PJmTL7-Rjw4vPw1sx-ySHVb56VCaA4pAfCZd8-POJ6Lu7U7pQXRVdKNe7LSJQNL7SQ103Oyf1NoG00VreFD0oNA__)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {/* NAVBAR desktop */}
          <motion.div
            className="hidden lg:flex items-center justify-between w-full px-20 py-6 relative z-50"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex gap-6 text-white text-sm">
              <Link
                to="/restaurante"
                className="cursor-pointer hover:underline"
              >
                Restaurante
              </Link>
              <Link to="/cocktails" className="cursor-pointer hover:underline">
                Bar
              </Link>
              <Link to="/eventos" className="cursor-pointer hover:underline">
                Grupos
              </Link>
            </div>
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2"
              initial={{ y: 200, opacity: 0, scale: 1.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            >
              <Link to="/">
                <img src={logo} alt="Logo Sacramento" className="h-10" />
              </Link>
            </motion.div>
            <div className="flex gap-6 text-white text-sm">
              <Link
                to="/saboreie-noite"
                className="cursor-pointer hover:underline"
              >
                Jantar Tarde
              </Link>
              <Link
                to="/melhor-alternativa"
                className="cursor-pointer hover:underline"
              >
                Esplanada
              </Link>
              <Link to="/ambiente" className="cursor-pointer hover:underline">
                Club
              </Link>
            </div>
          </motion.div>

          {/* Mobile logo + menu */}
          <motion.div
            className="flex lg:hidden flex-row mt-10 mb-5 w-full justify-between gap-5 items-center px-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <img src={logo} alt="Logo" />
            <button
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <img src={menu} alt="Menu" />
            </button>
          </motion.div>

          {/* Texto e botão */}
          <motion.div
            className="lg:px-10 flex flex-col items-center text-center justify-center lg:mt-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-caudex py-10  text-white lg:max-w-[1044px] w-full uppercase">
              {texts.title}
            </h1>
            <a href="#form">
              {" "}
              <button className="cursor-pointer border border-white px-2 py-4 uppercase lg:w-56 ">
                <h1 className="text-sm lg:text-base text-white">{texts.cta}</h1>
              </button>
            </a>
          </motion.div>

          {/* Mobile Navbar */}
          {menuOpen && <MobileNavBar onClose={() => setMenuOpen(false)} />}
        </motion.div>

        <InfoHeader />
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col px-6 py-20 w-full lg:flex-row lg:justify-evenly lg:gap-40">
            <div>
              <Card
                imageSrc="https://s3-alpha-sig.figma.com/img/2b87/8156/c6923005c00eddbe0d9b34b4658226ee?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TTqXhBKVvz4S8hsyKsZx-BuTUS2joECKCuVxb8uzdgkrzXbrXH4OCwpe3qe-2~MR8sc4uHNV1FdUh7jVvKIr5dpvjk-8A00mIw1RRAAeLDUlQIvTvb-mQf9BWhIQuato~E2SbFFNE1ycx4miczB-OZhQUcKb-UxRmt2x9h3kZb-eHAiaMzZtJJIIck5V4fHOFWesOjJPXJ2BIw1HZGZaMMxJfhkdctOkD3fKt-LlKuk6afO~EFIIZ4vHClaJde2tjIL5BHBvRLlTs6PTmps2TQv4wMKlrqwNeMRm5hwq8lvNwgDxLV4HjQKxMTT2kIhQj-akFQjYSipEF5-MB8sLwA__"
                width="w-40 lg:w-[599px]"
                height="h-48 lg:h-[735px]"
              />
            </div>
            <div>
              <h1 className="!lg:text-7xl h1-title w-full">{texts.h2}</h1>
              <p className="w-full lg:max-w-150">{texts.paragraph}</p>
            </div>
          </div>
        </div>

        <HistoriaSection />

        <div className="-mt-10 lg:-mt-50 z-10 w-full px-6 flex flex-col items-center justify-center lg:gap-20">
          <GaleryFlex />
          <Arrow title={texts.arrow} fontSize="text-4xl" />
          <Form />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default OndeAHistoria;
