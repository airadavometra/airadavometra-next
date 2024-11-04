"use client";

import s from "./Map.module.css";
import { MY_COORDINATES } from "@/constants/myCoordinates";
import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";

export const Map = () => {
  return (
    <YMaps key={"en_US"} query={{ lang: "en_US" }}>
      <YMap
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
      </YMap>
    </YMaps>
  );
};
