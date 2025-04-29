import { PurchasedTicket } from "../purchased-ticket";
import { PURASED_TICKETS } from "../../../data";
export default function PurchasedTickets() {
  return (
    <div className="grid grid-cols-3 w-full gap-1 p-1">
      {PURASED_TICKETS.map((it, index) => (
        <PurchasedTicket key={index} {...it} />
      ))}
    </div>
  );
}
