import s from "@/pagesStyles/Contact.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Email } from "@/icons/contacts/Email";
import { Github } from "@/icons/contacts/Github";
import { Instagram } from "@/icons/contacts/Instagram";
import { LinkedIn } from "@/icons/contacts/LinkedIn";
import { Telegram } from "@/icons/contacts/Telegram";
import { YouTube } from "@/icons/contacts/YouTube";
import type { NextPage } from "next";
import { ContactList } from "@/components/ContactList/ContactList";
import { ContactInfo } from "@/types/contactInfo";

const myCoords = [55.752068564993, 37.61748330508703];

const skillInfoArray: ContactInfo[] = [
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
    contactValue: "airadavometra@yandex.ru",
    //contactLink: "mailto:airadavometra@yandex.ru?",
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

const ContactPage: NextPage = () => {
  return (
    <div className={s.main}>
      <div className={s.mapContainer}>
        <YMaps key={"en_US"} query={{ lang: "en_US" }}>
          <Map
            className={s.map}
            defaultState={{
              center: myCoords,
              zoom: 4,
            }}
            options={{
              suppressMapOpenBlock: true,
              suppressObsoleteBrowserNotifier: true,
            }}
          >
            <Placemark
              geometry={myCoords}
              options={{
                iconColor: "#f7c003",
                preset: "islands#circleDotIcon",
              }}
            />
          </Map>
        </YMaps>
      </div>
      <ContactList contacts={skillInfoArray} />
    </div>
  );
};

export default ContactPage;
