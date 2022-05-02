import React, { FunctionComponent, useState } from "react";
import s from "./PhotoItem.module.css";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { photoContainerVariants, photoVariants } from "@/motions/photo";
import { Spinner } from "../Spinner/Spinner";

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
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  return (
    <motion.div
      className={classNames(s.photoOuterContainer, cssClassNames)}
      variants={photoContainerVariants}
      whileHover={photoContainerVariants.hover}
    >
      <motion.div
        className={classNames(s.photoContainer, cssClassNames)}
        variants={photoVariants}
        whileHover="hover"
      >
        {showPlaceholder && (
          <div className={s.placeholder}>
            <Spinner />
          </div>
        )}
        <Image
          onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
          onContextMenu={(e) => e.preventDefault()}
          src={src}
          onClick={() => onClick(imgId)}
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
