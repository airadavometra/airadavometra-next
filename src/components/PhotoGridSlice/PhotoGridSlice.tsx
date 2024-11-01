import { FC } from "react";
import s from "./PhotoGridSlice.module.css";
import { PhotoInfo } from "@/types/photoInfo";
import { SliceWithVerticalPhoto } from "./SliceWithVerticalPhoto/SliceWithVerticalPhoto";
import { SliceHorizontalPhotos } from "./SliceHorizontalPhotos/SliceHorizontalPhotos";

type PhotoGridSliceProps = {
  verticalPhotos: PhotoInfo[];
  horizontalPhotos: PhotoInfo[];
  //onClick(photoId: number): void;
};

export const PhotoGridSlice: FC<PhotoGridSliceProps> = ({
  horizontalPhotos,
  verticalPhotos,
  //onClick,
}) => {
  return (
    <div className={s.pattern}>
      <SliceWithVerticalPhoto
        verticalPhoto={verticalPhotos[0]}
        horizontalPhotos={horizontalPhotos.slice(0, 4)}
        verticalPhotoPosition="left"
        //onClick={onClick}
      />
      <SliceHorizontalPhotos
        horizontalPhotos={horizontalPhotos.slice(4, 6)}
        //onClick={onClick}
      />
      <SliceWithVerticalPhoto
        verticalPhoto={verticalPhotos[1]}
        horizontalPhotos={horizontalPhotos.slice(6, 10)}
        verticalPhotoPosition="middle"
        //onClick={onClick}
      />
      <SliceHorizontalPhotos
        horizontalPhotos={horizontalPhotos.slice(10, 12)}
        //onClick={onClick}
      />
      <SliceWithVerticalPhoto
        verticalPhoto={verticalPhotos[2]}
        horizontalPhotos={horizontalPhotos.slice(12, 16)}
        verticalPhotoPosition="right"
        //onClick={onClick}
      />
      <SliceHorizontalPhotos
        horizontalPhotos={horizontalPhotos.slice(16, 18)}
        //onClick={onClick}
      />
    </div>
  );
};
