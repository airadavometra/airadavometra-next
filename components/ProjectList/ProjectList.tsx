import { ProjectInfo } from "@/types/projectInfo";
import React, { FunctionComponent } from "react";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import classes from "./ProjectList.module.css";

export interface ProjectListProps {
  projectInfoArray: ProjectInfo[];
}

export const ProjectList: FunctionComponent<ProjectListProps> = ({
  projectInfoArray,
}) => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>Projects</div>
      <div className={classes.projects}>
        {projectInfoArray.map((item, index) => (
          <ProjectItem projectInfo={item} key={index} />
        ))}
      </div>
    </div>
  );
};
