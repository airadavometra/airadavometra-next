import { FC } from "react";
import s from "./VideoItem.module.css";

type VideoItemProps = {
  src: string;
};

export const VideoItem: FC<VideoItemProps> = ({ src }) => {
  return (
    <div className={s.videoWrapper}>
      <iframe
        className={s.video}
        src={src}
        // onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
