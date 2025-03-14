import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Redux: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.6 16.5c.9 0 1.6-.8 1.5-1.7 0-1-.8-1.7-1.7-1.7a1.7 1.7 0 0 0-1.7 1.8c0 .5.2.8.5 1.1a11 11 0 0 1-5 4.8 8.2 8.2 0 0 1-5 1 4.3 4.3 0 0 1-3-1.8c-1-1.5-1.1-3.2-.3-4.8a7 7 0 0 1 2-2.4 10 10 0 0 1-.3-1.6c-4.5 3.2-4 7.6-2.7 9.6 1 1.5 3 2.5 5.3 2.5.6 0 1.3 0 1.9-.2 3.9-.8 6.8-3.1 8.5-6.6zm5.4-3.7a12.4 12.4 0 0 0-9.7-4.3h-.5c-.2-.5-.8-.9-1.5-.9-1 0-1.7.8-1.7 1.8 0 .9.8 1.6 1.8 1.6a1.7 1.7 0 0 0 1.5-1h.6c2.3 0 4.5.7 6.5 2 1.5 1 2.6 2.3 3.2 3.9.5 1.3.5 2.5 0 3.6A4.5 4.5 0 0 1 18 22c-1.2 0-2.4-.4-3-.7l-1.4 1.1c1.3.6 2.7 1 4 1 2.9 0 5-1.7 5.9-3.3.9-1.8.8-4.8-1.5-7.4zM6.5 17c0 1 .8 1.7 1.7 1.7a1.7 1.7 0 0 0 1.7-1.8c0-.9-.8-1.6-1.7-1.6h-.3a11.2 11.2 0 0 1-1.5-6.8c0-1.8.7-3.4 1.8-4.7a5.3 5.3 0 0 1 3.7-1.7c3.2 0 4.6 4 4.7 5.6L18 8C17.7 3.2 14.7.6 11.8.6c-2.8 0-5.3 2-6.3 5C4 9.3 5 13.1 6.7 16.1l-.2.8z" />
    </svg>
  );
};
