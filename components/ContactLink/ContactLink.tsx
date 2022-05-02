import { ContactInfo } from "@/types/contactInfo";
import React, { FunctionComponent, useState } from "react";
import s from "./ContactLink.module.css";
import { motion } from "framer-motion";
import { contactLinkVariants } from "@/motions/contactPage";
import { Popover } from "../Popover/Popover";

type ContactLinkProps = {
  contact: ContactInfo;
};

export const ContactLink: FunctionComponent<ContactLinkProps> = ({
  contact: {
    contactLogo: Logo,
    contactLink: link,
    contactText: text,
    contactValue: value,
  },
}) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  return link ? (
    <motion.a
      className={s.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={contactLinkVariants}
      whileHover={contactLinkVariants.hover}
    >
      <Logo className={s.linkLogo} />
      <p className={s.linkText}>{text}</p>
    </motion.a>
  ) : value ? (
    <Popover text="E-mail is copied to clipboard!" isShown={showPopover}>
      <motion.button
        className={s.link}
        variants={contactLinkVariants}
        whileHover={contactLinkVariants.hover}
        onClick={() => {
          setShowPopover(true);
          navigator.clipboard.writeText(value);
          setTimeout(() => setShowPopover(false), 3000);
        }}
      >
        <Logo className={s.linkLogo} />
        <p className={s.linkText}>{text}</p>
      </motion.button>
    </Popover>
  ) : null;
};
