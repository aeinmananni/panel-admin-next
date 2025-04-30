'use client';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form } from 'formik';

const RegisterForm = () => {
  const router = useRouter();

  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    nationalCode: string;
    password: string;
  }) => {
    console.log('Registering with', values);
    router.push('/login');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-[500px]">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-green-400 p-3 rounded-full mb-4">
          <span className="text-black text-2xl">👤</span>
        </div>
        <h2 className="text-xl font-bold mb-4">ایجاد حساب کاربری</h2>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          nationalCode: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-2 flex flex-col justify-center items-center">
            <div className="w-96 flex flex-col items-center">
              <Field
                type="text"
                name="firstName"
                placeholder="نام"
                className="w-full p-2 border rounded-2xl mb-2"
              />
              <Field
                type="text"
                name="lastName"
                placeholder="نام خانوادگی"
                className="w-full p-2 border rounded-2xl mb-2"
              />
              <Field
                type="tel"
                name="phoneNumber"
                placeholder="شماره تلفن"
                className="w-full p-2 border rounded-2xl mb-2"
              />
              <Field
                type="text"
                name="nationalCode"
                placeholder="کد ملی"
                className="w-full p-2 border rounded-2xl mb-2"
              />
              <Field
                type="password"
                name="password"
                placeholder="رمز عبور"
                className="w-full p-2 border rounded-2xl mb-2"
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 text-black p-2 rounded-2xl font-bold w-96 hover:bg-green-500 cursor-pointer"
            >
              ثبت نام
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

export default RegisterForm;