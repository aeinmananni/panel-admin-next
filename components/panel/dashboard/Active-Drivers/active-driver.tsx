"use client";
import React, { useState } from "react";

const ActiveDrivers = () => {
  const allDrivers = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    name: `راننده ${i + 1}`,
    plate: `${10 + i}ب${100 + i}`,
    startedAt: `${8 + (i % 6)}:${(i * 7) % 60}`.padStart(5, "0"),
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 10;

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const totalPages = Math.ceil(allDrivers.length / driversPerPage);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">راننده‌های فعال امروز</h2>

      <div className="bg-yellow-100 text-yellow-700 rounded-xl p-4 text-center font-semibold mb-6">
        تعداد کل راننده‌های فعال: {allDrivers.length} نفر
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-right border border-gray-200 rounded-2xl overflow-hidden">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">نام راننده</th>
              <th className="px-4 py-2">پلاک</th>
              <th className="px-4 py-2">شروع فعالیت</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver, index) => (
              <tr key={driver.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-2">{indexOfFirstDriver + index + 1}</td>
                <td className="px-4 py-2">{driver.name}</td>
                <td className="px-4 py-2">{driver.plate}</td>
                <td className="px-4 py-2">{driver.startedAt}</td>
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

export default ActiveDrivers;
