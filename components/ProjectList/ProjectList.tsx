import { ProjectInfo } from "@/types/projectInfo";
import React, { FunctionComponent } from "react";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import s from "./ProjectList.module.css";
import { motion } from "framer-motion";
import { projectsTitleVariants } from "@/motions/portfolio";

type ProjectListProps = {
  projectInfoArray: ProjectInfo[];
};

export const ProjectList: FunctionComponent<ProjectListProps> = ({
  projectInfoArray,
}) => {
  return (
    <motion.div
      className={s.main}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      exit="exit"
    >
      <motion.div className={s.title} variants={projectsTitleVariants}>
        Projects
      </motion.div>
      <div className={s.projects}>
        {projectInfoArray.map((item, index) => (
          <ProjectItem projectInfo={item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};
