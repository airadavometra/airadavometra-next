import s from "@/pagesStyles/Photo.module.css";
import type { NextPage } from "next";
import { useState } from "react";
import { toggleFreezePage } from "@/utils/toggleFreezePage";
import { GridTemplate } from "@/components/GridTemplate/GridTemplate";
import { FullScreenImg } from "@/components/FullScreenImg/FullScreenImg";
import { PhotoInfo } from "@/types/photoInfo";
import { GetStaticProps } from "next";
import { getPhotoPaths } from "@/utils/getPhotoPaths";

type PhotoPageProps = {
  verticalPhotos: PhotoInfo[];
  horizontalPhotos: PhotoInfo[];
};

const PhotoPage: NextPage<PhotoPageProps> = ({
  verticalPhotos,
  horizontalPhotos,
}) => {
  const [isBigPhotoOpen, setBigPhotoOpen] = useState<boolean>(false);
  const [bigImgId, setBigImgId] = useState<number>(0);

  const openPhoto = (imgId: number) => {
    if (window.innerWidth > 768) {
      setBigPhotoOpen(true);
      setBigImgId(imgId);
      toggleFreezePage();
    }
  };
  const closePhoto = () => {
    setBigPhotoOpen(false);
    setBigImgId(0);
    toggleFreezePage();
  };
  const changePhoto = (newImgId: number) => {
    if (newImgId == verticalPhotos.length + horizontalPhotos.length) {
      newImgId = 0;
    }
    if (newImgId === -1) {
      newImgId = verticalPhotos.length + horizontalPhotos.length - 1;
    }
    setBigImgId(newImgId);
  };

  return verticalPhotos?.length > 0 && horizontalPhotos?.length > 0 ? (
    <>
      <div className={s.main}>
        {Array(6)
          .fill("")
          .map((_, index) => (
            <GridTemplate
              key={index}
              verticalPhotos={verticalPhotos.slice(index * 3, index * 3 + 3)}
              horizontalPhotos={horizontalPhotos.slice(
                index * 18,
                index * 18 + 18
              )}
              onClick={openPhoto}
            />
          ))}
      </div>
      {isBigPhotoOpen && (
        <FullScreenImg
          img={[...verticalPhotos, ...horizontalPhotos][bigImgId]}
          onCloseClick={closePhoto}
          onMoveClick={changePhoto}
        ></FullScreenImg>
      )}
    </>
  ) : null;
};

export const getStaticProps: GetStaticProps<PhotoPageProps> = () => {
  const photoPaths = getPhotoPaths(126);

  return {
    props: photoPaths,
  };
};

export default PhotoPage;
