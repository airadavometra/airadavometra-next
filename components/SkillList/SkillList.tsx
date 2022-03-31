import { SkillInfo } from "@/types/skillInfo";
import React, { FunctionComponent } from "react";
import { SkillItem } from "../SkillItem/SkillItem";
import s from "./SkillList.module.css";

type SkillListProps = {
  skillInfoArray: SkillInfo[];
};

export const SkillList: FunctionComponent<SkillListProps> = ({
  skillInfoArray,
}) => {
  return (
    <>
      {skillInfoArray.map((item, index) => (
        <SkillItem
          key={index}
          className={s.skillsItem}
          skillName={item.skillName}
          skillLogos={item.skillLogos}
        />
      ))}
    </>
  );
};
