import { VIDEO_LINKS } from "@/constants/videoLinks";
import s from "./page.module.css";
import { VideoItem } from "@/components/VideoItem/VideoItem";

export default function Contact() {
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
