import type { NextPage } from "next";
import s from "@/pagesStyles/MainPage.module.css";
import Image from "next/image";
import photo from "@/public/myPhoto.webp";
import { motion } from "framer-motion";
import { descriptionVariants, photoVariants } from "@/motions/openAboutPage";

const Home: NextPage = () => {
  return (
    <div className={s.main}>
      <motion.div
        className={s.description}
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className={s.textHeader}>Hey. I’m Daria,</h2>
        <p className={s.text}>
          <b>
            a passionate front-end developer <br /> based in Moscow, Russia.
          </b>
        </p>
        <p className={s.text}>
          Besides my love for web development, I’m also interested in design,
          especially UX, and I’m working on improving my designer skills.
        </p>
        <p className={s.text}>
          I’m currently working with the fine folks in Raiffeisen, but also open
          for freelance. So feel free to contact me, we’ll come up with
          something.
        </p>
        <p className={s.text}>
          When I’m not coding, you can catch me outside exploring, taking
          photos, flying drone, hiking. Or laying on my couch and gaining
          strength. I just adore nature and hope someday to see the whole world.
        </p>
      </motion.div>
      <motion.div
        className={s.pictureWrapper}
        variants={photoVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image
          src={photo}
          layout="responsive"
          objectPosition="right bottom"
          alt="My photo"
        />
      </motion.div>
    </div>
  );
};

export default Home;
