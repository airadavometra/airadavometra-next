import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Expand: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 128 128"
    >
      <defs />
      <g fill="#333" clip-path="url(#clip0)">
        <path d="M67.92 1.63l48.65 48.64a5.55 5.55 0 11-7.84 7.85L64 13.4 19.28 58.12a5.55 5.55 0 11-7.85-7.85L60.08 1.63a5.55 5.55 0 017.84 0zM67.92 69.88l48.65 48.65a5.55 5.55 0 11-7.84 7.84L64 81.65l-44.72 44.72a5.55 5.55 0 11-7.85-7.84l48.65-48.65a5.55 5.55 0 017.84 0z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h128v128H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};