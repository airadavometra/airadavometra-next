import React, { FunctionComponent } from "react";
import s from "./PhotoItem.module.css";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { photoContainerVariants, photoVariants } from "@/motions/photo";

export interface PhotoItemProps {
  cssClassNames: string;
  src: string;
  imgId: number;
  onClick(imgId: number): void;
}

export const PhotoItem: FunctionComponent<PhotoItemProps> = ({
  cssClassNames,
  src,
  imgId,
  onClick,
}) => {
  return (
    <motion.div
      className={classNames(s.photoOuterContainer, cssClassNames)}
      variants={photoContainerVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        delay: 0.2 + imgId * 0.3,
        type: "tween",
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <motion.div
        className={classNames(s.photoContainer, cssClassNames)}
        variants={photoVariants}
        whileHover="hover"
      >
        <Image
          onContextMenu={(e) => e.preventDefault()}
          src={src}
          onClick={() => onClick(imgId)}
          alt="photo"
          loading="lazy"
          //placeholder="blur" Нельзя нормально использовать с loading="lazy", подумать над генерацией плейсхолдеров, чтобы задать их через ссылки явно
          quality={100}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </motion.div>
  );
};
