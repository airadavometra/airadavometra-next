"use client";

import s from "./page.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { MY_COORDINATES } from "@/constants/myCoordinates";
import { WidthContainer } from "@/components/WidthContainer/WidthContainer";
import { CONTACTS } from "@/constants/contacts";
import { ContactLink } from "@/components/ContactLink/ContactLink";

export default function Contact() {
  return (
    <WidthContainer className={s.widthContainer}>
      <section className={s.section}>
        <div className={s.mapContainer}>
          <YMaps key={"en_US"} query={{ lang: "en_US" }}>
            <Map
              //onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
              className={s.map}
              defaultState={{
                center: MY_COORDINATES,
                zoom: 6,
              }}
              options={{
                suppressMapOpenBlock: true,
                suppressObsoleteBrowserNotifier: true,
              }}
            >
              <Placemark
                geometry={MY_COORDINATES}
                options={{
                  iconColor: "#f7c003",
                  preset: "islands#circleDotIcon",
                }}
              />
            </Map>
          </YMaps>
        </div>
        <div className={s.contacts}>
          <h1 className={s.title}>You can reach me here</h1>
          <ul className={s.contactList}>
            {CONTACTS.map((item, index) => (
              <li key={index}>
                <ContactLink contact={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </WidthContainer>
  );
}
