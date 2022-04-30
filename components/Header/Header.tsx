import { Burger } from "@/icons/Burger";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import s from "./Header.module.css";
import { motion } from "framer-motion";
import { menuItemVariants } from "@/motions/header";

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
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <motion.a
              className={classNames(s.link, {
                [s.selected]: id === selectedMenuItemId,
              })}
              variants={menuItemVariants}
              whileHover={menuItemVariants.hover}
            >
              {title}
            </motion.a>
          </Link>
        ))}
      </nav>
      <button className={s.menuButton} onClick={onOpenMenu}>
        <Burger className={s.menuIcon} />
      </button>
    </header>
  );
};

export default Header;
