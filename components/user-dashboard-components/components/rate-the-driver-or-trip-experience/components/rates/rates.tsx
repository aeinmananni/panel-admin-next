import { Rate } from "../rate";
import { RATE_DATA } from "../../../data";
export default function Rates() {
  return (
    <div className="grid grid-cols-3 gap-8 overflow-y-auto p-1">
      {RATE_DATA.map((it) => (
        <Rate key={it.id} {...it} />
      ))}
    </div>
  );
}
