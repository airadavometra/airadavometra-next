import { WithClassName } from "@/types/common";
import { FC } from "react";

export const TypeScript: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.1 0C.5 0 0 .5 0 1.1V23c0 .6.5 1.1 1.1 1.1H23c.6 0 1.1-.5 1.1-1.1V1c0-.6-.5-1.1-1.1-1.1zm17.4 9.8H20a6.4 6.4 0 0 1 1.3.4v2.5a4 4 0 0 0-.6-.4 5 5 0 0 0-.7-.3 5.5 5.5 0 0 0-1.5-.2l-.8.1a2.1 2.1 0 0 0-.6.3c-.2 0-.3.2-.4.3a.9.9 0 0 0-.1.5l.1.6.5.4.7.4.9.4c.5.2.9.4 1.2.7l1 .7c.3.3.5.6.6 1 .2.3.2.7.2 1.2 0 .7 0 1.2-.3 1.7a3 3 0 0 1-1 1 4.4 4.4 0 0 1-1.5.7l-1.8.1a10 10 0 0 1-1.9-.1 5.5 5.5 0 0 1-1.5-.5v-2.6a5 5 0 0 0 3.3 1.2l.8-.1.7-.3.3-.4a1 1 0 0 0 0-1 2.1 2.1 0 0 0-.6-.6 5.6 5.6 0 0 0-.8-.4 27.7 27.7 0 0 0-1-.4c-1-.4-1.6-.9-2-1.4a3 3 0 0 1-.7-2c0-.7.1-1.2.3-1.6.3-.5.6-.8 1-1.1a4.5 4.5 0 0 1 1.5-.6 7.5 7.5 0 0 1 1.8-.2zm-15.1.1h9.5v2.2H9.5v9.7H6.8V12H3.4z" />
    </svg>
  );
};
