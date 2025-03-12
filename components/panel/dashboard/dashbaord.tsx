import { Header } from "../header";
import { Sidebar } from "../sidebar";

type DashbaordProps = {
  children?: React.ReactNode;
};

export default function Dashbaord({ children }: DashbaordProps) {
  return (
    <div className="flex items-center w-full h-full ">
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-24">
          <Header />
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
      <Sidebar />
    </div>
  );
}
