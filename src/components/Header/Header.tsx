"use client";

import s from "./Header.module.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuItemVariants } from "@/motions/header";
import { NAVIGATION } from "@/constants/navigation";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <header className={s.header}>
        <nav>
          <ul className={s.navigation}>
            {NAVIGATION.map(({ title, path }) => (
              <motion.li
                key={path}
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
        <MobileMenu />
      </header>
    </>
  );
};
