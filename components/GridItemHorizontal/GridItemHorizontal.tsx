import { PhotoInfo } from "@/types/photoInfo";
import React, { FunctionComponent } from "react";
import { useMedia } from "react-use";
import { PhotoItem } from "../PhotoItem/PhotoItem";
import s from "./GridItemHorizontal.module.css";

type GridItemHorizontalProps = {
  imgPaths: PhotoInfo[];
  onClick(imgId: number): void;
};

export const GridItemHorizontal: FunctionComponent<GridItemHorizontalProps> = ({
  imgPaths,
  onClick,
}) => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <div className={s.main}>
      {imgPaths.map((item) => (
        <PhotoItem
          cssClassNames={s.horizontalImg}
          src={isMobile ? item.mediumPath : item.bigPath}
          key={item.photoId}
          imgId={item.photoId}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
