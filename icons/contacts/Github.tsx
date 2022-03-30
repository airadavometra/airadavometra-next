import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Github: FC<WithClassName> = ({ className }) => {
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
        d="M32 .7915c-17.68 0-32 14.328-32 32.0001 0 14.1413 9.168 26.1333 21.88 30.36 1.6.3013 2.1867-.688 2.1867-1.5387 0-.76-.0267-2.7733-.04-5.44-8.9014 1.9307-10.7787-4.2933-10.7787-4.2933-1.456-3.6934-3.56-4.68-3.56-4.68-2.8987-1.984.224-1.944.224-1.944 3.2133.224 4.9013 3.296 4.9013 3.296 2.8534 4.8933 7.4907 3.48 9.32 2.6613.288-2.0693 1.112-3.48 2.0267-4.28-7.1067-.8-14.576-3.552-14.576-15.8133 0-3.4934 1.24-6.3468 3.2933-8.5868-.36-.808-1.44-4.0613.28-8.4693 0 0 2.68-.8586 8.8 3.28 2.56-.712 5.28-1.064 8-1.08 2.72.016 5.44.368 8 1.08 6.08-4.1386 8.76-3.28 8.76-3.28 1.72 4.408.64 7.6613.32 8.4693 2.04 2.24 3.28 5.0934 3.28 8.5868 0 12.2933-7.48 15-14.6 15.7866 1.12.96 2.16 2.9227 2.16 5.92 0 4.2827-.04 7.7227-.04 8.7627 0 .84.56 1.84 2.2 1.52C54.84 58.9116 64 46.9116 64 32.7916 64 15.1195 49.672.7915 32 .7915z"
      />
    </svg>
  );
};