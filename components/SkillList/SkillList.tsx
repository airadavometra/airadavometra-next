import { SkillInfo } from "@/types/skillInfo";
import React, { FunctionComponent } from "react";
import { SkillItem } from "../SkillItem/SkillItem";
import s from "./SkillList.module.css";
import { motion } from "framer-motion";
import { skillsVariants } from "@/motions/portfolio";

type SkillListProps = {
  skillInfoArray: SkillInfo[];
};

export const SkillList: FunctionComponent<SkillListProps> = ({
  skillInfoArray,
}) => {
  return (
    <motion.section
      className={s.skillsSection}
      variants={skillsVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={s.title}>Skills</div>
      <div className={s.skillsContainer}>
        {skillInfoArray.map((item, index) => (
          <SkillItem
            key={index}
            className={s.skillsItem}
            skillName={item.skillName}
            skillLogos={item.skillLogos}
          />
        ))}
      </div>
    </motion.section>
  );
};
