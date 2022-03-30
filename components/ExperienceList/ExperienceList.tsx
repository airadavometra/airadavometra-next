import { ExperienceInfo } from "@/types/experienceInfo";
import React, { FunctionComponent } from "react";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import classes from "./ExperienceList.module.css";

export interface ExperienceListProps {
  experienceInfoArray: ExperienceInfo[];
}

export const ExperienceList: FunctionComponent<ExperienceListProps> = ({
  experienceInfoArray,
}) => {
  return (
    <ul className={classes.experienceList}>
      {experienceInfoArray.map((item, index) => (
        <li className={classes.experienceItem} key={index}>
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
