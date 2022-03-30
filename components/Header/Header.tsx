import { MenuIcon } from "@/icons/MenuIcon";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import s from "./Header.module.css";

export type Navigation = {
  id: number;
  title: string;
  path: string;
};

const navigation: Navigation[] = [
  { id: 1, title: "About me", path: "/" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "Photo", path: "/photo" },
  { id: 4, title: "Video", path: "/video" },
  { id: 5, title: "Contact", path: "/contact" },
];

const Header: FC = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<number>(1);

  useEffect(() => {
    const selectedMenuItem = navigation.find(
      (nav) => nav.path === router.pathname
    );
    if (selectedMenuItem) {
      setSelectedMenuItemId(selectedMenuItem.id);
    } else {
      setSelectedMenuItemId(0);
    }
  }, [router.pathname]);

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
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
      <button className={s.menuButton} onClick={openMenu}>
        <MenuIcon className={s.menuIcon} />
      </button>
      <MobileMenu
        navigation={navigation}
        selectedMenuItemId={selectedMenuItemId}
        onCloseMenu={closeMenu}
        onMenuItemClick={(path: string) => {
          let fullPath = path;
          if (queryRootId) {
            fullPath = `${fullPath}?root=${queryRootId}`;
          }
          router.push(fullPath);
          closeMenu();
        }}
        isOpen={isMenuOpen}
      />
    </header>
  );
};

export default Header;
