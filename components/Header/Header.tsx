import { Burger } from "@/icons/Burger";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";
import s from "./Header.module.css";
import { motion } from "framer-motion";
import { photoVariants } from "@/motions/aboutPage";
import { mapVariants } from "@/motions/contactPage";
import { burgerVariants } from "@/motions/header";
import { photoHeaderVariants } from "@/motions/photo";
import { videoHeaderVariants } from "@/motions/video";

type HeaderProps = {
  navigation: NavigationItem[];
  selectedMenuItemId: number;
  onOpenMenu(): void;
};

const Header: FC<HeaderProps> = ({
  navigation,
  selectedMenuItemId,
  onOpenMenu,
}) => {
  const router = useRouter();

  const navVariants = useMemo(() => {
    return router.pathname === "/"
      ? photoVariants
      : router.pathname === "/contact"
      ? mapVariants
      : router.pathname === "/video"
      ? undefined
      : router.pathname === "/portfolio"
      ? photoVariants
      : undefined;
  }, []);
  const linkVariants = useMemo(() => {
    return router.pathname === "/"
      ? undefined
      : router.pathname === "/contact"
      ? undefined
      : router.pathname === "/video"
      ? videoHeaderVariants
      : router.pathname === "/portfolio"
      ? undefined
      : photoHeaderVariants;
  }, []);

  return (
    <header className={s.header}>
      <motion.nav
        className={s.navigation}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {navigation.map(({ id, title, path }, index) => (
          <Link key={id} href={path}>
            <motion.a
              className={classNames(s.link, {
                [s.selected]: id === selectedMenuItemId,
              })}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                delay: 2 + index * 0.3,
                type: "tween",
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {title}
            </motion.a>
          </Link>
        ))}
      </motion.nav>
      <motion.button
        className={s.menuButton}
        onClick={onOpenMenu}
        variants={burgerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Burger className={s.menuIcon} />
      </motion.button>
    </header>
  );
};

export default Header;
