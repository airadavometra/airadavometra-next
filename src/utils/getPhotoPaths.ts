import { PhotoInfo } from "@/types/photoInfo";

export const getPhotoPaths = (
  amount: number
): { verticalPhotos: PhotoInfo[]; horizontalPhotos: PhotoInfo[] } => {
  const bigPath = "/photos/big/";
  const mediumPath = "/photos/medium/";
  const smallPath = "/photos/small/";

  const verticalPhotos: PhotoInfo[] = [];
  const horizontalPhotos: PhotoInfo[] = [];

  let verticalCount = 0;
  let horizontalCount = 0;
  let totalCount = 0;

  const verticalAmountInTemplate = 3;
  const horizontalAmountInTemplate = 18;
  const totalAmountInTemplate =
    verticalAmountInTemplate + horizontalAmountInTemplate;

  for (let i = 0; i < amount / totalAmountInTemplate; i++) {
    for (let j = 0; j < verticalAmountInTemplate; j++) {
      verticalPhotos.push({
        bigPath: `${bigPath}v/${verticalCount}.jpg`,
        mediumPath: `${mediumPath}v/${verticalCount}.jpg`,
        smallPath: `${smallPath}v/${verticalCount}.jpg`,
        photoId: totalCount,
        isVertical: true,
      });
      verticalCount++;
      totalCount++;
      for (
        let j = 0;
        j < horizontalAmountInTemplate / verticalAmountInTemplate;
        j++
      ) {
        horizontalPhotos.push({
          bigPath: `${bigPath}h/${horizontalCount}.jpg`,
          mediumPath: `${mediumPath}h/${horizontalCount}.jpg`,
          smallPath: `${smallPath}h/${horizontalCount}.jpg`,
          photoId: totalCount,
          isVertical: false,
        });
        horizontalCount++;
        totalCount++;
      }
    }
  }

  return { verticalPhotos, horizontalPhotos };
};
