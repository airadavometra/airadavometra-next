import { ExperienceInfo } from "@/types/experienceInfo";
import React, { FunctionComponent } from "react";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import s from "./ExperienceList.module.css";
import { motion } from "framer-motion";
import { experienceTitleVariants } from "@/motions/portfolio";

type ExperienceListProps = {
  experienceInfoArray: ExperienceInfo[];
};

export const ExperienceList: FunctionComponent<ExperienceListProps> = ({
  experienceInfoArray,
}) => {
  return (
    <div>
      <motion.div
        className={s.title}
        variants={experienceTitleVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Experience
      </motion.div>
      <motion.ul className={s.experienceList}>
        {experienceInfoArray.map((item, index) => (
          <motion.li
            className={s.experienceItem}
            key={index}
            variants={experienceTitleVariants}
            initial={experienceTitleVariants.hidden}
            animate={{
              ...experienceTitleVariants.visible,
              transition: {
                delay: 0.5 + index * 0.5,
                type: "tween",
                duration: 0.7,
                ease: "easeOut",
              },
            }}
            exit="exit"
          >
            <ExperienceItem
              isOpen={item.isOpen}
              year={item.year}
              title={item.title}
              text={item.text}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
