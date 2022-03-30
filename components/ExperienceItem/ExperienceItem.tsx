import React, { FunctionComponent, useState } from "react";
import s from "./ExperienceItem.module.css";
import classNames from "classnames";
import { ExpandIcon } from "@/icons/ExpandIcon";
import classnames from "classnames";

export interface ExperienceItemProps {
  text: string;
  title: string;
  year: string;
  isOpen: boolean;
}

export const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({
  text,
  title,
  year,
  isOpen,
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <>
      <button className={s.titleButton} onClick={() => setOpen(!open)}>
        <div className={classNames(s.titleContainer)}>
          <h2 className={classNames(s.year)}>{year}</h2>
          <h2 className={classNames(s.title)}>{title}</h2>
        </div>
        <ExpandIcon
          className={classNames(s.expandBtn, {
            [s.collapse]: !open,
          })}
        />
      </button>
      <p className={classNames(s.text, { [s.hiddenText]: !open })}>{text}</p>
    </>
  );
};
