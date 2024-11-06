"use client";

import s from "./CareerTimeline.module.css";
import { CAREER_TIMELINE } from "@/constants/careerTimeline";
import * as Accordion from "@radix-ui/react-accordion";
import { Expand } from "@/icons/Expand";
import { motion, AnimatePresence } from "framer-motion";
import {
  expandExperienceItem,
  experienceButtonVariants,
} from "@/motions/portfolio";
import { useEffect, useState } from "react";

const AccordionContent = motion.create(Accordion.Content);
const AccordionHeader = motion.create(Accordion.Header);

export const CareerTimeline = () => {
  const [defaultValue, setDefaultValue] = useState<string[]>();

  useEffect(() => {
    setTimeout(() => setDefaultValue([CAREER_TIMELINE[0].title]), 500);
  }, []);

  return (
    <section className={s.section}>
      <h1 className={s.sectionTitle}>Key Points</h1>
      <Accordion.Root
        key={defaultValue ? defaultValue[0] : "accordion"}
        type="multiple"
        defaultValue={defaultValue}
        className={s.experienceList}
      >
        {CAREER_TIMELINE.map((item) => (
          <Accordion.Item
            key={item.title}
            value={item.title}
            className={s.experienceItem}
          >
            <AccordionHeader
              whileHover="hover"
              variants={experienceButtonVariants}
            >
              <Accordion.Trigger className={s.experienceItemTrigger}>
                <span className={s.year}>{item.year}</span>
                <span>{item.title}</span>
                <div className={s.expandBtnWrapper}>
                  <Expand className={s.expandBtn} aria-hidden />
                </div>
              </Accordion.Trigger>
            </AccordionHeader>
            <Accordion.Content>
              <AnimatePresence>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // TODO: fix exit animation, it doesn't work now
                  variants={expandExperienceItem}
                >
                  <p className={s.experienceItemText}>{item.text}</p>
                </motion.div>
              </AnimatePresence>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};
