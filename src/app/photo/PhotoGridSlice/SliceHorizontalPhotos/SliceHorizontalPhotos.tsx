import { PhotoInfo } from "@/types/photoInfo";
import { FC } from "react";
import s from "./SliceHorizontalPhotos.module.css";
import { Photo } from "../Photo/Photo";

type SliceHorizontalPhotosProps = {
  horizontalPhotos: PhotoInfo[];
};

export const SliceHorizontalPhotos: FC<SliceHorizontalPhotosProps> = ({
  horizontalPhotos,
}) => {
  return (
    <div className={s.pattern}>
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
