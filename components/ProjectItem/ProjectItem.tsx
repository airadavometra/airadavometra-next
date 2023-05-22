import React, { FunctionComponent } from "react";
import s from "./ProjectItem.module.css";
import classNames from "classnames";
import { ProjectInfo } from "@/types/projectInfo";
import Image from "next/image";
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
  return (
    <motion.div
      className={s.main}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      exit="exit"
    >
      <motion.a
        className={s.titleSmall}
        href={projectInfo.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        variants={projectLinkVariants}
        whileHover="hover"
      >
        {projectInfo.projectName}
      </motion.a>
      <section className={s.imageContainer}>
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
        <motion.a
          className={s.titleBig}
          href={projectInfo.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          variants={projectLinkVariants}
          whileHover="hover"
        >
          {projectInfo.projectName}
        </motion.a>
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
