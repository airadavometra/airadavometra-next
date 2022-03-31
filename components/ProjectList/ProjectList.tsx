import { ProjectInfo } from "@/types/projectInfo";
import React, { FunctionComponent } from "react";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import s from "./ProjectList.module.css";

type ProjectListProps = {
  projectInfoArray: ProjectInfo[];
};

export const ProjectList: FunctionComponent<ProjectListProps> = ({
  projectInfoArray,
}) => {
  return (
    <div className={s.main}>
      <div className={s.title}>Projects</div>
      <div className={s.projects}>
        {projectInfoArray.map((item, index) => (
          <ProjectItem projectInfo={item} key={index} />
        ))}
      </div>
    </div>
  );
};
