"use client";
import React, { useState } from "react";

const TaxiFarePanel = () => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    baseFare: "",
    distanceRate: "",
    estimatedDistance: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEstimatedFare = () => {
    const base = parseFloat(formData.baseFare) || 0;
    const rate = parseFloat(formData.distanceRate) || 0;
    const distance = parseFloat(formData.estimatedDistance) || 0;
    return base + (rate * distance);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const estimatedFare = calculateEstimatedFare();
    alert(`قیمت تخمینی: ${estimatedFare.toFixed(2)} تومان`); // Replace with your actual logic
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
        تعیین قیمت بلیط تاکسی
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="origin"
          placeholder="مبدأ"
          value={formData.origin}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
        />
        <input
          type="text"
          name="destination"
          placeholder="مقصد"
          value={formData.destination}
          onChange={handleChange}
          required
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
        />
        <input
          type="number"
          name="baseFare"
          placeholder="کرایه پایه (تومان)"
          value={formData.baseFare}
          onChange={handleChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
        />
        <input
          type="number"
          name="distanceRate"
          placeholder="نرخ به ازای هر کیلومتر (تومان)"
          value={formData.distanceRate}
          onChange={handleChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
        />
        <input
          type="number"
          name="estimatedDistance"
          placeholder="مسافت تخمینی (کیلومتر)"
          value={formData.estimatedDistance}
          onChange={handleChange}
          className="p-3 border rounded-xl text-left text-gray-700"
          dir="rtl"
        />

        <div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-500 transition"
          >
            محاسبه قیمت تخمینی
          </button>
        </div>
      </form>

      {calculateEstimatedFare() > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
          <p className="font-semibold text-lg text-gray-700">
            قیمت تخمینی:{" "}
            <span className="text-yellow-500 text-xl">
              {calculateEstimatedFare().toFixed(2)} تومان
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-1">
            این یک تخمین است و ممکن است بسته به شرایط متفاوت باشد.
          </p>
        </div>
      )}
    </div>
  );
};

export default TaxiFarePanel;