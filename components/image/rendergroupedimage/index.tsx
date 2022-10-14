import React from 'react';

import styles from './rendergroupedimage.module.scss';
import RenderStyledImage from '../renderstyledimage';

export default function RenderGroupImages({
  images = [],
  displayCount = 1,
  imageClassName = '',
}: {
  images?: [];
  displayCount?: number;
  imageClassName?: string;
}) {
  const imagesLeftCount = images.length - displayCount;
  return (
    <section className={styles.multipleimages__wrapper}>
      <div className={styles.multipleimages}>
        {images.slice(displayCount).map((image, index) => (
          <RenderStyledImage
            key={`${image}-${index}`}
            src={image}
            className={imageClassName}
          />
        ))}
      </div>
      <span>+{imagesLeftCount}</span>
    </section>
  );
}
