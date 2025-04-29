"use client";
import React, { useState } from "react";

const TicketsTable = () => {
  const allTickets = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    passenger: `مسافر ${i + 1}`,
    origin: "تهران",
    destination: "مشهد",
    date: `1403/01/${((i % 30) + 1).toString().padStart(2, "0")}`,
    price: `${(100 + (i % 10) * 10).toLocaleString()} تومان`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 10;

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = allTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );

  const totalPages = Math.ceil(allTickets.length / ticketsPerPage);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">
        لیست بلیط‌های فروخته‌شده
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-right border border-gray-200 rounded-2xl overflow-hidden">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">نام مسافر</th>
              <th className="px-4 py-2">مبدأ</th>
              <th className="px-4 py-2">مقصد</th>
              <th className="px-4 py-2">تاریخ</th>
              <th className="px-4 py-2">مبلغ</th>
            </tr>
          </thead>
          <tbody>
            {currentTickets.map((ticket, index) => (
              <tr
                key={ticket.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2">{ticket.id}</td>
                <td className="px-4 py-2">{ticket.passenger}</td>
                <td className="px-4 py-2">{ticket.origin}</td>
                <td className="px-4 py-2">{ticket.destination}</td>
                <td className="px-4 py-2">{ticket.date}</td>
                <td className="px-4 py-2">{ticket.price}</td>
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

export default TicketsTable;
