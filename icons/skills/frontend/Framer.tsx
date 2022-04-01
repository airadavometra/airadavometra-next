import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Framer: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      //fill="#0055FF"
    >
      <title>Framer</title>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
};
