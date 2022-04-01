import { Burger } from "@/icons/Burger";
import { NavigationItem } from "@/types/navigationItem";
import { toggleFreezePage } from "@/utils/toggleFreezePage";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import s from "./Header.module.css";

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
      <nav className={s.navigation}>
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
      </nav>
      <button className={s.menuButton} onClick={onOpenMenu}>
        <Burger className={s.menuIcon} />
      </button>
    </header>
  );
};

export default Header;
