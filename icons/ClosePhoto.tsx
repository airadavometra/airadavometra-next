import { WithClassName } from "@/types/common";
import { FC } from "react";

export const ClosePhoto: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <defs />
      <g clip-path="url(#clip0)">
        <path
          fill="#E4E4E4"
          d="M36 32L63 4a2 2 0 10-3-3L32 28 4 1a2 2 0 10-3 3l27 28L1 60a3 3 0 103 3l28-27 28 27a2 2 0 003 0v-3L36 32z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h64v64H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
