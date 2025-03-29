export const getOptions = (lng: string = "en", ns: string = "common") => ({
    supportedLngs: ["en", "fa", "ar"], 
    fallbackLng: "fa",
    lng,
    ns,
    defaultNS: "common",
    interpolation: {
      escapeValue: false, 
    },
  });
  