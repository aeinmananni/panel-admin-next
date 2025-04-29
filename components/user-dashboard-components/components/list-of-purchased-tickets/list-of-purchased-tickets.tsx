import { Header } from "../header";
import listIcon from "@/public/icons/list-tickets.png";
import { PurchasedTickets } from "./components";
export default function ListOfPurchasedTickets() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header image={listIcon.src} title={"لیست بلیط های خریداری شده"} />
      <PurchasedTickets />
    </div>
  );
}
