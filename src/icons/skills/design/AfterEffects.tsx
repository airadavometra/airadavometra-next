import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const AfterEffects: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m8.5 10.7-.3-.9L8 9l-.2-.8-.4 1.3-.5 1.5c0 .5-.2 1-.4 1.4H9a14.2 14.2 0 0 0-.5-1.6zm8.6-.3c-.5 0-1 .3-1.3.8a2 2 0 0 0-.2.7h2.9v-.5c-.3-.6-.8-1-1.4-1zM19.7.3H4.3A4.2 4.2 0 0 0 0 4.6v14.9c0 2.3 1.9 4.2 4.3 4.2h15.4c2.4 0 4.3-1.9 4.3-4.3V4.6C24 2.2 22.1.3 19.7.3zm-7 16.5h-2l-.2-.1-.9-2.4H6l-.7 2.4-.2.1H3v-.2l3.2-9.2.1-.3v-.7H9.3l3.6 10.3v.1zm7.9-4v.4l-.2.2h-4.8l.3.9c.2.2.4.5.7.6l1.3.2a6.1 6.1 0 0 0 2-.3V16.6l-1 .4a6.8 6.8 0 0 1-3.4-.2c-.5-.3-1-.6-1.3-1l-.7-1.3a5.1 5.1 0 0 1 0-3c.2-.6.5-1 .8-1.4.3-.4.7-.7 1.2-1 .5-.2 1-.3 1.7-.3l1.5.3c.4.2.8.5 1 .8a3.7 3.7 0 0 1 .9 2.4v.6z" />
    </svg>
  );
};