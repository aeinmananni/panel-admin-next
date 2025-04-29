import { column, TripCartProps } from "../../../models";
import { UPCOMING_TRIPS } from "../../../data";
import { getChangeColor } from "@/hooks/useChangeColor";

export default function Table() {
  const isAdd = (rowIndex: number) => {
    return rowIndex % 2 === 0 ? true : false;
  };
  return (
    <div className="w-full h-full overflow-hidden flex justify-center  rounded-lg p-2 ">
      <div className="rounded-lg overflow-y-auto border-2 border-yellow-500 shadow-2xl w-full h-full">
        <table className=" w-full h-full overflow-hidden">
          <thead>
            <tr className="text-slate-600">
              <th className="p-2 border-yellow-500">{"ردیف"}</th>
              {Object.keys(column).map((col, colIndex) => (
                <th key={colIndex} className=" shadow-2xl">
                  {column[col as keyof Omit<TripCartProps, "id">]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {UPCOMING_TRIPS.filter(
              (filterd) => filterd.status !== "لغو شده"
            ).map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className={` text-center p-2 ${
                    isAdd(rowIndex) ? "bg-yellow-100" : "bg-slate-100"
                  }`}
                >
                  <span className="px-2 border text-center rounded-full">
                    {rowIndex + 1}
                  </span>
                </td>
                {Object.keys(column).map((col, colIndex) => (
                  <td
                    style={{
                      color: col === "status" ? getChangeColor(row.status) : "",
                    }}
                    className={`text-center ${
                      col === "status" && "font-semibold"
                    }  ${isAdd(rowIndex) ? "bg-yellow-100" : "bg-slate-100"}`}
                    key={colIndex}
                  >
                    {row[col as keyof Omit<TripCartProps, "id">]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
