import React, { FunctionComponent } from "react";
import s from "./VideoItem.module.css";

type VideoItemProps = {
  src: string;
  index: number;
};

export const VideoItem: FunctionComponent<VideoItemProps> = ({
  src,
  index,
}) => {
  return (
    <div className={s.main}>
      <iframe
        className={s.videoItem}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
