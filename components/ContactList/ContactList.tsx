import React, { FC } from "react";
import { ContactLink } from "../ContactLink/ContactLink";
import s from "./ContactList.module.css";
import { ContactInfo } from "@/types/contactInfo";
import { motion } from "framer-motion";
import {
  contactListVariants,
  headerVariants,
  mobileContactListVariants,
} from "@/motions/contactPage";
import { useMedia } from "react-use";

type ContactListProps = {
  contacts: ContactInfo[];
};

export const ContactList: FC<ContactListProps> = ({ contacts }) => {
  const isSmall = useMedia("(max-width: 1024px)");
  return (
    <div className={s.contactsContainer}>
      <motion.h2
        className={s.title}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={isSmall ? mobileContactListVariants : headerVariants}
      >
        You can reach me here
      </motion.h2>
      <motion.ul className={s.contacts}>
        {contacts.map((item, index) => (
          <motion.li
            className={s.contactItem}
            key={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={isSmall ? mobileContactListVariants : contactListVariants}
            transition={
              isSmall
                ? undefined
                : {
                    delay: 2.5 + index * 0.5,
                    type: "tween",
                    duration: 0.6,
                    ease: "easeOut",
                  }
            }
          >
            <ContactLink contact={item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
