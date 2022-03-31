import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Next: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 64"
    >
      <defs />
      <g clip-path="url(#clip0)">
        <path
          fill="#E4E4E4"
          d="M34.33 30.24L4.73.72a2.48 2.48 0 00-3.5 3.52L29.07 32 1.23 59.76a2.48 2.48 0 103.5 3.52l29.6-29.52a2.48 2.48 0 000-3.52z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h35.56v64H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
