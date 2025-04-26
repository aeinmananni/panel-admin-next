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
  Search,
  Undo2,
  User,
  History,
  Headset,
} from "lucide-react";

type IconType = { [key: number]: React.ReactNode };

const ICON_ADMINS: IconType = {
  1: <LayoutDashboard size={20} />,
  2: <Map size={20} />,
  3: <Users size={20} />,
  4: <Ticket size={20} />,
  5: <UserCog size={20} />,
  6: <BarChart size={20} />,
  7: <Settings size={20} />,
  8: <Shield size={20} />,
};

const ICON_USERS: IconType = {
  1: <LayoutDashboard size={20} />,
  2: <Search />,
  3: <Ticket />,
  4: <Undo2 />,
  5: <User />,
  6: <History />,
  7: <Headset />,
};

export {
  Pin,
  BookOpenCheck,
  ChevronDown,
  HomeIcon,
  ICON_ADMINS,
  Circle,
  Menu,
  ICON_USERS,
};
