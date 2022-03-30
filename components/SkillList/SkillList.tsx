import { SkillLogo } from "@/types/skillLogo";
import React, { FunctionComponent } from "react";
import { SkillItem } from "../SkillItem/SkillItem";
import classes from "./SkillList.module.css";

export interface SkillListProps {
  skillInfoArray: SkillInfo[];
}

export type SkillInfo = {
  skillName: string;
  skillLogos: SkillLogo[];
};

export const SkillList: FunctionComponent<SkillListProps> = ({
  skillInfoArray,
}) => {
  return (
    <>
      {skillInfoArray.map((item, index) => (
        <SkillItem
          key={index}
          className={classes.skillsItem}
          skillName={item.skillName}
          skillLogos={item.skillLogos}
        />
      ))}
    </>
  );
};
