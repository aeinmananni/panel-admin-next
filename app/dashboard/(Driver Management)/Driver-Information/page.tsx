"use client";
import React from "react";
import { FaUser, FaPhone, FaIdCard, FaCar, FaStar, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const DriverInfoCard = ({ driver }) => {
  if (!driver) {
    return <p className="text-gray-600">هیچ اطلاعات راننده‌ای موجود نیست.</p>;
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-200">
      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
        <div className="rounded-full bg-indigo-200 p-2">
          <FaUser className="text-indigo-700 text-xl" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{driver.name}</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaPhone className="text-gray-500" />
          <strong className="text-gray-700 text-sm">تلفن:</strong>
          <span className="text-gray-900 text-sm">{driver.phoneNumber}</span>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaIdCard className="text-gray-500" />
          <strong className="text-gray-700 text-sm">گواهینامه:</strong>
          <span className="text-gray-900 text-sm">{driver.licenseNumber}</span>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaCar className="text-gray-500" />
          <strong className="text-gray-700 text-sm">وسیله نقلیه:</strong>
          <span className="text-gray-900 text-sm">{driver.vehicleType}</span>
        </div>
        {driver.registrationNumber && (
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-gray-500">#</span>
            <strong className="text-gray-700 text-sm">پلاک:</strong>
            <span className="text-gray-900 text-sm">{driver.registrationNumber}</span>
          </div>
        )}
        {driver.rating && (
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <FaStar className="text-yellow-500" />
            <strong className="text-gray-700 text-sm">امتیاز:</strong>
            <span className="text-yellow-600 text-sm">{driver.rating}</span>
          </div>
        )}
        {driver.availability !== undefined && (
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {driver.availability ? <FaToggleOn className="text-green-500 text-lg" /> : <FaToggleOff className="text-red-500 text-lg" />}
            <strong className="text-gray-700 text-sm">وضعیت:</strong>
            <span className={`text-sm ${driver.availability ? 'text-green-600' : 'text-red-600'}`}>
              {driver.availability ? 'آنلاین' : 'آفلاین'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const DriverList = ({ drivers }) => {
  if (!drivers || drivers.length === 0) {
    return <p className="text-gray-600 mt-8">هیچ راننده‌ای موجود نیست.</p>;
  }

  return (
    <div className="mt-8">
      {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">لیست رانندگان</h2> */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {drivers.map((driver) => (
          <li key={driver.licenseNumber}>
            <DriverInfoCard driver={driver} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const DriverInformationPage = () => {
  const sampleDrivers = [
    {
      name: "رضا حسینی",
      phoneNumber: "09198765432",
      licenseNumber: "9876543210",
      vehicleType: "تاکسی",
      registrationNumber: "ت-123 ب 45",
      rating: 4.8,
      availability: true,
    },
    {
      name: "فاطمه کریمی",
      phoneNumber: "09351122334",
      licenseNumber: "0123456789",
      vehicleType: "سواری",
      registrationNumber: "ص-678 ج 90",
      rating: 4.5,
      availability: false,
    },
    {
      name: "محمد باقری",
      phoneNumber: "09125556677",
      licenseNumber: "1122334455",
      vehicleType: "ون",
      registrationNumber: "و-321 د 65",
      rating: 4.9,
      availability: true,
    },
    {
      name: "سارا احمدی",
      phoneNumber: "09391112233",
      licenseNumber: "2233445566",
      vehicleType: "موتور سیکلت",
      rating: 4.7,
      availability: true,
    },
  //   {
  //     name: " علی اکبری ",
  //     phoneNumber: " 09111152065",
  //     licenseNumber: " "258684136"


  //  }
  ];

  const mohammad = sampleDrivers.find(driver => driver.name === "محمد باقری");
  const fatemeh = sampleDrivers.find(driver => driver.name === "فاطمه کریمی");
  const reza = sampleDrivers.find(driver => driver.name === "رضا حسینی");

  const otherDrivers = sampleDrivers.filter(driver => driver.name !== "محمد باقری" && driver.name !== "فاطمه کریمی" && driver.name !== "رضا حسینی");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">اطلاعات رانندگان</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mohammad && <DriverInfoCard driver={mohammad} />}
        {fatemeh && <DriverInfoCard driver={fatemeh} />}
        {reza && <DriverInfoCard driver={reza} />}
      </div>

      {otherDrivers.length > 0 && <DriverList drivers={otherDrivers} />}
      {otherDrivers.length === 0 && <p className="text-gray-600 mt-8 text-center">راننده دیگری موجود نیست.</p>}
    </div>
  );
};

export default DriverInformationPage;