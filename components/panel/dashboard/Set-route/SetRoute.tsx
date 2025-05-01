"use client";
import React, { useState } from "react";

const RouteSelector = ({ onRouteSelect }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const handleShowRoute = () => {
    if (origin && destination) {
      console.log("انتخاب مسیر:", { origin, destination });
      if (onRouteSelect) {
        onRouteSelect({ origin, destination });
      }
      alert(`مسیر از ${origin} به ${destination} نمایش داده خواهد شد.`);
    } else {
      alert("لطفاً مبدأ و مقصد را وارد کنید.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
        تعیین مسیر
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="مبدأ"
          value={origin}
          onChange={handleOriginChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
        />
        <input
          type="text"
          placeholder="مقصد"
          value={destination}
          onChange={handleDestinationChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
        />
        <button
          onClick={handleShowRoute}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-500 transition"
        >
          نمایش مسیر
        </button>
      </div>
    </div>
  );
};

export default RouteSelector;