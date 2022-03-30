import { WithClassName } from "@/types/common";
import { FC } from "react";

export const LinkIcon: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
    >
      <defs />
      <path
        fill="#F7C003"
        d="M57.59 31.8h-4.52c-.94 0-1.7.76-1.7 1.7v20.6c0 1.1-.89 1.99-1.98 1.99H9.89c-1.09 0-1.98-.9-1.98-1.99V14.6c0-1.08.89-1.97 1.98-1.97h21.67c.93 0 1.7-.76 1.7-1.7V6.41c0-.94-.77-1.7-1.7-1.7H9.89A9.9 9.9 0 000 14.61v39.5A9.9 9.9 0 009.9 64h39.49a9.9 9.9 0 009.9-9.9V33.5c0-.94-.77-1.7-1.7-1.7z"
      />
      <path
        fill="#F7C003"
        d="M62.3 0H44.32c-.93 0-1.69.76-1.69 1.7v4.52c0 .93.76 1.69 1.7 1.69h6.17L27.27 31.13a1.7 1.7 0 000 2.4l3.2 3.2a1.7 1.7 0 002.4 0L56.09 13.5v6.17c0 .94.76 1.7 1.7 1.7h4.51c.94 0 1.7-.76 1.7-1.7V1.7c0-.94-.76-1.7-1.7-1.7z"
      />
    </svg>
  );
};
