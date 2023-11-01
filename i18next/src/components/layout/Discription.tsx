import { useTranslation } from "react-i18next";

const Discription = () => {
  //
  const { t } = useTranslation();

  return (
    <div className="description">
      <div className="description-container">
        <h2>{t("Description")}</h2>
      </div>
    </div>
  );
};

export default Discription;
