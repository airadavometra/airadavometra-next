import { ContactInfo } from "@/types/contactInfo";
import React, { FunctionComponent } from "react";
import s from "./ContactLink.module.css";

type ContactLinkProps = {
  contact: ContactInfo;
};

export const ContactLink: FunctionComponent<ContactLinkProps> = ({
  contact: { contactLogo: Logo, contactLink: link, contactText: text },
}) => {
  return (
    <a className={s.link} href={link} target="_blank" rel="noopener noreferrer">
      <Logo className={s.linkLogo} />
      <p className={s.linkText}>{text}</p>
    </a>
  );
};
