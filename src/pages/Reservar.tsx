import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Form from "../components/Form";

const Header = React.lazy(() => import("../components/Header"));
const Footer = React.lazy(() => import("../components/Footer"));

function Reservar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Reservas – Sacramento Chiado</title>
        <meta
          name="description"
          content="Reserve a sua mesa no Sacramento Chiado. Experiência gastronómica única no coração de Lisboa."
        />
        <link rel="canonical" href="https://sacramentolisboa.com/reservar" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Suspense fallback={null}>
        <Header
          titlePt="Reserve a Sua Mesa"
          titleEn="Book Your Table"
        />
      </Suspense>

      <Form />

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Reservar;
