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

type ExperienceItemProps = {
  text: string;
  title: string;
  year: string;
  isOpen: boolean;
};

export const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({
  text,
  title,
  year,
  isOpen,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(isOpen), 500);
  }, []);

  return (
    <>
      <AnimatePresence initial={false}>
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
          <AnimatePresence initial={false}>
            <motion.div
              variants={experienceButtonIconVariants}
              className={s.expandBtnContainer}
            >
              <Expand
                className={classNames(s.expandBtn, {
                  [s.collapse]: !open,
                })}
              />
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </AnimatePresence>
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
