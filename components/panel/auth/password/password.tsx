"use client";
import { useRouter } from "next/navigation";
import { Formik, Field, Form } from "formik";

const ForgotPasswordForm = () => {
  const router = useRouter();

  const handleSubmit = (values: { nationalCode: string }) => {
    console.log("فراموشی گذرواژه برای:", values.nationalCode);
    router.push("/login");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-[500px]">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-orange-400 p-3 rounded-full mb-4">
          <span className="text-black text-2xl">🔑</span>
        </div>
        <h2 className="text-xl font-bold mb-4">فراموشی گذرواژه</h2>
        <p className="text-gray-600 text-center mb-4">
          لطفاً کد ملی خود را وارد کنید<br/> تا راهنمایی‌های لازم برای بازیابی
          گذرواژه برای شما ارسال شود
        </p>
      </div>
      <Formik
        initialValues={{
          nationalCode: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-2 flex flex-col justify-center items-center">
            <div className="w-96 flex flex-col items-center">
              <Field
                type="text"
                name="nationalCode"
                placeholder="کد ملی"
                className="w-full p-2 border rounded-2xl mb-2"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-400 text-black p-2 rounded-2xl font-bold w-96 hover:bg-orange-500 cursor-pointer"
            >
              بازیابی گذرواژه
            </button>
            <div className="flex justify-center text-sm text-gray-500 w-96 mt-4 hover:text-gray-900">
              <a href="/login">بازگشت به صفحه ورود</a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
