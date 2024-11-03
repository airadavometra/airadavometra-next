"use client";

import s from "./SkillList.module.css";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants/skills";

export const SkillList = () => {
  return (
    <section className={s.skillSection}>
      <h1 className={s.sectionTitle}>Skills</h1>
      <ul className={s.skillList}>
        {SKILLS.map((item) => (
          <li className={s.skillItem} key={item.skillName}>
            <h2 className={s.skillTitle}>{item.skillName}</h2>
            <ul className={s.iconList}>
              {item.skillLogos.map(({ logo: Logo, logoAlt }) => (
                <motion.li
                  key={logoAlt}
                  className={s.iconWrapper}
                  whileHover={{
                    rotate: [0, -2, 0, 2, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 0.3,
                    },
                  }}
                >
                  <Logo className={s.icon} />
                </motion.li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
