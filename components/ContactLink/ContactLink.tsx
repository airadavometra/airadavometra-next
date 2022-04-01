import { ContactInfo } from "@/types/contactInfo";
import React, { FunctionComponent } from "react";
import s from "./ContactLink.module.css";
import { motion } from "framer-motion";

type ContactLinkProps = {
  contact: ContactInfo;
};

export const ContactLink: FunctionComponent<ContactLinkProps> = ({
  contact: { contactLogo: Logo, contactLink: link, contactText: text },
}) => {
  return (
    <motion.a
      className={s.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ originX: 0, scale: 1.3 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Logo className={s.linkLogo} />
      <p className={s.linkText}>{text}</p>
    </motion.a>
  );
};
