import { Burger } from "@/icons/Burger";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";
import s from "./Header.module.css";
import { motion } from "framer-motion";
import { photoVariants } from "@/motions/openAboutPage";
import { mapVariants } from "@/motions/openContactPage";

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

  const variants = useMemo(() => {
    return router.pathname === "/"
      ? photoVariants
      : router.pathname === "/contact"
      ? mapVariants
      : router.pathname === "/video"
      ? photoVariants
      : router.pathname === "/portfolio"
      ? photoVariants
      : photoVariants;
  }, []);

  return (
    <header className={s.header}>
      <motion.nav
        className={s.navigation}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a
              className={classNames(s.link, {
                [s.selected]: id === selectedMenuItemId,
              })}
            >
              {title}
            </a>
          </Link>
        ))}
      </motion.nav>
      <button className={s.menuButton} onClick={onOpenMenu}>
        <Burger className={s.menuIcon} />
      </button>
    </header>
  );
};

export default Header;
