import React, { FunctionComponent } from "react";
import s from "./VideoItem.module.css";

export interface VideoItemProps {
  src: string;
}

export const VideoItem: FunctionComponent<VideoItemProps> = ({ src }) => {
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
