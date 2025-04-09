"use client";
import React from "react";
import { FaCircle } from 'react-icons/fa';

const DriverStatus = ({ isOnline }) => {
  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <FaCircle className={`text-xs ${isOnline ? 'text-green-500' : 'text-red-500'}`} />
      <span className={`text-sm ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
        {isOnline ? 'آنلاین' : 'آفلاین'}
      </span>
    </div>
  );
};

const DriverStatusWithInfo = ({ driver }) => {
  if (!driver) {
    return <p className="text-gray-600">اطلاعات راننده موجود نیست.</p>;
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-md shadow-sm bg-white border border-gray-200">
      <span className="font-semibold text-gray-700">{driver.name}</span>
      <DriverStatus isOnline={driver.availability} />
    </div>
  );
};

const DriverStatusList = ({ drivers }) => {
  if (!drivers || drivers.length === 0) {
    return <p className="text-gray-600 mt-4">هیچ راننده‌ای موجود نیست.</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">وضعیت رانندگان</h2>
      <ul className="space-y-2">
        {drivers.map((driver) => (
          <li key={driver.licenseNumber}>
            <DriverStatusWithInfo driver={driver} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const DriverStatusPage = () => {
  const sampleDrivers = [
    {
      name: "رضا حسینی",
      licenseNumber: "9876543210",
      availability: true,
    },
    {
      name: "فاطمه کریمی",
      licenseNumber: "0123456789",
      availability: false,
    },
    {
      name: "محمد باقری",
      licenseNumber: "1122334455",
      availability: true,
    },
    {
      name: "سارا احمدی",
      licenseNumber: "2233445566",
      availability: true,
    },
    {
      name: "علی رضایی",
      licenseNumber: "3344556677",
      availability: false,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">وضعیت رانندگان</h1>

      <DriverStatusList drivers={sampleDrivers} />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">نمایش وضعیت تکی</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-md shadow-sm bg-white border border-gray-200">
            <span className="font-semibold text-gray-700">رضا حسینی:</span>
            <DriverStatus isOnline={true} />
          </div>
          <div className="p-4 rounded-md shadow-sm bg-white border border-gray-200">
            <span className="font-semibold text-gray-700">فاطمه کریمی:</span>
            <DriverStatus isOnline={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverStatusPage;