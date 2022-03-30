import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Css3: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <defs />
      <path
        fill="#2299F8"
        d="M5.95 2.05l4.75 53.83 21.34 5.98 21.34-5.98 4.76-53.83H5.94z"
      />
      <path
        fill="#FCFCFC"
        d="M47.98 19.65l-.6 6.76-1.82 20.28-13.52 3.75-13.52-3.75-.95-10.6h6.62l.5 5.5 7.35 1.98 7.36-2 1-9.15-23.14.06-.66-6.26 24.36-.3.49-6.7-25.5.07-.43-6.24h33.05l-.6 6.6z"
      />
    </svg>
  );
};