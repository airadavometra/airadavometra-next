import { PhotoInfo } from "@/types/photoInfo";
import React, { FunctionComponent } from "react";
import { GridItemHorizontal } from "../GridItemHorizontal/GridItemHorizontal";
import {
  GridItemVertical,
  VerticalImgPosition,
} from "../GridItemVertical/GridItemVertical";
import s from "./GridTemplate.module.css";

type GridTemplateProps = {
  verticalPhotos: PhotoInfo[];
  horizontalPhotos: PhotoInfo[];
  onClick(imgId: number): void;
};

export const GridTemplate: FunctionComponent<GridTemplateProps> = ({
  horizontalPhotos,
  verticalPhotos,
  onClick,
}) => {
  return (
    <div className={s.main}>
      <GridItemVertical
        verticalImg={verticalPhotos[0]}
        horizontalPhotos={horizontalPhotos.slice(0, 4)}
        verticalImgPosition={VerticalImgPosition.Left}
        onClick={onClick}
      />
      <GridItemHorizontal
        imgPaths={horizontalPhotos.slice(4, 6)}
        onClick={onClick}
      />
      <GridItemVertical
        verticalImg={verticalPhotos[1]}
        horizontalPhotos={horizontalPhotos.slice(6, 10)}
        verticalImgPosition={VerticalImgPosition.Middle}
        onClick={onClick}
      />
      <GridItemHorizontal
        imgPaths={horizontalPhotos.slice(10, 12)}
        onClick={onClick}
      />
      <GridItemVertical
        verticalImg={verticalPhotos[2]}
        horizontalPhotos={horizontalPhotos.slice(12, 16)}
        verticalImgPosition={VerticalImgPosition.Right}
        onClick={onClick}
      />
      <GridItemHorizontal
        imgPaths={horizontalPhotos.slice(16, 18)}
        onClick={onClick}
      />
    </div>
  );
};
