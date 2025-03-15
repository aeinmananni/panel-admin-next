import { Menus, Header } from "./components";

export default function Sidebar() {
  return (
    <div className=" w-1/4 h-full  flex flex-col bg-white relative gap-1 justify-end items-end">
      <Header />
      <Menus />
    </div>
  );
}
