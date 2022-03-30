import { VideoItem } from "@/components/VideoItem/VideoItem";
import s from "@/pagesStyles/Video.module.css";
import type { NextPage } from "next";

const videoLinks: string[] = [
  "https://www.youtube.com/embed/O1P0SegrR8w",
  "https://www.youtube.com/embed/wKEOvMF5R-c",
  "https://www.youtube.com/embed/x7HXwgfPjIg",
  "https://www.youtube.com/embed/qDYJ6ewVQqY",
  "https://www.youtube.com/embed/YeFK_7b9qco",
  "https://www.youtube.com/embed/b0M5ElcKh8I",
  "https://www.youtube.com/embed/aWFmEYVXG-A",
];

const VideoPage: NextPage = () => (
  <div className={s.main}>
    {videoLinks.map((item, index) => (
      <VideoItem key={index} src={item} />
    ))}
  </div>
);

export default VideoPage;
