import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Input } from "@/custom";

const validationSchema = Yup.object({
  firstName: Yup.string().required("نام الزامی است"),
  lastName: Yup.string().required("نام خانوادگی الزامی است"),
  phone: Yup.string()
    .required("شماره تماس الزامی است")
    .matches(/^[0-9]+$/, "شماره تماس معتبر نیست")
    .min(10, "شماره تماس باید حداقل 10 رقم باشد"),
  address: Yup.string().required("آدرس الزامی است"),
  profileImage: Yup.mixed().required("تصویر پروفایل الزامی است"),
});

export default function EditProfile () {

  const [isModalOpen, setIsModalOpen] = useState(false);
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
          ویرایش پروفایل
        </a>
        <BiSolidEdit className="mx-2 mt-2 cursor-pointer" />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="relative bg-white rounded-lg p-6 w-96 max-w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">ویرایش پروفایل</h3>
              <button
                onClick={toggleModal}
                className="text-gray-500  hover:text-red-700"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                phone: "",
                address: "",
                profileImage: null,
              }}
              validationSchema={validationSchema}
              onSubmit={() => {}}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      label="نام"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                     styles={{
            labelClassName: "block text-sm text-gray-700",
          }}
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </div>
                    )}
                  </div>

                  <div>
                    <Input
                      type="text"
                      id="lastName"
                      label="نام خانوادگی"
                      name="lastName"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      styles={{
            labelClassName: "block text-sm text-gray-700",
          }}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </div>
                    )}
                  </div>

                  <div>
                    <Input
                      type="text"
                      id="phone"
                      label="شماره تماس"
                      name="phone"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      styles={{
                        labelClassName: "block text-sm text-gray-700",
                      }}
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div>
                    <Input
                    label="آدرس"
                      type="text"
                      id="address"
                      name="address"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      styles={{
                        labelClassName: "block text-sm text-gray-700",
                      }}
                    
                    />
                    {errors.address && touched.address && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.address}
                      </div>
                    )}
                  </div>

                  <div>
                          <Input
                              type="file"
                              label="تغییر عکس پروفایل"
                              />
   
                    {errors.profileImage && touched.profileImage && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.profileImage}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex gap-2 justify-end">
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="px-4 py-2 bg-red-700 hover:bg-red-800 cursor-pointer text-white rounded-md"
                    >
                      انصراف
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 cursor-pointer text-white rounded-md"
                    >
                      ثبت
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};
