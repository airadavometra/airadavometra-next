import { CloseIcon } from "@/icons/CloseIcon";
import classNames from "classnames";
import { FC } from "react";
import { Navigation } from "../Header/Header";
import s from "./MobileMenu.module.css";

type MobileMenuProps = {
  isOpen: boolean;
  navigation: Navigation[];
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
    <div
      className={classNames(s.menuContainer, {
        [s.closedMenu]: !isOpen,
      })}
    >
      <button onClick={onCloseMenu}>
        <CloseIcon className={s.closeIcon} />
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
    </div>
  );
};

export default MobileMenu;
