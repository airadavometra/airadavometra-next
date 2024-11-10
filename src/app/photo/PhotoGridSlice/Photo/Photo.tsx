"use client";

import { FC, useCallback } from "react";
import s from "./Photo.module.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { photoContainerVariants, photoVariants } from "@/motions/photo";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import useMediaQuery from "@/hooks/useMediaQuery";

type PhotoItemProps = {
  src: string;
  alt: string;
  photoId: string;
  containerClassName?: string;
  photoClassName: string;
};

export const Photo: FC<PhotoItemProps> = ({
  src,
  alt,
  photoId,
  containerClassName,
  photoClassName,
}) => {
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

  const isMobile = useMediaQuery("(max-width: 48rem)");

  return (
    <motion.div
      className={classNames(
        s.photoOuterContainer,
        containerClassName,
        photoClassName
      )}
      variants={photoContainerVariants}
      whileHover={photoContainerVariants.hover}
    >
      <motion.button
        className={classNames(
          s.photoContainer,
          containerClassName,
          photoClassName
        )}
        variants={photoVariants}
        whileHover="hover"
        onClick={() =>
          router.push(pathname + "?" + createQueryString("id", photoId), {
            scroll: false,
          })
        }
        disabled={isMobile}
      >
        <Image
          className={classNames(s.photo, photoClassName)}
          // onLoad={() => setTimeout(() => setShowPlaceholder(false), 2000)}
          onContextMenu={(e) => e.preventDefault()}
          src={src}
          alt={alt}
          loading="lazy"
          width={0}
          height={0}
          sizes="100vw"
        />
        <VisuallyHidden>Open this photo full screen</VisuallyHidden>
      </motion.button>
    </motion.div>
  );
};
