"use client";
import React, { useState } from "react";

const availableDrivers = [
  { id: "driver-1", name: "علی محمدی" },
  { id: "driver-2", name: "فاطمه کریمی" },
  { id: "driver-3", name: "رضا حسینی" },
  { id: "driver-4", name: "سارا احمدی" },
];

const AssignDriverToTrip = ({ tripId, onDriverAssigned }) => {
  const [selectedDriverId, setSelectedDriverId] = useState("");

  const handleDriverChange = (event) => {
    setSelectedDriverId(event.target.value);
  };

  const handleAssignDriver = () => {
    if (selectedDriverId) {
      const selectedDriver = availableDrivers.find(
        (driver) => driver.id === selectedDriverId
      );
      if (selectedDriver) {
        console.log(`راننده ${selectedDriver.name} با شناسه ${selectedDriver.id} به سفر ${tripId} اختصاص داده شد.`);
        if (onDriverAssigned) {
          onDriverAssigned(tripId, selectedDriverId);
        }
        alert(`راننده "${selectedDriver.name}" به سفر با شناسه "${tripId}" اختصاص داده شد.`);
        setSelectedDriverId("");
      } else {
        alert("راننده انتخاب شده نامعتبر است.");
      }
    } else {
      alert("لطفاً یک راننده را انتخاب کنید.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">تعیین راننده به سفر</h2>
      <p className="mb-3 text-gray-600">شناسه سفر: <span className="font-bold">{tripId}</span></p>

      <div className="mb-4">
        <label htmlFor="driverSelect" className="block text-gray-700 text-sm font-bold mb-2">
          انتخاب راننده:
        </label>
        <select
          id="driverSelect"
          value={selectedDriverId}
          onChange={handleDriverChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">انتخاب کنید</option>
          {availableDrivers.map((driver) => (
            <option key={driver.id} value={driver.id}>
              {driver.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          onClick={handleAssignDriver}
          className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-700 transition"
        >
          اختصاص راننده
        </button>
      </div>
    </div>
  );
};

const TripAssignmentPage = () => {
  const tripIdentifier = "trip-123"; 

  const handleDriverAssignment = (tripId, driverId) => {
    console.log(`درخواست ارسال شده برای اختصاص راننده ${driverId} به سفر ${tripId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">تعیین راننده به سفر</h1>
      <AssignDriverToTrip tripId={tripIdentifier} onDriverAssigned={handleDriverAssignment} />
    </div>
  );
};

export default TripAssignmentPage;