
"use client";
import React, { useState } from "react";

const mockTickets = [
   {
    id: 1,
    passengerName: "علی محمدی",
    phone: "09121234567",
    origin: "تهران",
    destination: "کرج",
    time: "09:30",
    capacity: 2,
    status: "انجام شده",
  },
  {
    id: 2,
    passengerName: "سارا رحیمی",
    phone: "09121231234",
    origin: "قم",
    destination: "تهران",
    time: "14:00",
    capacity: 1,
    status: "پیش‌رو",
  },
  {
    id: 3,
    passengerName: "رضا ناصری",
    phone: "09351234567",
    origin: "اصفهان",
    destination: "شیراز",
    time: "17:45",
    capacity: 3,
    status: "لغو شده",
  },
  {
    id: 4,
    passengerName: "علی اکبری",
    phone: "09351234567",
    origin: "بابل",
    destination: "ساری",
    time: "17:45",
    capacity: 5,
    status: "لغو شده",
  }
  ,
  {
    id: 5,
    passengerName: "حسن اکبری",
    phone: "09351234567",
    origin: "بابل",
    destination: "ساری",
    time: "17:00",
    capacity: 15,
    status: "پیش‌رو"
  }
   ,
  {
    id: 6,
    passengerName: "علی قلی ",
    phone: "09351234567",
    origin: "بابل",
    destination: "ساری",
    time: "12:00",
    capacity: 15,
    status:  "انجام شده"
  }
  ,{
      id: 7,
    passengerName: "علی قلی ",
    phone: "09351234567",
    origin: "بابل",
    destination: "ساری",
    time: "12:00",
    capacity: 15,
    status:  "انجام شده"
  }
  ,{
      id: 8,
    passengerName: "علی قلی ",
    phone: "09351234567",
    origin: "بابل",
    destination: "ساری",
    time: "12:00",
    capacity: 25,
    status:  "انجام شده"
  }

];

const statusColors = {
  "انجام شده": "text-green-600",
  "پیش‌رو": "text-yellow-600",
  "لغو شده": "text-red-600",
};

const SoldTicketsPanel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(mockTickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = mockTickets.slice(startIndex, startIndex + itemsPerPage);

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

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🎫 بلیط‌های فروخته‌شده
      </h1>

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
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1 ? "bg-gray-300 hover:bg-gray-500 cursor-pointer" : "bg-green-500 cursor-pointer hover:bg-green-800 text-white"
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
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages ? "bg-gray-300 cursor-pointer hover:bg-graay-500" : "bg-green-500 cursor-pointer hover:bg-green-800  text-white"
          }`}
        >
          صفحه بعد
        </button>
      </div>
    </div>
  );
};

export default SoldTicketsPanel;