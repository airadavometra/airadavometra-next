import { PhotoInfo } from "@/types/photoInfo";
import { FC } from "react";
import s from "./SliceHorizontalPhotos.module.css";
import { Photo } from "../Photo/Photo";

type SliceHorizontalPhotosProps = {
  horizontalPhotos: PhotoInfo[];
  //onClick(photoId: number): void;
};

export const SliceHorizontalPhotos: FC<SliceHorizontalPhotosProps> = ({
  horizontalPhotos,
  //onClick,
}) => {
  return (
    <div className={s.pattern}>
      {horizontalPhotos.map((item) => (
        <Photo
          key={item.photoId}
          photoClassName={s.horizontalPhoto}
          src={item.bigPath}
          photoId={item.photoId}
          //onClick={onClick}
        />
      ))}
    </div>
  );
};
