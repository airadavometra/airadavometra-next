import { WithClassName } from "@/types/common";
import { FC } from "react";

export const YouTube: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.5 6.2A3 3 0 0 0 21.4 4c-1.9-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.3C0 8 0 12 0 12s0 4 .5 5.8A3 3 0 0 0 2.6 20c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2c.5-2 .5-5.9.5-5.9s0-4-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
};
