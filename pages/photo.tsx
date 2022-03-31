import s from "@/pagesStyles/Photo.module.css";
import type { NextPage } from "next";
import { storage } from "@/firebase/config";
import { ref, listAll } from "firebase/storage";
import { useMedia } from "react-use";
import { useEffect, useState } from "react";
import { toggleFreezePage } from "@/utils/toggleFreezePage";
import { GridTemplate } from "@/components/GridTemplate/GridTemplate";
import { FullScreenImg } from "@/components/FullScreenImg/FullScreenImg";
import { PhotoInfo } from "@/types/photoInfo";

const photosAmountTemplate = new Array(6).fill("");

const PhotoPage: NextPage = () => {
  const [isBigPhotoOpen, setBigPhotoOpen] = useState<boolean>(false);
  const [bigImgId, setBigImgId] = useState<number>(0);
  const [photos, setPhotos] = useState<PhotoInfo[]>([]);
  const [verticalPhotos, setVerticalPhotos] = useState<PhotoInfo[]>([]);
  const [horizontalPhotos, setHorizontalPhotos] = useState<PhotoInfo[]>([]);

  const isTablet = useMedia("(max-width: 1024px)");

  useEffect(() => {
    setVerticalPhotos(photos.filter((item) => item.isVertical));
    setHorizontalPhotos(photos.filter((item) => !item.isVertical));
  }, [photos]);

  useEffect(() => {
    let photosFromStorage: PhotoInfo[] = [];
    let photosCounter = 0;

    const verticalUrl = isTablet ? "medium/vertical" : "big/vertical";
    const horizontalUrl = isTablet ? "medium/horizontal" : "big/horizontal";
    const verticalRef = ref(storage, verticalUrl);
    const horizontalRef = ref(storage, horizontalUrl);

    listAll(verticalRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          photosFromStorage.push({
            path: `${itemRef.bucket}/${itemRef.fullPath}`,
            photoId: photosCounter,
            isVertical: true,
          });
          photosCounter++;
        });
      })
      .catch((error) => {
        console.debug(error);
      });

    listAll(horizontalRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          photosFromStorage.push({
            path: `${itemRef.bucket}/${itemRef.fullPath}`,
            photoId: photosCounter,
            isVertical: false,
          });
          photosCounter++;
        });
      })
      .catch((error) => {
        console.debug(error);
      });

    setPhotos(photosFromStorage);
  }, [isTablet]);

  return <></>;
};

export default PhotoPage;
