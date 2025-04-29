import {
  TravelItemType,
  columnTravel,
} from "@/components/user-dashboard-components/components/models";

export default function Ticket({ ...props }: TravelItemType) {
  return (
    <div className="border border-slate-500 h-32  relative bg-white ticketBorder  flex shadow-sm p-1">
      <div className="grid grid-cols-2 grid-flow-rows  gap-1 h-full  relative p-2">
        {Object.keys(columnTravel).map((col, colIndex) => (
          <div key={colIndex} className="flex items-center gap-2 w-max">
            <p className="font-bold text-sm">
              {columnTravel[col as keyof Omit<TravelItemType, "id">]}
            </p>
            :
            <p className={` text-slate-600 `}>
              {props[col as keyof Omit<TravelItemType, "id">]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
