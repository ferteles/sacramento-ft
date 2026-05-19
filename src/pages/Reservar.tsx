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
        <title>Reservas – Sacramento Chiado | Reserve a Sua Mesa em Lisboa</title>
        <meta
          name="description"
          content="Reserve a sua mesa no Sacramento Chiado. Gastronomia portuguesa num palácio histórico no coração do Chiado, Lisboa. Reserva online rápida e fácil."
        />
        <link rel="canonical" href="https://sacramentolisboa.com/reservar" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sacramentolisboa.com/reservar" />
        <meta property="og:title" content="Reserve a Sua Mesa – Sacramento Chiado" />
        <meta
          property="og:description"
          content="Reserve a sua mesa no Sacramento Chiado. Gastronomia portuguesa num palácio histórico no coração do Chiado, Lisboa."
        />
        <meta
          property="og:image"
          content="https://sacramentolisboa.com/assets/og-sacramento-banner.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reserve a Sua Mesa – Sacramento Chiado" />
        <meta
          name="twitter:description"
          content="Reserve a sua mesa no Sacramento Chiado. Gastronomia portuguesa num palácio histórico no coração do Chiado, Lisboa."
        />
        <meta
          name="twitter:image"
          content="https://sacramentolisboa.com/assets/og-sacramento-banner.png"
        />

        {/* Schema.org estruturado */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            "name": "Sacramento Chiado",
            "url": "https://sacramentolisboa.com",
            "hasMap": "https://maps.app.goo.gl/vxAt4pjoHFPRP1LA7",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calçada do Sacramento, 44",
              "addressLocality": "Lisboa",
              "postalCode": "1200-394",
              "addressCountry": "PT"
            },
            "telephone": "+351213420572",
            "servesCuisine": "Portuguese",
            "reservations": "https://sacramentolisboa.com/reservar",
            "openingHours": ["Mo-Su 18:00-01:00"]
          }
        `}</script>
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
