import { PhotoInfo } from "@/types/photoInfo";
import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { useMedia } from "react-use";
import { PhotoItem } from "../PhotoItem/PhotoItem";
import s from "./GridItemVertical.module.css";

type GridItemVerticalProps = {
  verticalImg: PhotoInfo;
  horizontalPhotos: PhotoInfo[];
  verticalImgPosition: VerticalImgPosition;
  onClick(imgId: number): void;
};
export enum VerticalImgPosition {
  Left = 1,
  Right = 2,
  Middle = 3,
}

export const GridItemVertical: FunctionComponent<GridItemVerticalProps> = ({
  verticalImg,
  horizontalPhotos,
  verticalImgPosition,
  onClick,
}) => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <div className={s.main}>
      <PhotoItem
        cssClassNames={classNames(s.verticalImg, {
          [s.verticalImgLeft]: verticalImgPosition === VerticalImgPosition.Left,
          [s.verticalImgMiddle]:
            verticalImgPosition === VerticalImgPosition.Middle,
          [s.verticalImgRight]:
            verticalImgPosition === VerticalImgPosition.Right,
        })}
        src={isMobile ? verticalImg.mediumPath : verticalImg.bigPath}
        imgId={verticalImg.photoId}
        onClick={onClick}
      />
      {horizontalPhotos.map((item) => (
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
