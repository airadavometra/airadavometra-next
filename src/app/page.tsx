import { MainPageLink } from "@/components/MainPageLink/MainPageLink";
import s from "./page.module.css";
import { WidthContainer } from "@/components/WidthContainer/WidthContainer";
import Image from "next/image";

export default function Home() {
  return (
    <WidthContainer>
      <section className={s.section}>
        <div className={s.description}>
          <p className={s.boldText}>
            <span className={s.bigText}>Hey. I&apos;m Daria,</span>
            <br />
            a passionate web developer <br />
            based in the Netherlands.
          </p>
          <p>
            My main focus is digital accessibility — not just meeting
            requirements but creating solutions that feel welcoming for
            everyone. I&apos;m learning all I can to build a more empathetic
            approach.
          </p>
          <p>
            Outside work, I&apos;ve returned to drawing and am enjoying indie
            game development with my partner, crafting hand-drawn game assets.
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
