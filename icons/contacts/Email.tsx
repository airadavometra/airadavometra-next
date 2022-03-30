import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Email: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <defs />
      <g fill="#333" clip-path="url(#clip0)">
        <path d="M63.436 12.715L44.026 32l19.41 19.285a5.56 5.56 0 00.564-2.41v-33.75a5.56 5.56 0 00-.564-2.41zM58.375 9.5H5.625a5.56 5.56 0 00-2.41.564l24.808 24.683a5.63 5.63 0 007.954 0l24.808-24.683a5.56 5.56 0 00-2.41-.564zM.564 12.715A5.56 5.56 0 000 15.125v33.75c0 .866.213 1.676.564 2.41L19.974 32 .564 12.715z" />
        <path d="M41.375 34.651l-2.747 2.747c-3.655 3.655-9.602 3.655-13.257 0l-2.746-2.747-19.41 19.285a5.56 5.56 0 002.41.564h52.75a5.56 5.56 0 002.41-.564l-19.41-19.285z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h64v64H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
