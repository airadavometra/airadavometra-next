import classNames from "classnames";
import React, { FC, useState } from "react";
import classes from "./Tooltip.module.css";
import { motion } from "framer-motion";

type TooltipProps = {
  text: string;
};

export const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={classes.tooltipContainer}>
      {
        //TODO анимация всплывания тултипа из scale 0 в scale 1 из своего угла
      }
      <motion.div
        className={classNames(classes.tooltipBox, {
          [classes.visible]: show,
        })}
      >
        {text}
      </motion.div>
      <div
        className={classes.childrenContainer}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
};
