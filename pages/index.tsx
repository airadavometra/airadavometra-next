import type { NextPage } from "next";
import s from "@/pagesStyles/MainPage.module.css";
import Image from "next/image";
import photo from "@/public/myPhoto.webp";

const Home: NextPage = () => {
  return (
    <div className={s.main}>
      <div className={s.description}>
        <h2 className={s.textHeader}>Hi. I’m Daria.</h2>
        <p className={s.text}>
          A holistic software developer
          <br /> and photography enthusiast located in Moscow, Russia.
          <br /> Sometimes I’m also a traveller.
        </p>
      </div>
      <div className={s.pictureWrapper}>
        <Image
          src={photo}
          layout="fill"
          objectFit="contain"
          objectPosition="right bottom"
          alt="My photo"
        />
      </div>
    </div>
  );
};

export default Home;
