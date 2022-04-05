import React, { FunctionComponent } from "react";
import s from "./VideoItem.module.css";
import { motion } from "framer-motion";
import { videoVariants } from "@/motions/video";

type VideoItemProps = {
  src: string;
  index: number;
};

export const VideoItem: FunctionComponent<VideoItemProps> = ({
  src,
  index,
}) => {
  return (
    <motion.div
      className={s.main}
      variants={videoVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        delay: 0.2 + index * 0.5,
        type: "tween",
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <iframe
        className={s.videoItem}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
};
