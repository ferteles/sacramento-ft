import { useEffect } from "react";
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
        <AppRoutes />
      </LanguageProvider>
    </div>
  );
}

export default App;
