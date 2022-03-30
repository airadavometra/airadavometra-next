import { WithClassName } from "@/types/common";
import { FC } from "react";

export const YouTube: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        fill="#333"
        d="M62.66 16.5A8.04 8.04 0 0057 10.8c-4.99-1.35-25-1.35-25-1.35s-20.01 0-25 1.35a8.05 8.05 0 00-5.66 5.7C0 21.52 0 32 0 32s0 10.48 1.34 15.5A8.04 8.04 0 007 53.2c4.99 1.35 25 1.35 25 1.35s20.01 0 25-1.35a8.04 8.04 0 005.66-5.7C64 42.48 64 32 64 32s0-10.48-1.34-15.5zM25.46 41.5V22.5L42.17 32l-16.73 9.51z"
      />
    </svg>
  );
};