import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { initBasicSecurity } from "./utils/security";
import AppRoutes from "./routes";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  useEffect(() => {
    initBasicSecurity();
  }, []);
  return (
    <div className="bg-[#E4D9CD]">
      <LanguageProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
