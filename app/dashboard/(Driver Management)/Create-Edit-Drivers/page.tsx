"use client";
import React, { useState } from "react";

const DriverForm = ({ initialData = null, onSubmit }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      phoneNumber: "",
      licenseNumber: "",
      vehicleType: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-4">
      <input
        type="text"
        name="name"
        placeholder="نام راننده"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl"
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="شماره تلفن"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl"
      />
      <input
        type="text"
        name="licenseNumber"
        placeholder="شماره گواهینامه"
        value={formData.licenseNumber}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl"
      />
      <input
        type="text"
        name="vehicleType"
        placeholder="نوع وسیله نقلیه"
        value={formData.vehicleType}
        onChange={handleChange}
        className="p-3 border rounded-xl"
      />

      <div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-bold py-3 rounded-xl hover:bg-indigo-600 transition"
        >
          {initialData ? "ویرایش راننده" : "افزودن راننده"}
        </button>
      </div>
    </form>
  );
};

// کامپوننت تب برای افزودن و ویرایش رانندگان
const DriverTabs = () => {
  const [activeTab, setActiveTab] = useState<"add" | "edit">("add");

  const driverToEdit = {
    name: "علی محمدی",
    phoneNumber: "09121234567",
    licenseNumber: "1234567890",
    vehicleType: "سواری",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-8">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 font-bold rounded-full transition ${
            activeTab === "add"
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("add")}
        >
          افزودن راننده جدید
        </button>
        <button
          className={`px-4 py-2 font-bold rounded-full transition ${
            activeTab === "edit"
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("edit")}
        >
          ویرایش راننده
        </button>
      </div>

      {activeTab === "add" ? (
        <>
          <h2 className="text-lg font-bold text-center mb-2">افزودن راننده</h2>
          <DriverForm onSubmit={(data) => console.log("✅ راننده جدید:", data)} />
        </>
      ) : (
        <>
          <h2 className="text-lg font-bold text-center mb-2">ویرایش راننده</h2>
          <DriverForm
            initialData={driverToEdit}
            onSubmit={(data) => console.log("✏️ راننده ویرایش‌شده:", data)}
          />
        </>
      )}
    </div>
  );
};

export default DriverTabs;