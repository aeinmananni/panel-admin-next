
"use client";

import React, { useState } from "react";
import { mockTickets } from "./mock-api-tickets";
import { returnedTickets } from "./mockapi-returned-ticket";

const statusColors = {
  "انجام شده": "text-green-600",
  "پیش‌رو": "text-yellow-600",
  "لغو شده": "text-red-600",
};

export default function TicketStatus() {
  const [activeTab, setActiveTab] = useState("tickets");
  const [currentPage, setCurrentPage] = useState(1);
  const [returnedCurrentPage, setReturnedCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(mockTickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = mockTickets.slice(startIndex, startIndex + itemsPerPage);

  const returnedTotalPages = Math.ceil(returnedTickets.length / itemsPerPage);
  const returnedStartIndex = (returnedCurrentPage - 1) * itemsPerPage;
  const currentReturnedTickets = returnedTickets.slice(
    returnedStartIndex,
    returnedStartIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleReturnedNextPage = () => {
    if (returnedCurrentPage < returnedTotalPages) {
      setReturnedCurrentPage(returnedCurrentPage + 1);
    }
  };

  const handleReturnedPreviousPage = () => {
    if (returnedCurrentPage > 1) {
      setReturnedCurrentPage(returnedCurrentPage - 1);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto rtl">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🎫 سیستم مدیریت بلیط‌ها
      </h1>

      {/* تب‌ها */}
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === "tickets"
            ? "border-b-2 border-green-500 text-green-600"
            : "text-gray-500 hover:text-gray-700"
            }`}
          onClick={() => setActiveTab("tickets")}
        >
          وضعیت بلیط‌ها
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "returned"
            ? "border-b-2 border-green-500 text-green-600"
            : "text-gray-500 hover:text-gray-700"
            }`}
          onClick={() => setActiveTab("returned")}
        >
          بلیط‌های مرجوعی
        </button>
      </div>

      {activeTab === "tickets" && (
        <>
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
            <table className="min-w-full text-sm text-right">
              <thead className="bg-green-200 text-gray-700">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">نام مسافر</th>
                  <th className="p-4">شماره تماس</th>
                  <th className="p-4">مبدأ</th>
                  <th className="p-4">مقصد</th>
                  <th className="p-4">ساعت حرکت</th>
                  <th className="p-4">ظرفیت</th>
                  <th className="p-4">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {currentTickets.map((ticket, index) => (
                  <tr key={ticket.id} className="border-t hover:bg-gray-100">
                    <td className="p-4">{startIndex + index + 1}</td>
                    <td className="p-4">{ticket.passengerName}</td>
                    <td className="p-4">{ticket.phone}</td>
                    <td className="p-4">{ticket.origin}</td>
                    <td className="p-4">{ticket.destination}</td>
                    <td className="p-4">{ticket.time}</td>
                    <td className="p-4">{ticket.capacity} نفر</td>
                    <td className={`p-4 font-semibold ${statusColors[ticket.status]}`}>
                      {ticket.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                }`}
            >
              صفحه قبل
            </button>
            <span>
              صفحه {currentPage} از {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                }`}
            >
              صفحه بعد
            </button>
          </div>
        </>
      )}

      {activeTab === "returned" && (
        <>
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
            <table className="min-w-full text-sm text-right">
              <thead className="bg-red-200 text-gray-700">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">نام مسافر</th>
                  <th className="p-4">شماره تماس</th>
                  <th className="p-4">مبدأ</th>
                  <th className="p-4">مقصد</th>
                  <th className="p-4">ساعت حرکت</th>
                  <th className="p-4">ظرفیت</th>
                  <th className="p-4">تاریخ مرجوعی</th>
                  <th className="p-4">دلیل مرجوعی</th>
                </tr>
              </thead>
              <tbody>
                {currentReturnedTickets.map((ticket, index) => (
                  <tr key={ticket.id} className="border-t hover:bg-gray-100">
                    <td className="p-4">{returnedStartIndex + index + 1}</td>
                    <td className="p-4">{ticket.passengerName}</td>
                    <td className="p-4">{ticket.phone}</td>
                    <td className="p-4">{ticket.origin}</td>
                    <td className="p-4">{ticket.destination}</td>
                    <td className="p-4">{ticket.time}</td>
                    <td className="p-4">{ticket.capacity} نفر</td>
                    <td className="p-4">{ticket.returnDate}</td>
                    <td className="p-4">{ticket.returnReason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleReturnedPreviousPage}
              disabled={returnedCurrentPage === 1}
              className={`px-4 py-2 rounded-lg ${returnedCurrentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                }`}
            >
              صفحه قبل
            </button>
            <span>
              صفحه {returnedCurrentPage} از {returnedTotalPages}
            </span>
            <button
              onClick={handleReturnedNextPage}
              disabled={returnedCurrentPage === returnedTotalPages}
              className={`px-4 py-2 rounded-lg ${returnedCurrentPage === returnedTotalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                }`}
            >
              صفحه بعد
            </button>
          </div>
        </>
      )}

    </div>
  );
}