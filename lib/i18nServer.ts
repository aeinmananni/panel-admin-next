/* eslint-disable @typescript-eslint/no-explicit-any */
import "server-only";
import { createInstance } from "i18next";
import { getOptions } from "./settings";
import resourcesToBackend from "i18next-resources-to-backend";

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(resourcesToBackend((language: any, namespace: any) => import(`@/public/locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export const getTranslation = async (lng: string, ns: string) => {
  const i18nextInstance = await initI18next(lng, ns);
  return i18nextInstance.getFixedT(lng, ns);
};
