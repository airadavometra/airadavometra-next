import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Csharp: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 64 64"
    >
      <defs />
      <defs></defs>
      <circle cx="32" cy="32" r="32" fill="#05930c" />
      <path fill="#fff" d="M9.82 9A32 32 0 1055 54.18z" opacity=".1" />
      <path d="M30.43 43.55a14.78 14.78 0 01-7 1.48 11.23 11.23 0 01-8.61-3.46 12.78 12.78 0 01-3.23-9.09 13.39 13.39 0 013.64-9.77A12.35 12.35 0 0124.49 19a14.8 14.8 0 015.94 1v3.15a12 12 0 00-6-1.51 9.17 9.17 0 00-7 2.9 10.93 10.93 0 00-2.7 7.75 10.4 10.4 0 002.52 7.34 8.58 8.58 0 006.62 2.73 12.42 12.42 0 006.57-1.69zM52.76 26.46l-.4 1.86h-4.6l-1.1 5.28h4.94l-.47 1.86h-4.84l-1.55 7h-2.21l1.51-7h-4.4l-1.48 7H36l1.48-7h-4.64l.35-1.86h4.66l1.07-5.27h-4.87l.37-1.86h4.87l1.48-7.07H43l-1.48 7.07h4.43l1.51-7.07h2.16l-1.48 7.07zm-7.17 1.86h-4.44L40 33.6h4.46z" />
    </svg>
  );
};