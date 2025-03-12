import { useChangeLanguage } from "@/hooks/useChangeLanguage";
type Styles = {
  parentClassName?: string;
};

type FloatTextIconProps = {
  title: string;
  icon: React.ReactNode;
  styles?: Styles;
};

const FloatTextIcon = ({ title, icon, styles }: FloatTextIconProps) => {
  const { t, i18n } = useChangeLanguage();
  return (
    <div
      className={`flex items-center  justify-end gap-2 text-slate-600  ${
        i18n.language === "en"
          ? "group-hover:translate-x-1"
          : "group-hover:-translate-x-1"
      }  duration-300  w-full ${styles?.parentClassName}`}
    >
      <span className={`truncate`}>{t(title)}</span>
      {icon}
    </div>
  );
};

export default FloatTextIcon;
