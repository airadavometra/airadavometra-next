import { SkillLogo } from "@/types/skillLogo";
import React, { FunctionComponent } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
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
        {skillLogos.map(({ logo: Logo, logoAlt }, index) => (
          <Tooltip text={logoAlt} key={index}>
            <Logo className={s.icon} />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
