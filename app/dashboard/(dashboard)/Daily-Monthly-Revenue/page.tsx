"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const RevenueDashboard = () => {
  const dailyRevenue = 850000;
  const monthlyRevenue = 15400000; 

  const revenueData = [
    { day: "شنبه", amount: 1200000 },
    { day: "یک‌شنبه", amount: 950000 },
    { day: "دوشنبه", amount: 1100000 },
    { day: "سه‌شنبه", amount: 1250000 },
    { day: "چهارشنبه", amount: 1350000 },
    { day: "پنج‌شنبه", amount: 980000 },
    { day: "جمعه", amount: 850000 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* کارت درآمد امروز */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2 text-gray-600">درآمد امروز</h3>
        <p className="text-2xl font-extrabold text-yellow-500">{dailyRevenue.toLocaleString()} تومان</p>
      </div>

      {/* کارت درآمد ماه */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2 text-gray-600">درآمد ماه جاری</h3>
        <p className="text-2xl font-extrabold text-yellow-500">{monthlyRevenue.toLocaleString()} تومان</p>
      </div>

      {/* نمودار درآمد هفتگی */}
      <div className="bg-white rounded-2xl shadow-lg p-6 col-span-1 md:col-span-1 md:col-start-1 md:col-end-4">
        <h3 className="text-lg font-bold mb-4 text-gray-600 text-center">نمودار درآمد هفتگی</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip formatter={(value: number) => `${value.toLocaleString()} تومان`} />
            <Line type="monotone" dataKey="amount" stroke="#facc15" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueDashboard;
