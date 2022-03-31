import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Previous: FC<WithClassName> = ({ className }) => {
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
          d="M1.22 30.24L30.82.72a2.48 2.48 0 013.51 3.52L6.49 32l27.84 27.76a2.48 2.48 0 11-3.5 3.52L1.23 33.76a2.48 2.48 0 010-3.52z"
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
