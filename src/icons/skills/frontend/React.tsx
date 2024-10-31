import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const React: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.2 12a2.2 2.2 0 0 1-2.2 2.2A2.2 2.2 0 0 1 9.8 12 2.2 2.2 0 0 1 12 9.8a2.2 2.2 0 0 1 2.2 2.2zM17 1.3c-1.4 0-3.1 1-5 2.6-1.7-1.6-3.5-2.6-4.8-2.6-.4 0-.8.1-1.1.3C4.6 2.4 4.3 5 5 8c-3 1-5 2.4-5 4s2 3.1 5 4c-.7 3.1-.3 5.6 1 6.4.4.2.7.3 1.1.3 1.4 0 3.1-1 5-2.6 1.7 1.6 3.5 2.6 4.8 2.6.4 0 .8-.1 1.1-.3 1.4-.8 1.7-3.3 1-6.4 3-.9 5-2.4 5-4s-2-3-5-4c.7-3.1.3-5.6-1-6.4-.3-.2-.7-.3-1.1-.3zm0 1.1.5.1c.7.4 1 1.9.8 3.7l-.3 1.5c-1-.3-2-.4-3.1-.6l-2-2.4c1.6-1.5 3-2.3 4-2.3zM7 2.4c1 0 2.5.8 4.1 2.3a23 23 0 0 0-2 2.4C8 7.3 7 7.4 6 7.7l-.3-1.4c-.2-1.9 0-3.4.7-3.7l.6-.2zm4.9 3L13.3 7a29.6 29.6 0 0 0-2.7 0L12 5.5zm0 2.7h2.2a26.4 26.4 0 0 1 2.2 3.9 27.2 27.2 0 0 1-2.2 3.8 25.6 25.6 0 0 1-4.4 0A26.6 26.6 0 0 1 7.6 12a25.2 25.2 0 0 1 2.2-3.8l2.2-.1zm-3.6.3A25.5 25.5 0 0 0 7 10.7c-.2-.7-.5-1.3-.6-2l2-.3zm7.2 0c.7 0 1.4.2 2 .3-.1.7-.4 1.3-.6 2a23 23 0 0 0-1.4-2.3zm3 .6 1.5.5c1.7.8 2.8 1.7 2.8 2.5s-1.1 1.7-2.8 2.5l-1.4.5c-.3-1-.6-2-1.1-3 .5-1 .8-2 1-3zM5.4 9l1 3-1 3-1.4-.5c-1.7-.8-2.8-1.7-2.8-2.5s1.1-1.7 2.8-2.5L5.3 9zM17 13.3c.2.7.5 1.3.6 2l-2 .4a25.8 25.8 0 0 0 1.4-2.4zm-10 0a22.7 22.7 0 0 0 1.4 2.4 22 22 0 0 1-2-.4c.1-.7.4-1.3.6-2zm11 3 .2 1.4c.2 2 0 3.4-.7 3.8a1 1 0 0 1-.6 0c-1 0-2.5-.7-4.1-2.2a23 23 0 0 0 2-2.4c1.1-.2 2.2-.3 3.1-.6zm-12 0c1 .3 2.1.4 3.2.6l2 2.4c-1.6 1.5-3 2.3-4 2.3l-.6-.1c-.7-.4-1-1.9-.8-3.7l.3-1.5zm4.7.7a29.6 29.6 0 0 0 2.7 0L12 18.5 10.7 17z" />
    </svg>
  );
};