import { Burger } from "@/icons/Burger";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import s from "./Header.module.css";
import { motion } from "framer-motion";

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

  const { root } = router.query;
  const queryRootId = root ? (Array.isArray(root) ? root[0] : root) : undefined;

  return (
    <header className={s.header}>
      <motion.nav
        className={s.navigation}
        initial={{ x: "150vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          duration: 1.3,
          ease: "easeOut",
        }}
      >
        {navigation.map(({ id, title, path }) => {
          let fullPath = path;
          if (queryRootId) {
            fullPath = `${fullPath}?root=${queryRootId}`;
          }
          return (
            <Link key={id} href={fullPath}>
              <a
                className={classNames(s.link, {
                  [s.selected]: id === selectedMenuItemId,
                })}
              >
                {title}
              </a>
            </Link>
          );
        })}
      </motion.nav>
      <button className={s.menuButton} onClick={onOpenMenu}>
        <Burger className={s.menuIcon} />
      </button>
    </header>
  );
};

export default Header;
