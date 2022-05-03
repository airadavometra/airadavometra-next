import { SkillLogo } from "@/types/skillLogo";
import React, { FunctionComponent } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import s from "./SkillItem.module.css";
import { AnimatePresence, motion } from "framer-motion";

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
          <Tooltip key={index} text={logoAlt}>
            <AnimatePresence initial={false}>
              <motion.div
                className={s.iconContainer}
                whileHover={{
                  rotate: [0, -2, 0, 2, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 0.3,
                  },
                }}
              >
                <Logo className={s.icon} />
              </motion.div>
            </AnimatePresence>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
