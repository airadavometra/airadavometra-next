import type { NextPage } from "next";
import s from "@/pagesStyles/MainPage.module.css";
import Image from "next/image";
import photo from "@/public/myPhoto.webp";

const Home: NextPage = () => {
  return (
    <div className={s.main}>
      <div className={s.description}>
        <h2 className={s.textHeader}>Hey. I’m Daria,</h2>
        <p className={s.text}>
          <b>
            a passionate front-end developer <br /> based in Moscow, Russia.
          </b>
        </p>
        <p className={s.text}>
          Besides my love for development, I am also interested in design,
          especially UX. I may be not really good in it now, and still I'm
          trying.
        </p>
        <p className={s.text}>
          I’m currently working with the fine folks in Raiffeisen, but have
          limited availibility for freelance.
        </p>
        <p className={s.text}>
          When I’m not coding, you can catch me outside exploring, taking
          photos, flying drone, hiking... Or laying on my couch and complaining
          about the lockdown. I just adore nature and hope someday to see the
          whole world.
        </p>
      </div>
      <div className={s.pictureWrapper}>
        <Image
          src={photo}
          layout="responsive"
          objectPosition="right bottom"
          alt="My photo"
        />
      </div>
    </div>
  );
};

export default Home;
