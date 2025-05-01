"use client";
import React, { useState } from "react";

const RouteSelectorWithDetails = ({ onRouteSelect }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const handleDepartureTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureTime(e.target.value);
  };

  const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(e.target.value);
  };

  const handleShowRoute = () => {
    if (origin && destination && departureTime && capacity) {
      const routeDetails = {
        origin,
        destination,
        departureTime,
        capacity: parseInt(capacity, 10),
      };
      console.log("انتخاب مسیر با جزئیات:", routeDetails);
      if (onRouteSelect) {
        onRouteSelect(routeDetails);
      }
      alert(
        `مسیر از ${origin} به ${destination} در ساعت ${departureTime} با ظرفیت ${capacity} نفر نمایش داده خواهد شد.`
      );
    } else {
      alert("لطفاً مبدأ، مقصد، ساعت حرکت و ظرفیت را وارد کنید.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
        تعیین مسیر و جزئیات سفر
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="مبدأ"
          value={origin}
          onChange={handleOriginChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
          required
        />
        <input
          type="text"
          placeholder="مقصد"
          value={destination}
          onChange={handleDestinationChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
          required
        />
        <input
          type="time"
          placeholder="ساعت حرکت"
          value={departureTime}
          onChange={handleDepartureTimeChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="ltr" 
          required
        />
        <input
          type="number"
          placeholder="ظرفیت (نفر)"
          value={capacity}
          onChange={handleCapacityChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
          required
        />
        <button
          onClick={handleShowRoute}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-500 transition"
        >
          نمایش مسیر و ثبت جزئیات
        </button>
      </div>

    </div>
  );
};

export default RouteSelectorWithDetails;