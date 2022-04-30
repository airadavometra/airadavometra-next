import React, { FunctionComponent } from "react";
import s from "./ProjectItem.module.css";
import classNames from "classnames";
import { ProjectInfo } from "@/types/projectInfo";
import Image from "next/image";
import { useMedia } from "react-use";
import { motion } from "framer-motion";
import {
  projectLinkVariants,
  projectPhotoLinkVariants,
  projectTagsVariants,
} from "@/motions/portfolio";

type ProjectItemProps = {
  projectInfo: ProjectInfo;
};

export const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  projectInfo,
}) => {
  const isSmallScreen = useMedia("(max-width: 1200px)");
  return (
    <motion.div
      className={s.main}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      exit="exit"
    >
      {isSmallScreen && (
        <div className={s.title}>{projectInfo.projectName}</div>
      )}
      <section className={s.imageContainer}>
        <div className={s.linksContainer}>
          <motion.a
            className={classNames(s.link)}
            href={projectInfo.projectGithubLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={projectLinkVariants}
            whileHover="hover"
          >
            Github
          </motion.a>
          <motion.a
            className={classNames(s.link)}
            href={projectInfo.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={projectLinkVariants}
            whileHover="hover"
          >
            Project
          </motion.a>
        </div>
        <motion.a
          href={projectInfo.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={s.imageWrapper}
          variants={projectPhotoLinkVariants}
          whileHover="hover"
        >
          <Image
            layout="responsive"
            src={projectInfo.projectPic}
            alt={projectInfo.projectName}
            placeholder="blur"
          />
        </motion.a>
      </section>
      <section className={s.descriptionContainer}>
        {!isSmallScreen && (
          <div className={s.title}>{projectInfo.projectName}</div>
        )}
        <div className={s.description}>{projectInfo.projectDesc}</div>
        <div className={s.tagsContainer}>
          {projectInfo.projectTechnologies.map((item, index) => (
            <motion.div
              className={s.tag}
              key={index}
              variants={projectTagsVariants}
              initial="offscreen"
              viewport={{ once: true }}
              whileHover="hover"
              whileInView={{
                ...projectTagsVariants.onscreen,
                transition: {
                  delay: index * 0.6,
                  type: "spring",
                  stiffness: 120,
                },
              }}
              exit="exit"
            >
              {`${item}`}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
