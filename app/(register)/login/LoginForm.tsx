"use client";
import { useRouter } from "next/navigation";
import { Formik, Field, Form } from "formik";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (values: { username: string; password: string }) => {
    console.log("Logging in with", values);
    router.push("/");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-[500px]">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-yellow-400 p-3 rounded-full mb-4">
          <span className="text-black text-2xl">🚖</span>
        </div>
        <h2 className="text-xl font-bold mb-4">ورود به پنل تاکسی</h2>
      </div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-2 flex flex-col justify-center items-center">
            <div className="w-96 flex flex-col items-center">
              <Field
                type="text"
                name="username"
                placeholder=" کد ملی"
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
              className=" bg-yellow-400 text-black p-2 rounded-2xl font-bold w-96 hover:bg-yellow-500 cursor-pointer"
            >
              ورود
            </button>
            <div className="flex justify-between text-sm text-gray-500 w-96 mb-4 hover:text-gray-900">
              <a href="/register">ایجاد حساب کاربری</a>
              <a href="/password">فراموشی گذرواژه</a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
