import { useTranslation } from "react-i18next";

function Navbar() {
  //
  const { t, i18n } = useTranslation();

  const checkActiveLanguage = (lang: "fa" | "en") =>
    i18n.language === lang ? "active-lang" : "";

  return (
    <div className="navbar">
      <span className="navbar-content">
        <span className="navbar-title-container">
          <img height={50} src="public/i18next-icon.svg" alt="logo" />
          <h1 onClick={() => i18n.changeLanguage("fa")} style={{ margin: 0 }}>
            {t("Title")}
          </h1>
        </span>
        <span className="lang-changer">
          <h3
            onClick={() => i18n.changeLanguage("fa")}
            className={checkActiveLanguage("fa")}
            style={{ cursor: "pointer" }}
          >
            fa
          </h3>
          /
          <h3
            onClick={() => i18n.changeLanguage("en")}
            className={checkActiveLanguage("en")}
            style={{ cursor: "pointer" }}
          >
            en
          </h3>
        </span>
      </span>
    </div>
  );
}

export default Navbar;
