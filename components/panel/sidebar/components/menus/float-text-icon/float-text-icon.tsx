import { useDelayedShowMenu } from "@/hooks/delayedShowMenu";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import { usePanelAdminStore } from "@/store";
type Styles = {
  parentClassName?: string;
};

type FloatTextIconProps = {
  title: string;
  icon: React.ReactNode;
  styles?: Styles;
  rols?: "classification" | "groupingItem";
};

const FloatTextIcon = ({ title, icon, styles, rols }: FloatTextIconProps) => {
  const { t, i18n } = useChangeLanguage();
  const showMenu = usePanelAdminStore((s) => s.showMenu);
  const { delayedShowMenu } = useDelayedShowMenu(showMenu);
  return (
    <div
      className={`flex items-center   ${
        showMenu ? "justify-end" : "justify-end md:justify-center"
      }  gap-2 text-slate-600  ${
        i18n.language === "en"
          ? showMenu && "group-hover:translate-x-1"
          : showMenu && "group-hover:-translate-x-1"
      }  duration-300  w-full ${styles?.parentClassName}`}
    >
      <span
        className={`truncate ${delayedShowMenu ? "flex" : "md:hidden"} ${
          rols === "classification" ? "text-[17px]" : "text-[15px]"
        }`}
      >
        {t(title)}
      </span>
      {icon}
    </div>
  );
};

export default FloatTextIcon;
