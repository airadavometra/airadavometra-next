import React, { FC } from "react";
import { ContactLink } from "../ContactLink/ContactLink";
import s from "./ContactList.module.css";
import { ContactInfo } from "@/types/contactInfo";
import { motion } from "framer-motion";

type ContactListProps = {
  contacts: ContactInfo[];
};

export const ContactList: FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className={s.contactsContainer}>
      <motion.h2
        className={s.title}
        initial={{ x: "10vw", y: "-10vh", opacity: 0, scale: 1.5 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{
          delay: 1.5,
          type: "tween",
          duration: 1.3,
          ease: "easeOut",
        }}
      >
        You can reach me here
      </motion.h2>
      <motion.ul className={s.contacts}>
        {contacts.map((item, index) => (
          <motion.li
            className={s.contactItem}
            key={index}
            initial={{ x: "10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 2.5 + index * 0.5,
              type: "tween",
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <ContactLink contact={item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
