import { Ticket } from "./ticket";
import { TRAVEL_ITEMS } from "../../../data";
export default function Tickets() {
  return (
    <div className="formStyle !grid !grid-cols-2 gap-2 overflow-y-auto overflow-x-hidden">
      {TRAVEL_ITEMS.map((item, index) => (
        <Ticket key={index} {...item} />
      ))}
    </div>
  );
}
