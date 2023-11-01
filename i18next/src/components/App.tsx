import { useTranslation } from "react-i18next";
import Navbar from "./layout/Navbar";
import Discription from "./layout/Discription";

function App() {
  const { i18n } = useTranslation();

  document.styleSheets;

  return (
    <div
      style={{
        direction: i18n.language === "en" ? "ltr" : "rtl",
      }}
    >
      <Navbar />
      <Discription />
    </div>
  );
}

export default App;
