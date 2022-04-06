import classNames from "classnames";
import React, { FC, useState } from "react";
import classes from "./Tooltip.module.css";
import { motion } from "framer-motion";
import { mobileTooltipVariants, tooltipVariants } from "@/motions/portfolio";
import { useMedia } from "react-use";

type TooltipProps = {
  text: string;
};

export const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  const [show, setShow] = useState(false);
  const isSmall = useMedia("(max-width: 768px)");

  return (
    <div className={classes.tooltipContainer}>
      {show && (
        <motion.div
          className={classNames(classes.tooltipBox)}
          variants={isSmall ? mobileTooltipVariants : tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text}
        </motion.div>
      )}
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
