import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Setting() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("theme");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className="flex justify-between hover:bg-gray-100 cursor-pointer"
        onClick={toggleModal}
      >
        <a className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
          تنظیمات
        </a>
        <IoSettingsOutline className="mx-2 mt-2 cursor-pointer" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="relative bg-white rounded-lg p-6 w-96 max-w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">تنظیمات</h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-red-700"
              >
                <IoMdClose size={24} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === "theme"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("theme")}
              >
                تغییر تم
              </button>
              <button
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === "language"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("language")}
              >
                تغییر زبان
              </button>
              <button
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === "other"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("other")}
              >
                سایر تنظیمات
              </button>
            </div>

            <div className="p-4">
              {activeTab === "theme" && (
                <div className="space-y-4">
                  <h4 className="font-medium">تنظیمات تم</h4>
                  <div className="flex space-x-4">
                    <button className="w-8 h-8 rounded-full cursor-pointer bg-blue-600"></button>
                    <button className="w-8 h-8 rounded-full cursor-pointer bg-green-600"></button>
                    <button className="w-8 h-8 rounded-full cursor-pointer bg-red-600"></button>
                    <button className="w-8 h-8 rounded-full cursor-pointer  bg-purple-600"></button>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="checkbox" id="dark-mode" className="mr-2" />
                    <label htmlFor="dark-mode">حالت تاریک</label>
                  </div>
                </div>
              )}

              {activeTab === "language" && (
                <div className="space-y-4">
                  <h4 className="font-medium">تغییر زبان</h4>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="fa">فارسی</option>
                    <option value="en">English</option>
                    <option value="ar">العربیة</option>
                  </select>
                  <p className="text-sm text-gray-500">
                    پس از تغییر زبان، صفحه refresh خواهد شد.
                  </p>
                </div>
              )}

              {activeTab === "other" && (
                <div className="space-y-4">
                  <h4 className="font-medium">سایر تنظیمات</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        id="notifications"
                        className="mr-2"
                      />
                      <label htmlFor="notifications">اعلان‌ها</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        id="updates"
                        className="mr-2"
                        defaultChecked
                      />
                      <label htmlFor="updates">بروزرسانی خودکار</label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
