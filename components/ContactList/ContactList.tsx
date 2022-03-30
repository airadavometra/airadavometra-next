import React, { FC } from "react";
import { ContactLink } from "../ContactLink/ContactLink";
import classes from "./ContactList.module.css";
import { ContactInfo } from "@/types/contactInfo";

export interface ContactListProps {
  contacts: ContactInfo[];
}

export const ContactList: FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className={classes.contactsContainer}>
      <h2 className={classes.title}>You can reach me here</h2>
      <ul className={classes.contacts}>
        {contacts.map((item, index) => (
          <li className={classes.contactItem}>
            <ContactLink contact={item} key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};
