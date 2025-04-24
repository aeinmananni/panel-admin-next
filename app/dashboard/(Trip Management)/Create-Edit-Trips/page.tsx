"use client";
import React, { useState } from "react";

const TripForm = ({ initialData = null, onSubmit }) => {
  const [formData, setFormData] = useState(
    initialData || {
      origin: "",
      destination: "",
      date: "",
      time: "",
      price: "",
      capacity: "",
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
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
    >
      <input
        type="text"
        name="origin"
        placeholder="مبدأ"
        value={formData.origin}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl"
      />
      <input
        type="text"
        name="destination"
        placeholder="مقصد"
        value={formData.destination}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl"
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl "
      />
      <input
        type="number"
        name="price"
        placeholder="قیمت (تومان)"
        value={formData.price}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl "
      />
      <input
        type="number"
        name="capacity"
        placeholder="ظرفیت کل"
        value={formData.capacity}
        onChange={handleChange}
        required
        className="p-3 border rounded-xl"
      />

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-500 transition"
        >
          {initialData ? "ویرایش سفر" : "ثبت سفر"}
        </button>
      </div>
    </form>
  );
};

const TripTabs = () => {
  const [activeTab, setActiveTab] = useState<"create" | "edit">("create");

  const tripToEdit = {
    origin: "تهران",
    destination: "شیراز",
    date: "1403-02-10",
    time: "16:00",
    price: "180000",
    capacity: "35",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full mx-auto mt-8">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 font-bold rounded-full transition ${
            activeTab === "create"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("create")}
        >
          ایجاد سفر جدید
        </button>
        <button
          className={`px-4 py-2 font-bold rounded-full transition ${
            activeTab === "edit"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("edit")}
        >
          ویرایش سفر
        </button>
      </div>

      {activeTab === "create" ? (
        <>
          <h2 className="text-lg font-bold text-center mb-2">ایجاد سفر</h2>
          <TripForm onSubmit={(data) => console.log("✅ سفر جدید:", data)} />
        </>
      ) : (
        <>
          <h2 className="text-lg font-bold text-center mb-2">ویرایش سفر</h2>
          <TripForm
            initialData={tripToEdit}
            onSubmit={(data) => console.log("✏️ سفر ویرایش‌شده:", data)}
          />
        </>
      )}
    </div>
  );
};

export default TripTabs;
