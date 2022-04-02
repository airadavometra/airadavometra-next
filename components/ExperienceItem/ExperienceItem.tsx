import React, { FunctionComponent, useState } from "react";
import s from "./ExperienceItem.module.css";
import classNames from "classnames";
import { Expand } from "@/icons/Expand";
import { motion, AnimatePresence } from "framer-motion";

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
  const [open, setOpen] = useState(isOpen);

  return (
    <>
      <button className={s.titleButton} onClick={() => setOpen(!open)}>
        <div className={classNames(s.titleContainer)}>
          <h2 className={classNames(s.year)}>{year}</h2>
          <h2 className={classNames(s.title)}>{title}</h2>
        </div>
        {
          //TODO вращающаяся анимация на клик
        }
        <motion.div whileTap={{ rotate: 180 }}>
          <Expand
            className={classNames(s.expandBtn, {
              [s.collapse]: !open,
            })}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            className={classNames(s.text)}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
};
