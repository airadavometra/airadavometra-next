import React, { FunctionComponent } from "react";
import s from "./FullScreenImg.module.css";
import { Close } from "@/icons/Close";
import { Next } from "@/icons/Next";
import { Previous } from "@/icons/Previous";
import { PhotoInfo } from "@/types/photoInfo";
import classnames from "classnames";
import Image from "next/image";

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
  return (
    <div className={s.main}>
      <button
        className={classnames(s.button, s.closeButton)}
        onClick={() => onCloseClick()}
      >
        <Close className={s.icon} />
      </button>
      <div className={s.photoContainer}>
        <button onClick={() => onMoveClick(img.photoId - 1)}>
          <Previous className={s.icon} />
        </button>
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
        <button onClick={() => onMoveClick(img.photoId + 1)}>
          <Next className={s.icon} />
        </button>
      </div>
    </div>
  );
};
