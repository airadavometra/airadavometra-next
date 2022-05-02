import classNames from "classnames";
import React, { FC } from "react";
import classes from "./Popover.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { mobileTooltipVariants } from "@/motions/portfolio";

type PopoverProps = {
  text: string;
  isShown: boolean;
};

export const Popover: FC<PopoverProps> = ({ children, text, isShown }) => {
  return (
    <div className={classes.popoverContainer}>
      <AnimatePresence>
        {isShown && (
          <motion.div
            className={classNames(classes.popoverBox)}
            variants={mobileTooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
