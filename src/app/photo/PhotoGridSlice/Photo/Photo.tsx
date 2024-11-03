"use client";

import { FC } from "react";
import s from "./Photo.module.css";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { photoContainerVariants, photoVariants } from "@/motions/photo";
import { WithClassName } from "@/types/withClassName";

type PhotoItemProps = {
  src: string;
  photoId: number;
  //onClick(photoId: number): void;
} & WithClassName;

export const Photo: FC<PhotoItemProps> = ({
  className,
  src,
  photoId,
  //onClick,
}) => {
  return (
    <motion.div
      className={classNames(s.photoOuterContainer, className)}
      variants={photoContainerVariants}
      whileHover={photoContainerVariants.hover}
    >
      <motion.div
        className={classNames(s.photoContainer, className)}
        variants={photoVariants}
        whileHover="hover"
        layoutId={photoId.toString()}
      >
        <Image
          // onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
          onContextMenu={(e) => e.preventDefault()}
          src={src}
          // onClick={() => onClick(photoId)}
          alt="photo"
          loading="lazy"
          quality={100}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </motion.div>
  );
};
