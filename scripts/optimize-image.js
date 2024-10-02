// This scripts aims to create images at the good size for
// every that is located in src/content/assets and will output them in public/blog/en (or sibling)
// so that they can be used in mdx file for the cover

import { glob } from "glob";
import { join } from "node:path";
import * as sharpX from "sharp";

const sharp = sharpX.default;

const optimizeImages = async () => {
  const images = await glob(
    join(
      process.cwd(),
      "src",
      "content",
      "blog",
      "assets",
      "**",
      "*.{jpg,jpeg}"
    )
  );

  const imagePromises = [];
  images.forEach((path) => {
    const fileNameWithExtension = path.split("/").slice(-1)[0];
    const [, extension] = fileNameWithExtension.split(".");
    const assetPath = path.split("/blog/assets")[1];

    const thumbnailPath = `public/blog${assetPath.replace(
      `.${extension}`,
      `_thumbnail.${extension}`
    )}`;

    const thumbnailPromise = sharp(path)
      .resize({ width: 600 })
      .rotate()
      .jpeg({ mozjpeg: true })
      .toFile(thumbnailPath);

    const coverPath = `public/blog${assetPath.replace(
      `.${extension}`,
      `_cover.${extension}`
    )}`;

    const coverPathPromise = sharp(path)
      .resize({ height: 600 })
      .rotate()
      .jpeg({ mozjpeg: true })
      .toFile(coverPath);

    imagePromises.push(thumbnailPromise);
    imagePromises.push(coverPathPromise);
  });

  await Promise.all(imagePromises);
};

optimizeImages();
