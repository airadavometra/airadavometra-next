import { SkillLogo } from "@/types/skillLogo";
import React, { FunctionComponent } from "react";
import s from "./SkillItem.module.css";

type SkillItemProps = {
  skillLogos: SkillLogo[];
  skillName: string;
  className: string;
};

export const SkillItem: FunctionComponent<SkillItemProps> = ({
  skillLogos,
  skillName,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className={s.header}>{skillName}</h2>
      <div className={s.iconsContainer}>
        {skillLogos.map(({ logo: Logo }, index) => (
          <Logo className={s.icon} key={index} />
        ))}
      </div>
    </div>
  );
};
