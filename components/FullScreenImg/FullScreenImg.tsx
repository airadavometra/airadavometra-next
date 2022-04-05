import React, { FunctionComponent } from "react";
import s from "./FullScreenImg.module.css";
import { Close } from "@/icons/Close";
import { Next } from "@/icons/Next";
import { Previous } from "@/icons/Previous";
import { PhotoInfo } from "@/types/photoInfo";
import classnames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { closeButtonVariants, nextButtonVariants } from "@/motions/photo";
import ReactDOM from "react-dom";

type FullScreenImgProps = {
  img: PhotoInfo;
  onCloseClick(): void;
  onMoveClick(imgId: number): void;
};

export const FullScreenImg: FunctionComponent<FullScreenImgProps> = ({
  img,
  onCloseClick,
  onMoveClick,
}) => {
  const container = document.querySelectorAll("div[class*='Layout_layout']")[0];
  return ReactDOM.createPortal(
    <div className={s.main}>
      <motion.button
        className={classnames(s.button, s.closeButton)}
        onClick={() => onCloseClick()}
        variants={closeButtonVariants}
        whileHover="rotate"
      >
        <Close className={s.icon} />
      </motion.button>
      <div className={s.photoContainer}>
        <motion.button
          onClick={() => onMoveClick(img.photoId - 1)}
          variants={nextButtonVariants}
          whileHover="rotate"
        >
          <Previous className={s.icon} />
        </motion.button>
        <div className={s.photo}>
          <Image
            src={img.bigPath}
            alt="Photo"
            onContextMenu={(e) => e.preventDefault()}
            quality={100}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <motion.button
          onClick={() => onMoveClick(img.photoId + 1)}
          variants={nextButtonVariants}
          whileHover="rotate"
        >
          <Next className={s.icon} />
        </motion.button>
      </div>
    </div>,
    container
  );
};
