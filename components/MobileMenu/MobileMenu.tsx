import { Close } from "@/icons/Close";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import { FC } from "react";
import s from "./MobileMenu.module.css";
import { motion } from "framer-motion";
import { menuVariants } from "@/motions/openMobileMenu";

type MobileMenuProps = {
  isOpen: boolean;
  navigation: NavigationItem[];
  onMenuItemClick: (path: string) => void;
  onCloseMenu: () => void;
  selectedMenuItemId: number;
};

const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  navigation,
  selectedMenuItemId,
  onCloseMenu,
  onMenuItemClick,
}) => {
  return (
    <motion.div
      key={Number(isOpen)}
      className={classNames(s.menuContainer)}
      variants={menuVariants}
      initial={false}
      animate="visible"
      exit="exit"
    >
      <button className={s.closeIconButton} onClick={onCloseMenu}>
        <Close className={s.closeIcon} />
      </button>
      <nav className={s.menu}>
        {navigation.map(({ id, title, path }) => (
          <button
            key={id}
            onClick={() => onMenuItemClick(path)}
            className={classNames(s.link, {
              [s.selected]: selectedMenuItemId === id,
            })}
          >
            {title}
          </button>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
