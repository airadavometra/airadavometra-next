import { MainPageLink } from "@/components/MainPageLink/MainPageLink";
import s from "./page.module.css";
import { WidthContainer } from "@/components/WidthContainer/WidthContainer";
import Image from "next/image";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";

export default function HomePage() {
  return (
    <WidthContainer>
      <VisuallyHidden>
        <h1>About me</h1>
      </VisuallyHidden>
      <section className={s.section}>
        <div className={s.description}>
          <p className={s.boldText}>
            <span className={s.bigText}>Hey. I&apos;m Daria,</span>
            <br />
            a passionate web developer <br />
            and accessibility advocate.
          </p>
          <p>
            My main focus now is digital accessibility — not just meeting
            requirements but creating experiences that feel welcoming for
            everyone. I believe an empathetic approach and strong fundamentals
            are the key to truly user-friendly solutions.
          </p>
          <p>
            Outside work, I&apos;m enjoying indie game development with my
            partner, crafting hand-drawn game assets. It&apos;s a lot of fun and
            a constant learning adventure.
          </p>
          <div className={s.linksContainer}>
            <MainPageLink type="primary" href="/portfolio">
              See my portfolio
            </MainPageLink>
            <MainPageLink type="secondary" href="/contact">
              Contact me
            </MainPageLink>
          </div>
        </div>
        <div className={s.pictureWrapper}>
          <Image
            src="/myPhoto.webp"
            width={0}
            height={0}
            sizes="100vw"
            className={s.picture}
            alt="Daria's photo"
            aria-hidden
          />
        </div>
      </section>
    </WidthContainer>
  );
}
