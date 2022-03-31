import React, { FunctionComponent } from "react";
import s from "./FullScreenImg.module.css";
import { ClosePhoto } from "@/icons/ClosePhoto";
import { Next } from "@/icons/Next";
import { Previous } from "@/icons/Previous";
import { PhotoInfo } from "@/types/photoInfo";

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
      <div className={s.closeButton}>
        <button className={s.button} onClick={() => onCloseClick()}>
          <ClosePhoto />
        </button>
      </div>
      <div className={s.photoContainer}>
        <button
          className={s.button}
          onClick={() => onMoveClick(img.photoId - 1)}
        >
          <Previous />
        </button>
        <img
          className={s.photo}
          src={img.bigPath}
          alt="Photo"
          onContextMenu={(e) => e.preventDefault()}
        />
        <button
          className={s.button}
          onClick={() => onMoveClick(img.photoId + 1)}
        >
          <Next />
        </button>
      </div>
    </div>
  );
};
