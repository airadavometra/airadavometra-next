import { WithClassName } from "@/types/common";
import { FC } from "react";

export const PostCss: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.6 0a7 7 0 0 0-.7 0l-.7.2h-.8l-.7.2h-.3c-.2 0-.4 0-.6.2a16.3 16.3 0 0 0-2 .7L5 2a14 14 0 0 0-1.6 1.3l-.3.4-.6.7-.5.6-.7 1.2-.3.5-.3.7-.2.6A72.2 72.2 0 0 0 0 10v1l.1.3v.4l.1.3v.2c.1 0 0 0 0 0l.1.2V12.8l.1.5v.2h.2a2.6 2.6 0 0 0 0 .4l.2.4v-.5l.2.1-.1-.2H.8h.1c0-.2 0-.2-.2-.2H1v-.3l-.1-.5V12H.5l.1.6-.1-.5v.2H.5v.2l-.2-.2v-.2a5 5 0 0 1 0-.2v-.2l.1-.2.3-.4V9.9a11.6 11.6 0 0 1 .5-1.5l.4-.9.7-1.3.5-.8.5-.7.9-1 1-.8A9.8 9.8 0 0 1 6.6 2L8 1.4l.8-.2 1-.2h.7a16.3 16.3 0 0 0 .6 0c-.2.1-.3.2-.3.4l-.3.3-.4.5-.5.8-.6.8-.8 1-.7 1c-.3.3-.4.6-.6 1L5.8 8a83.6 83.6 0 0 1-.7 1l-.1.2-.2.4-.2.2c0-.1.2-.2.1-.3l-.1.2-.1.2a4.5 4.5 0 0 0-.2.3l.2-.2a2.3 2.3 0 0 1 0 .1v.2l-.2.1h.2l.2-.2v-.1l.8-.8 1-1.2c0-.2.2-.4.4-.6v1.9h-.1v2.7V11l.1-.2v1.5h-.1c-.1.2 0 .3 0 .4-.1 0 0 0 0 .1-.1.1-.1.1 0 .1v.6l.1-1V14l-.1.3V15c.2 0 .1.1.2.2v1.2h-.1v-1h-.2v1.4H2.9l-.7.1h-.8l-.2.2c-.1 0-.2 0-.1.1v.1H1.7a6.4 6.4 0 0 0 1.5.3h6.1l.9-.1H13l.4-.1h.6l.9-.1H16l1-.1h2l.8-.1h1.9-.2l.1.1h-.1V17.6l-.2.1v.1s-.2 0-.1.2H21l-.1.2c-.2.2-.1.2-.1.3a2.8 2.8 0 0 0-.1.2l-.1.1-.1.2-.5.6c-.1 0-.2 0-.3.2l-.4.4-.6.5-.8.5-.5.3-.5.2-.2.2-.9.3-.6.3-.6.2H14l-1.1.2H10.5s-.1-.1-.2 0l-.3-.2h-.5l-.1-.1h-.5l-.3-.2h-.2L8 22l-.2-.2-.5-.2H7l-.6-.4h-.1l-.2-.2H6l-.7-.4-.3-.2c0-.2-.2-.3-.4-.4l-.3-.2-.1-.2H4l-.1-.2-.3-.1-.2-.2c-.2 0-.3-.2-.4-.3l-.6-.9v.2l-.1-.1.5.9.2.2-.3-.1c0-.1-.1-.2-.3-.2v-.2a.6.6 0 0 1-.2 0l.4.5h-.1l.4.4c0 .2.3.3.3.5h-.1l-.2-.3a.4.4 0 0 0 0 .1l.4.4v.1h.2v.2H4c0 .1.1.2.2 0v.2h.1l.3.3.4.4 1 .6 1.1.7a6.2 6.2 0 0 0 2.1.6l.5.2.8.1h.4v.1H12v.1c.2.1.5.1.8 0H14v-.1h.5l.2-.1h.2a.4.4 0 0 0-.2 0 7.3 7.3 0 0 1 .3-.2v.2l.8-.2c-.1-.2 0-.2.1-.3l-.2.1.8-.4-.1.1c.2.1.2 0 .2-.1h.3l.2-.1.4-.2h.1l.2-.1.2-.1h.2-.2l.1-.1.6-.3.4-.2H19a1 1 0 0 0 .1 0l.7-.7.2-.1.5-.5.7-.7.6-.7.6-1.1.4-.8.7-.1h.2v-.2l-.2-.1v-.2h-.2l-.1-.4.3-1c.2-.3.2-.7.3-1l.1-1V9.3l-.2-1.2-.3-1-.5-1.2-1.1-1.7-.9-1-.5-.5a14 14 0 0 0-1.8-1.3l-.7-.3c-.2-.1-.5-.3-.8-.3H17l-.6-.3-.8-.2-.9-.2-1-.1h-2zm.7 1H14l.7.2 1.6.4.9.4 1.9.9.4.4.7.7.6.8.6.7.2.3.4.6.2.5.2.7.2.6v.9h.1V9.5l.1.1.1.8v.8-.3h-.1v.4h.1v.6l-.1-.1V12.3a.2.2 0 0 0 .1 0V12.6l-.1.7v.5l-.1.4V14h-.2v.6l-.2.2.1.2.1-.5v.7-.1.1l-.3-.4a82 82 0 0 1-.7-.9 2 2 0 0 1-.1-.2l-.8-1.3-.7-1-.6-.8-.2-.3-.6-1-.6-.8-.2-.3V6.7H17c-.1 0-.2 0-.3-.2l-.8-1-.8-1.1-.6-.9-.7-1-1-1.1c0-.2-.2-.4-.4-.6zm-.7.4.7.8.5.7.5.7.6 1 1 1.3.6 1h-3.1c-.7.2-1.3.2-2 .2H7.3l.8-1 .2-.3v-.1l.2-.1v-.2h.1l.2-.2A5.6 5.6 0 0 0 9 5l.1-.2v-.1a4.6 4.6 0 0 1 .2-.3l.3-.4v.1l.3-.3h-.2l.2-.3.1.1.1-.1H10l.1-.2.5-.7.2-.2.6-.8.1-.2zM9.3 4.5l-.2.1v.2l.2-.2zM16 8h.2l.2.4V11v-.3L16 10l-.4-.7-.2-.2c-.2-.2-.3-.4-.6-.5a6.6 6.6 0 0 0-1-.5l-.2-.2h2.5zm-6 .2h.1l-.4.2-.4.3L9 9l-.5.5c0 .2-.2.3-.3.4l-.4.6V8.2H9l.9-.1h.1zm2 .4h1a3 3 0 0 1 .8.5l.6.5c.3 0 .5.3.6.5l.5.8v.5c.1.1.2.2.1.3V12.5l-.3.7v.2-.1.3l-.4.8-.2.4-.3.3-.2.3-.7.4-.5.2-.7.2H11c-.2 0-.4 0-.7-.2l-.6-.3-.5-.3c0-.2-.2-.3-.4-.4a.4.4 0 0 0 .2.2h-.2v-.4a6.8 6.8 0 0 1-.3-.3l-.1-.2-.2-.3-.2-.4.1.6V14h-.2l.2.5v.1l.2.2.2.3.2.3c.1.2.2.3.3.2 0 .2.3.3.3.4a3.7 3.7 0 0 1-.2 0l.3.1.2.2.4.2.6.2H7.9v-1.6L7.7 14v-1.6H8.2V12l.1-.2v-.4h.1v-.3c.2 0 .1-.2.2-.2v-.1c.1 0 0-.2.2-.2v-.1.2-.3a.5.5 0 0 0 .2 0L9 10l.2-.2h.1l.4-.4h.1v-.2h.1v.1l.3-.2H10l.4-.2.9-.3h.2l.4-.2a.7.7 0 0 1 .2 0zm-.3.1-.3.1v.1h.2v-.2zm5.8 1.4.2.3.7 1 .5.8.7 1 .5.7.5.7.4.5.5.7.2.3.2.2c.1.1.1.2 0 .2 0 .1-.1 0-.2 0h-2.6l-.4.1h-1.1a.4.4 0 0 1-.1 0v-1.3a.7.7 0 0 1 .1 0V14.8v.2s.2 0 0-.1v-1c-.2 0-.1-.1-.2-.3h.2l-.1-.1V12v.2-.4zM4 10.7l-.3.3.3-.3zm-.6.4-.2.2h.1l.2-.2zm0 0zm.2 0-.2.2v.1l-.2.1v.1l-.2.2.2-.2.1-.1v.2l-.1.1-.2.1-.2.2-.2.3s.1 0 0 0c.2.1.2 0 .2 0v-.1l.3-.2.2-.4.2-.2c0 .2-.2.3-.3.4h.1l.3-.4v-.1.1h-.1v-.1l.1-.2zm14 1zm0 0a.2.2 0 0 0 0 .2v-.1zm0 .2zm0 0v.1zm0 .1zm-1.2 1.4c0 1 .1 1.9.3 2.8h-2.8c.3 0 .6-.3 1-.5v-.2c.4-.2.6-.5.9-.8l.6-1.2zm1.2.1zm0 0zM1.1 14H1l.1.3V14zm-.3.3v.2-.2zm21.7 0v.1zm-21.2.2h-.1l.2.5-.1-.5zM1 15H.9h.2zm7.5.3.2.4-.2-.3v-.1zm9 .4v.3c.2-.2 0-.2 0-.3zM3.5 20.2l.3.3h-.2l-.1-.3zm.3.3v.1-.1zm15.5 1.2H19v.2l.2-.2zm-.5.3-.2.1.3-.1zm-4 1.5h-.5.6zm-.5 0v.1l-.4.1h-.1c0 .1 0 0 .1 0l-.5.1h.2-.9l1.6-.2zm-1.7.3a4.4 4.4 0 0 1-.4 0h.4z" />
    </svg>
  );
};
