import AppRoutes from "./routes";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div className="bg-[#E4D9CD]">
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </div>
  );
}

export default App;
