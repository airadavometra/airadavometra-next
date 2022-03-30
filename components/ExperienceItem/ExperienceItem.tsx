import React, { FunctionComponent, useState } from "react";
import classes from "./ExperienceItem.module.css";
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
      <button className={classes.titleButton} onClick={() => setOpen(!open)}>
        <div className={classNames(classes.titleContainer)}>
          <h2 className={classNames(classes.year)}>{year}</h2>
          <h2 className={classNames(classes.title)}>{title}</h2>
        </div>
        <ExpandIcon
          className={classNames(classes.expandBtn, {
            [classes.collapse]: !open,
          })}
        />
      </button>
      <p className={classNames(classes.text, { [classes.hiddenText]: !open })}>
        {text}
      </p>
    </>
  );
};
