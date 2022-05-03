import { NavigationItem } from "@/types/navigationItem";
import { toggleFreezePage } from "@/utils/toggleFreezePage";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import { PageHead } from "../PageHead/PageHead";
import s from "./Layout.module.css";
import { AnimatePresence } from "framer-motion";

const navigation: NavigationItem[] = [
  { id: 1, title: "About me", path: "/" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "Photo", path: "/photo" },
  { id: 4, title: "Video", path: "/video" },
  { id: 5, title: "Contact", path: "/contact" },
];

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
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
    toggleFreezePage();
  };
  const closeMenu = () => {
    setMenuOpen(false);
    toggleFreezePage();
  };

  return (
    <>
      <PageHead />
      <div className={s.layout}>
        <Header
          navigation={navigation}
          onOpenMenu={openMenu}
          selectedMenuItemId={selectedMenuItemId}
        />
        <div className={s.pageContainer} key={router.pathname}>
          {children}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isMenuOpen && (
          <MobileMenu
            navigation={navigation}
            selectedMenuItemId={selectedMenuItemId}
            onCloseMenu={closeMenu}
            onMenuItemClick={(path: string) => {
              router.push(path);
              closeMenu();
            }}
            isOpen={isMenuOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
