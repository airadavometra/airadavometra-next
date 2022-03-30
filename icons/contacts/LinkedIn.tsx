import { WithClassName } from "@/types/common";
import { FC } from "react";

export const LinkedIn: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <defs />
      <path
        fill="#333"
        d="M54.53 54.54h-9.48V39.69c0-3.54-.07-8.1-4.94-8.1-4.94 0-5.7 3.85-5.7 7.84v15.1h-9.47V24h9.1v4.16h.12c1.27-2.4 4.37-4.93 8.99-4.93 9.6 0 11.38 6.32 11.38 14.55v16.76zm-40.3-34.72a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm4.75 34.72h-9.5V24h9.5v30.54zM59.27 0H4.72A4.67 4.67 0 000 4.61V59.4A4.66 4.66 0 004.72 64h54.54c2.6 0 4.74-2.06 4.74-4.61V4.6A4.68 4.68 0 0059.26 0z"
      />
    </svg>
  );
};