"use client";

import { FC } from "react";
import s from "./Photo.module.css";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { photoContainerVariants, photoVariants } from "@/motions/photo";

type PhotoItemProps = {
  src: string;
  photoId: number;
  containerClassName?: string;
  photoClassName: string;
  //onClick(photoId: number): void;
};

export const Photo: FC<PhotoItemProps> = ({
  src,
  photoId,
  containerClassName,
  photoClassName,
  //onClick,
}) => {
  return (
    <motion.div
      className={classNames(
        s.photoOuterContainer,
        containerClassName,
        photoClassName
      )}
      variants={photoContainerVariants}
      whileHover={photoContainerVariants.hover}
    >
      <motion.div
        className={classNames(
          s.photoContainer,
          containerClassName,
          photoClassName
        )}
        variants={photoVariants}
        whileHover="hover"
        layoutId={photoId.toString()}
      >
        <Image
          className={classNames(s.photo, photoClassName)}
          // onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
          onContextMenu={(e) => e.preventDefault()}
          src={src}
          // onClick={() => onClick(photoId)}
          alt="photo"
          loading="lazy"
          width={0}
          height={0}
          sizes="100vw"
        />
      </motion.div>
    </motion.div>
  );
};
