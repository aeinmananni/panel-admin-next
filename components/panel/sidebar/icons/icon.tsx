import {
  Pin,
  BookOpenCheck,
  ChevronDown,
  HomeIcon,
  LayoutDashboard,
  Settings,
  Circle,
  Menu,
  Map,
  Users,
  Ticket,
  UserCog,
  BarChart,
  Shield,
} from "lucide-react";

const IconsMap: { [key: number]: React.ReactNode } = {
  1: <LayoutDashboard size={20} />,
  2: <Map size={20} />,
  3: <Users size={20} />,
  4: <Ticket size={20} />,
  5: <UserCog size={20} />,
  6: <BarChart size={20} />,
  7: <Settings size={20} />,
  8: <Shield size={20} />,
};

export { Pin, BookOpenCheck, ChevronDown, HomeIcon, IconsMap, Circle, Menu };
