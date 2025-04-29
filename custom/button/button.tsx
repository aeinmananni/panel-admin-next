import { ButtonHTMLAttributes } from "react";

type ButtonType = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonType) {
  return (
    <button {...props} className={`cursor-pointer ${props.className}`}>
      {children}
    </button>
  );
}
