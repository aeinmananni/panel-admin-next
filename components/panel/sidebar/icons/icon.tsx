import {
  Pin,
  BookOpenCheck,
  ChevronDown,
  HomeIcon,
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  KeyRound,
  Circle,
} from "lucide-react";

const IconsMap: { [key: number]: React.ReactNode } = {
  1: <LayoutDashboard size={20} />,
  2: <Users size={20} />,
  3: <Package size={20} />,
  4: <ShoppingCart size={20} />,
  5: <FileText size={20} />,
  6: <MessageSquare size={20} />,
  7: <BarChart3 size={20} />,
  8: <Settings size={20} />,
  9: <KeyRound size={20} />,
};

export { Pin, BookOpenCheck, ChevronDown, HomeIcon, IconsMap, Circle };
