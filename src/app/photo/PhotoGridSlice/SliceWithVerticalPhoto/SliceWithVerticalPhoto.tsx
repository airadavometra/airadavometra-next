import { PhotoInfo } from "@/types/photoInfo";
import classNames from "classnames";
import React, { FunctionComponent } from "react";
import s from "./SliceWithVerticalPhoto.module.css";
import { Photo } from "../Photo/Photo";

type SliceWithVerticalPhotoProps = {
  verticalPhoto: PhotoInfo;
  horizontalPhotos: PhotoInfo[];
  verticalPhotoPosition: "left" | "middle" | "right";
};

export const SliceWithVerticalPhoto: FunctionComponent<
  SliceWithVerticalPhotoProps
> = ({ verticalPhoto, horizontalPhotos, verticalPhotoPosition }) => {
  return (
    <div className={s.pattern}>
      <Photo
        containerClassName={s[verticalPhotoPosition]}
        photoClassName={s.verticalPhoto}
        src={verticalPhoto.bigPath}
        photoId={verticalPhoto.photoId}
        alt={verticalPhoto.alt}
      />
      {horizontalPhotos.map((photo) => (
        <Photo
          key={photo.photoId}
          photoClassName={s.horizontalPhoto}
          src={photo.bigPath}
          photoId={photo.photoId}
          alt={photo.alt}
        />
      ))}
    </div>
  );
};
