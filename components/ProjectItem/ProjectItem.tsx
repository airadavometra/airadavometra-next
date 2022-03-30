import React, { FunctionComponent } from "react";
import classes from "./ProjectItem.module.css";
import { LinkIcon } from "@/icons/LinkIcon";
import { Github } from "@/icons/contacts/Github";
import classNames from "classnames";
import { ProjectInfo } from "@/types/projectInfo";
import Image from "next/image";

export interface ProjectItemProps {
  projectInfo: ProjectInfo;
}

export const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  projectInfo,
}) => {
  return (
    <div className={classes.main}>
      <section className={classes.imageContainer}>
        <div className={classes.linksContainer}>
          <a
            className={classNames(classes.link)}
            href={projectInfo.projectGithubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className={classNames(classes.link)}
            href={projectInfo.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Project
          </a>
        </div>
        <Image src={projectInfo.projectPic} alt={projectInfo.projectName} />
      </section>
      <section className={classes.descriptionContainer}>
        <div className={classes.title}>{projectInfo.projectName}</div>
        <div className={classes.description}>{projectInfo.projectDesc}</div>
      </section>
    </div>
  );
};
