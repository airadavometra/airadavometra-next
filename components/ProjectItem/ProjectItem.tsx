import React, { FunctionComponent } from "react";
import classes from "./ProjectItem.module.css";
import { LinkIcon } from "@/icons/LinkIcon";
import { Github } from "@/icons/contacts/Github";
import classNames from "classnames";
import { ProjectInfo } from "@/types/projectInfo";
import Image from "next/image";
import { useMedia } from "react-use";

export interface ProjectItemProps {
  projectInfo: ProjectInfo;
}

export const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  projectInfo,
}) => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <div className={classes.main}>
      {isMobile && (
        <div className={classes.title}>{projectInfo.projectName}</div>
      )}
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
        <a
          href={projectInfo.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.imageWrapper}
        >
          <Image
            layout="responsive"
            src={projectInfo.projectPic}
            alt={projectInfo.projectName}
          />
        </a>
      </section>
      <section className={classes.descriptionContainer}>
        {!isMobile && (
          <div className={classes.title}>{projectInfo.projectName}</div>
        )}
        <div className={classes.description}>{projectInfo.projectDesc}</div>
      </section>
    </div>
  );
};
