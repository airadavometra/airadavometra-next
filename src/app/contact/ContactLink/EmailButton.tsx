"use client";

import s from "./ContactLink.module.css";
import { FC, ReactNode } from "react";

type EmailButtonProps = {
  email: string;
  children: ReactNode;
};

export const EmailButton: FC<EmailButtonProps> = ({ email, children }) => {
  return (
    <button
      className={s.link}
      onClick={() => {
        navigator.clipboard.writeText(email);
      }}
    >
      {children}
    </button>
  );
};
