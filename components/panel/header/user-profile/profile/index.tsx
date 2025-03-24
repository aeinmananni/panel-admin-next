import Image from "next/image";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";


export default function Profile() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className="flex justify-between cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-all duration-300"
        onClick={toggleModal}
      >
        <a className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
          پروفایل
        </a>
        <CgProfile className="mx-2 mt-2 cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-300" />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="relative bg-white rounded-lg p-6 w-96 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                پروفایل ادمین
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-red-600 transition-all duration-300"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/images/user.jpg"
                      alt="Profile"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      <span className="font-semibold text-blue-600">نام:</span>{" "}
                      غنچـه
                    </p>
                    <p className="text-gray-800 font-semibold">
                      <span className="font-semibold text-blue-600">
                        نام خانوادگی:
                      </span>{" "}
                      عطایی
                    </p>
                    <p className="text-gray-600 font-semibold">
                      <span className="font-semibold text-blue-600">
                        ایمیل:
                      </span>{" "}
                      ghonche.ataee@gmail
                    </p>
                    <p className="text-gray-600 font-semibold">
                      <span className="font-semibold text-blue-600">شماره تماس : </span>{" "}
                      091111111
                    </p>
                    <p className="text-gray-600 font-semibold">
                      <span className="font-semibold text-blue-600">آدرس:</span>{" "}
                      بابل
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

