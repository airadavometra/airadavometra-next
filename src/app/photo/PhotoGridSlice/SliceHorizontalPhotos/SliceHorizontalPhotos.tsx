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
      {horizontalPhotos.map((item) => (
        <Photo
          key={item.photoId}
          photoClassName={s.horizontalPhoto}
          src={item.bigPath}
          photoId={item.photoId}
        />
      ))}
    </div>
  );
};
