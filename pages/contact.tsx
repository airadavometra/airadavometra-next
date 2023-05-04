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
import { useState } from "react";
import { Spinner } from "@/components/Spinner/Spinner";

const myCoords = [52.370882, 4.897449];

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

const ContactPage: NextPage = () => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  return (
    <div className={s.main}>
      <div className={s.mapContainer}>
        {showPlaceholder && (
          <div className={s.placeholder}>
            <Spinner />
          </div>
        )}
        <YMaps key={"en_US"} query={{ lang: "en_US" }}>
          <Map
            onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
            className={s.map}
            defaultState={{
              center: myCoords,
              zoom: 6,
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
