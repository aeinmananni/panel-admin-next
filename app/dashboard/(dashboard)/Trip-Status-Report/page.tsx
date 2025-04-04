"use client";
import React, { useState } from "react";

const TripReport = () => {
  const allTrips = Array.from({ length: 26 }, (_, i) => ({
    id: 100 + i,
    driver: `راننده ${i + 1}`,
    passenger: `مسافر ${i + 1}`,
    origin: "میدان آزادی",
    destination: "میدان ولیعصر",
    time: `1402/12/${(i % 29) + 1} - 0${(i % 6) + 8}:${(i * 7) % 60}`,
    price: 75000 + (i % 5) * 5000,
    status:
      i % 3 === 0 ? "تکمیل‌شده" : i % 3 === 1 ? "در حال انجام" : "لغو‌شده",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 10;

  const indexOfLastTrip = currentPage * tripsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
  const currentTrips = allTrips.slice(indexOfFirstTrip, indexOfLastTrip);

  const totalPages = Math.ceil(allTrips.length / tripsPerPage);

  const statusColor = (status: string) => {
    switch (status) {
      case "تکمیل‌شده":
        return "text-green-600 font-semibold";
      case "لغو‌شده":
        return "text-red-500 font-semibold";
      case "در حال انجام":
        return "text-yellow-500 font-semibold";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-6xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">گزارش وضعیت سفرها</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-right border border-gray-200 rounded-2xl overflow-hidden">
          <thead className="bg-yellow-400 text-black text-center">
            <tr>
              <th className="px-4 py-2">شماره سفر</th>
              <th className="px-4 py-2">راننده</th>
              <th className="px-4 py-2">مسافر</th>
              <th className="px-4 py-2">مبدا</th>
              <th className="px-4 py-2">مقصد</th>
              <th className="px-4 py-2">زمان</th>
              <th className="px-4 py-2">مبلغ</th>
              <th className="px-4 py-2">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {currentTrips.map((trip, index) => (
              <tr
                key={trip.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 text-center">{trip.id}</td>
                <td className="px-4 py-2 text-center">{trip.driver}</td>
                <td className="px-4 py-2 text-center">{trip.passenger}</td>
                <td className="px-4 py-2 text-center">{trip.origin}</td>
                <td className="px-4 py-2 text-center">{trip.destination}</td>
                <td className="px-4 py-2 text-center">{trip.time}</td>
                <td className="px-4 py-2 text-center">
                  {trip.price.toLocaleString()} تومان
                </td>
                <td
                  className={`px-4 py-2 text-center ${statusColor(
                    trip.status
                  )}`}
                >
                  {trip.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full font-bold ${
              currentPage === i + 1
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TripReport;
