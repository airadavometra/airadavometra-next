"use client";

import s from "./FullScreenGallery.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { Close } from "@/icons/Close";
import { Suspense, useCallback, useEffect } from "react";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import classNames from "classnames";
import { Previous } from "@/icons/Previous";
import { Next } from "@/icons/Next";
import { menuItemVariants } from "@/motions/header";
import { PHOTOS_ORDER } from "@/constants/photos";

const FullScreenGalleryInner = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const updateSearchParam = (newPhotoId: string) => {
    router.push(pathname + "?" + createQueryString("id", newPhotoId), {
      scroll: false,
    });
  };

  const photoId = searchParams.get("id");

  const openPreviousPhoto = useCallback(() => {
    if (photoId === null) {
      return;
    }

    const photoIndex = PHOTOS_ORDER.indexOf(photoId);

    const previousPhotoId =
      PHOTOS_ORDER[
        (photoIndex - 1 + PHOTOS_ORDER.length) % PHOTOS_ORDER.length
      ];

    updateSearchParam(previousPhotoId);
  }, [photoId]);

  const openNextPhoto = useCallback(() => {
    if (photoId === null) {
      return;
    }

    const photoIndex = PHOTOS_ORDER.indexOf(photoId);

    const nextPhotoId = PHOTOS_ORDER[(photoIndex + 1) % PHOTOS_ORDER.length];

    updateSearchParam(nextPhotoId);
  }, [photoId]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowLeft":
          openPreviousPhoto();
          break;
        case "ArrowRight":
          openNextPhoto();
          break;
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [router, photoId, openPreviousPhoto, openNextPhoto]);

  if (photoId === null) {
    return null;
  }

  return (
    <Dialog
      transition
      open
      onClose={() =>
        router.push(pathname, {
          scroll: false,
        })
      }
      className={s.dialog}
    >
      <DialogBackdrop className={s.backdrop} />
      <div className={s.panelContainer}>
        <DialogPanel
          className={classNames(s.photoWrapper, {
            [s.horisontal]: photoId.includes("h"),
            [s.vertical]: photoId.includes("v"),
          })}
        >
          <Image
            className={s.photo}
            // onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
            onContextMenu={(e) => e.preventDefault()}
            src={`/photos/big/${photoId}.jpg`}
            alt="photo"
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
          />
          <motion.button
            className={classNames(s.button, s.previous)}
            variants={menuItemVariants}
            whileHover={menuItemVariants.hover}
            onClick={openPreviousPhoto}
          >
            <Previous className={classNames(s.icon, s.previous)} aria-hidden />
            <VisuallyHidden>Open previous photo</VisuallyHidden>
          </motion.button>
          <motion.button
            className={classNames(s.button, s.next)}
            variants={menuItemVariants}
            whileHover={menuItemVariants.hover}
            onClick={openNextPhoto}
          >
            <Next className={classNames(s.icon, s.next)} aria-hidden />
            <VisuallyHidden>Open next photo</VisuallyHidden>
          </motion.button>
          <CloseButton
            className={classNames(s.button, s.close)}
            as={motion.button}
            variants={menuItemVariants}
            whileHover={menuItemVariants.hover}
          >
            <Close className={s.icon} aria-hidden />
            <VisuallyHidden>Close photo gallery</VisuallyHidden>
          </CloseButton>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export const FullScreenGallery = () => {
  return (
    <Suspense>
      <FullScreenGalleryInner />
    </Suspense>
  );
};
