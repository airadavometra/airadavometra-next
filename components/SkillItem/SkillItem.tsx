import { SkillLogo } from "@/types/skillLogo";
import React, { FunctionComponent } from "react";
import classes from "./SkillItem.module.css";

export interface SkillItemProps {
  skillLogos: SkillLogo[];
  skillName: string;
  className: string;
}

export const SkillItem: FunctionComponent<SkillItemProps> = ({
  skillLogos,
  skillName,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className={classes.header}>{skillName}</h2>
      <div className={classes.iconsContainer}>
        {skillLogos.map(({ logo: Logo }, index) => (
          <Logo className={classes.icon} />
        ))}
      </div>
    </div>
  );
};
