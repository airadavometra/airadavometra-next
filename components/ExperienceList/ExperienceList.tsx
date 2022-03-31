import { ExperienceInfo } from "@/types/experienceInfo";
import React, { FunctionComponent } from "react";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import s from "./ExperienceList.module.css";

type ExperienceListProps = {
  experienceInfoArray: ExperienceInfo[];
};

export const ExperienceList: FunctionComponent<ExperienceListProps> = ({
  experienceInfoArray,
}) => {
  return (
    <ul className={s.experienceList}>
      {experienceInfoArray.map((item, index) => (
        <li className={s.experienceItem} key={index}>
          <ExperienceItem
            isOpen={item.isOpen}
            year={item.year}
            title={item.title}
            text={item.text}
          />
        </li>
      ))}
    </ul>
  );
};
