import { ContactInfo } from "@/types/contactInfo";
import React, { FunctionComponent } from "react";
import classes from "./ContactLink.module.css";

export interface ContactLinkProps {
  contact: ContactInfo;
}

export const ContactLink: FunctionComponent<ContactLinkProps> = ({
  contact: { contactLogo: Logo, contactLink: link, contactText: text },
}) => {
  return (
    <a
      className={classes.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Logo className={classes.linkLogo} />
      <p className={classes.linkText}>{text}</p>
    </a>
  );
};
