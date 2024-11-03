import { WidthContainer } from "@/components/WidthContainer/WidthContainer";
import s from "./page.module.css";
import { DownloadCvButton } from "./DownloadCvButton/DownloadCvButton";
import { SkillList } from "./SkillList/SkillList";
import { CareerTimeline } from "./CareerTimeline/CareerTimeline";

export default function PortfolioPage() {
  return (
    <WidthContainer className={s.widthContainer}>
      <section className={s.downloadCv}>
        <DownloadCvButton />
      </section>
      <div className={s.skillsAndExperience}>
        <CareerTimeline />
        <SkillList />
      </div>
    </WidthContainer>
  );
}
