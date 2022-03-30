import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Html5: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <defs />
      <path
        fill="#FF5722"
        d="M5.95 2.05l4.75 53.83 21.34 5.98 21.34-5.98 4.76-53.83H5.94z"
      />
      <path
        fill="#FCFCFC"
        d="M47.83 19.65H22.82l.6 6.76h23.81L45.44 46.7l-13.4 3.75-13.4-3.75-.94-10.6h6.57l.48 5.5 7.28 1.98h.01l7.3-1.99.75-8.56H17.44l-1.77-19.97H48.4l-.58 6.6z"
      />
    </svg>
  );
};
