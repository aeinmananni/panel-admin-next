

import RegisterForm from './RegisterForm';

export default function Login() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gray-100 blur-lg"></div>
      <div className="relative flex justify-center items-center h-full">
        <RegisterForm />
      </div>
    </div>
  );
}
