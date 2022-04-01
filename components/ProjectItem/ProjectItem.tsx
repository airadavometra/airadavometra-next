import React, { FunctionComponent } from "react";
import s from "./ProjectItem.module.css";
import classNames from "classnames";
import { ProjectInfo } from "@/types/projectInfo";
import Image from "next/image";
import { useMedia } from "react-use";

type ProjectItemProps = {
  projectInfo: ProjectInfo;
};

export const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  projectInfo,
}) => {
  const isSmallScreen = useMedia("(max-width: 1200px)");
  return (
    <div className={s.main}>
      {isSmallScreen && (
        <div className={s.title}>{projectInfo.projectName}</div>
      )}
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
            placeholder="blur"
          />
        </a>
      </section>
      <section className={s.descriptionContainer}>
        {!isSmallScreen && (
          <div className={s.title}>{projectInfo.projectName}</div>
        )}
        <div className={s.description}>{projectInfo.projectDesc}</div>
        <div className={s.tagsContainer}>
          {projectInfo.projectTechnologies.map((item, index) => (
            <div className={s.tag} key={index}>
              {`${item}`}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
