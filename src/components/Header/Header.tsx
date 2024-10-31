"use client";

import { useState } from "react";
import s from "./Header.module.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { menuItemVariants } from "@/motions/header";
import { NAVIGATION } from "@/constants/navigation";
import { Burger } from "@/icons/Burger";
import { toggleFreezePage } from "@/utils/toggleFreezePage";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import { WidthContainer } from "../WidthContainer/WidthContainer";

export const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
    toggleFreezePage();
  };

  return (
    <>
      <header className={s.header}>
        <WidthContainer className={s.widthContainer}>
          <nav>
            <ul className={s.navigation}>
              {NAVIGATION.map(({ title, path }) => (
                <motion.li
                  key={path}
                  className={s.linkContainer}
                  variants={menuItemVariants}
                  whileHover={menuItemVariants.hover}
                >
                  <Link
                    href={path}
                    className={classNames(s.link, {
                      [s.selected]: path === pathname,
                    })}
                  >
                    {title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <button className={s.menuButton} onClick={handleToggleMobileMenu}>
            <Burger className={s.menuIcon} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </button>
        </WidthContainer>
      </header>
      <AnimatePresence mode="wait">
        {isMenuOpen && <>Mobile menu open</>}
      </AnimatePresence>
    </>
  );
};
