import s from "./page.module.css";
import { VIDEO_LINKS } from "@/constants/videoLinks";
import { VideoItem } from "@/app/video/VideoItem/VideoItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daria Artemova - Photo gallery",
};

export default function VideoPage() {
  return (
    <section className={s.section}>
      <ul className={s.videoList}>
        {VIDEO_LINKS.map((videoLink, index) => (
          <li key={index}>
            <VideoItem src={videoLink} />
          </li>
        ))}
      </ul>
    </section>
  );
}