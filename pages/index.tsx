import type { NextPage } from "next";
import s from "@/pagesStyles/MainPage.module.css";
import Image from "next/image";
import photo from "@/public/myPhoto.webp";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuItemVariants } from "@/motions/header";

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
          Besides my love for web development, I’m also interested in design,
          especially UX, and I’m working on improving my designer skills.
        </p>
        <p className={s.text}>
          When I’m not coding, you can catch me outside exploring, taking
          photos, flying drone, hiking. I just adore nature and hope someday to
          see the whole world.
        </p>
        <div className={s.btnsContainer}>
          <Link key="portfolio" href="/portfolio">
            <motion.a
              className={s.accentBtn}
              variants={menuItemVariants}
              whileHover={menuItemVariants.hover}
            >
              See my portfolio
            </motion.a>
          </Link>
          <Link key="contacts" href="/contact">
            <motion.a
              className={s.secondaryBtn}
              variants={menuItemVariants}
              whileHover={menuItemVariants.hover}
            >
              Contact me
            </motion.a>
          </Link>
        </div>
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
