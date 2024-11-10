import { Email } from "@/icons/contacts/Email";
import { Github } from "@/icons/contacts/Github";
import { Instagram } from "@/icons/contacts/Instagram";
import { LinkedIn } from "@/icons/contacts/LinkedIn";
import { Telegram } from "@/icons/contacts/Telegram";
import { YouTube } from "@/icons/contacts/YouTube";
import { ContactInfo } from "@/types/contactInfo";

export const CONTACTS: ContactInfo[] = [
  {
    contactLogo: LinkedIn,
    contactText: "LinkedIn",
    contactLink: "https://www.linkedin.com/in/airadavometra/",
  },
  {
    contactLogo: Github,
    contactText: "GitHub",
    contactLink: "https://github.com/airadavometra",
  },
  {
    contactLogo: Email,
    contactText: "E-mail",
    contactValue: "airadavometra@gmail.com",
  },
  {
    contactLogo: Telegram,
    contactText: "Telegram",
    contactLink: "https://t.me/airadavometra",
  },
  {
    contactLogo: Instagram,
    contactText: "Instagram",
    contactLink: "https://www.instagram.com/airadavometra/",
  },
  {
    contactLogo: YouTube,
    contactText: "YouTube",
    contactLink: "https://www.youtube.com/user/dbelaya15/featured",
  },
];
