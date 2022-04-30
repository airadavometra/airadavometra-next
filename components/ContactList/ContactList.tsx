import React, { FC } from "react";
import { ContactLink } from "../ContactLink/ContactLink";
import s from "./ContactList.module.css";
import { ContactInfo } from "@/types/contactInfo";
import { useMedia } from "react-use";

type ContactListProps = {
  contacts: ContactInfo[];
};

export const ContactList: FC<ContactListProps> = ({ contacts }) => {
  const isSmall = useMedia("(max-width: 1024px)");
  return (
    <div className={s.contactsContainer}>
      <h2 className={s.title}>You can reach me here</h2>
      <ul className={s.contacts}>
        {contacts.map((item, index) => (
          <li className={s.contactItem} key={index}>
            <ContactLink contact={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
