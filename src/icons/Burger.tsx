import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Burger: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        fill="#333"
        d="M32 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm15 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-22-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm15 0a2 2 0 1 0-1-4 2 2 0 0 0 1 4zm22 38H2l-2 2c0 7 6 13 13 13h38c7 0 13-6 13-13l-2-2zM51 60H13c-4 0-8-3-9-7h56c-1 4-5 7-9 7zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm45 19-6 2-4 1-4-1a9 9 0 0 0-12 0l-4 1-4-1-6-2-6 2-4 1-4-1-6-2a2 2 0 0 0 0 3l4 2 6 2 6-2 4-2 4 2 6 2 6-2 4-2 4 2a9 9 0 0 0 12 0l4-2a2 2 0 0 0 0-3zM6 34h52c3 0 6-3 6-6C64 13 51 0 36 0h-8C13 0 0 13 0 28c0 3 3 6 6 6zM28 4h8c13 0 24 11 24 24l-2 2H6l-2-2C4 15 15 4 28 4z"
      />
    </svg>
  );
};
