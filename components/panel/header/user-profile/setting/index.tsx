import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className="flex justify-between cursor-pointer"
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
                className="text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4">
                <p className="text-gray-600">
                  محتوای تنظیمات اینجا قرار می‌گیرد
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Setting;
