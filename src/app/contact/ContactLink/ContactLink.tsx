"use client";

import { FC } from "react";
import s from "./ContactLink.module.css";
import { ContactInfo } from "@/types/contactInfo";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactLinkVariants } from "@/motions/contactPage";

type ContactLinkProps = {
  contact: ContactInfo;
};

export const ContactLink: FC<ContactLinkProps> = ({
  contact: {
    contactLogo: Logo,
    contactLink: link,
    contactText: text,
    contactValue: value,
  },
}) => {
  return link ? (
    <motion.div
      className={s.linksContainer}
      variants={contactLinkVariants}
      whileHover={contactLinkVariants.hover}
    >
      <Link href={link} className={s.link}>
        <Logo className={s.linkLogo} />
        <p className={s.linkText}>{text}</p>
      </Link>
    </motion.div>
  ) : value ? (
    <motion.button
      className={s.link}
      variants={contactLinkVariants}
      whileHover={contactLinkVariants.hover}
      onClick={() => {
        navigator.clipboard.writeText(value);
      }}
    >
      <Logo className={s.linkLogo} />
      <p className={s.linkText}>{text}</p>
    </motion.button>
  ) : null;
};
