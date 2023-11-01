import "i18next";
import en from "../locale/langs/en.json";
import fa from "../locale/langs/fa.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      fa: typeof fa;
    };
  }
}
