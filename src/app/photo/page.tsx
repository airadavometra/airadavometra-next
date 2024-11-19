import s from "./page.module.css";
import { HORIZONTAL_PHOTOS, VERTICAL_PHOTOS } from "@/constants/photos";
import { PhotoGridSlice } from "@/app/photo/PhotoGridSlice/PhotoGridSlice";
import { Metadata } from "next";
import { FullScreenGallery } from "./FullScreenGallery/FullScreenGallery";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";

export const metadata: Metadata = {
  title: "Daria Artemova - Photo gallery",
};

export default function PhotoPage() {
  const numberOfGroups =
    (VERTICAL_PHOTOS.length + HORIZONTAL_PHOTOS.length) / 21;

  return (
    <>
      <VisuallyHidden>
        <h1>Photo gallery</h1>
      </VisuallyHidden>
      <section className={s.section}>
        {Array(numberOfGroups)
          .fill("")
          .map((_, index) => (
            <PhotoGridSlice
              key={index}
              verticalPhotos={VERTICAL_PHOTOS.slice(index * 3, index * 3 + 3)}
              horizontalPhotos={HORIZONTAL_PHOTOS.slice(
                index * 18,
                index * 18 + 18
              )}
            />
          ))}
      </section>
      <FullScreenGallery />
    </>
  );
}
