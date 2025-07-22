import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { initBasicSecurity } from "./utils/security";
import AppRoutes from "./routes";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  useEffect(() => {
    initBasicSecurity();
  }, []);
  return (
    <HelmetProvider>
      <div className="bg-[#E4D9CD]">
        <LanguageProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </LanguageProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
