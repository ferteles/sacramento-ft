import { useEffect } from "react";
import { initBasicSecurity } from "./utils/security";
import AppRoutes from "./routes";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop"; // 👈 importou

function App() {
  useEffect(() => {
    initBasicSecurity();
  }, []);
  return (
    <div className="bg-[#E4D9CD]">
      <LanguageProvider>
        <ScrollToTop /> {/* 👈 colocou aqui */}
        <AppRoutes />
      </LanguageProvider>
    </div>
  );
}

export default App;
