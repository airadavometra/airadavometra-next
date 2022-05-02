import React, { FunctionComponent, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import s from "./VideoItem.module.css";

type VideoItemProps = {
  src: string;
  index: number;
};

export const VideoItem: FunctionComponent<VideoItemProps> = ({ src }) => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  return (
    <div className={s.main}>
      {showPlaceholder && (
        <div className={s.placeholder}>
          <Spinner />
        </div>
      )}
      <iframe
        className={s.videoItem}
        src={src}
        onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
