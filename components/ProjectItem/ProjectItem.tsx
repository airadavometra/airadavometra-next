import React, { FunctionComponent } from "react";
import s from "./ProjectItem.module.css";
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
  const isTablet = useMedia("(max-width: 1024px)");
  return (
    <div className={s.main}>
      {isTablet && <div className={s.title}>{projectInfo.projectName}</div>}
      <section className={s.imageContainer}>
        <div className={s.linksContainer}>
          <a
            className={classNames(s.link)}
            href={projectInfo.projectGithubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className={classNames(s.link)}
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
          className={s.imageWrapper}
        >
          <Image
            layout="responsive"
            src={projectInfo.projectPic}
            alt={projectInfo.projectName}
          />
        </a>
      </section>
      <section className={s.descriptionContainer}>
        {!isTablet && <div className={s.title}>{projectInfo.projectName}</div>}
        <div className={s.description}>{projectInfo.projectDesc}</div>
      </section>
    </div>
  );
};
