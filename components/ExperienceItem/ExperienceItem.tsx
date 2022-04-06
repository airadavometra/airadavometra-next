import React, { FunctionComponent, useEffect, useState } from "react";
import s from "./ExperienceItem.module.css";
import classNames from "classnames";
import { Expand } from "@/icons/Expand";
import { motion, AnimatePresence } from "framer-motion";
import {
  expandExperienceItem,
  experienceButtonIconVariants,
  experienceButtonVariants,
} from "@/motions/portfolio";
import { useMedia } from "react-use";

type ExperienceItemProps = {
  text: string;
  title: string;
  year: string;
  isOpen: boolean;
  isSmall: boolean;
};

export const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({
  text,
  title,
  year,
  isOpen,
  isSmall,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isSmall) {
      setTimeout(() => setOpen(isOpen), 2700);
    } else {
      setTimeout(() => setOpen(isOpen), 1000);
    }
  }, []);

  return (
    <>
      <motion.button
        className={s.titleButton}
        onClick={() => setOpen(!open)}
        whileTap="rotate"
        whileHover="hover"
        exit="exit"
        variants={experienceButtonVariants}
      >
        <div className={classNames(s.titleContainer)}>
          <h2 className={classNames(s.year)}>{year}</h2>
          <h2 className={classNames(s.title)}>{title}</h2>
        </div>
        <motion.div variants={experienceButtonIconVariants}>
          <Expand
            className={classNames(s.expandBtn, {
              [s.collapse]: !open,
            })}
          />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={expandExperienceItem}
          >
            <p className={classNames(s.text)}>{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
