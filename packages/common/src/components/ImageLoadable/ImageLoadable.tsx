import React from "react";

type ImageLoadableProps = {
  /** Source props*/
  src: string;
  /** Image alt text*/
  alt: string;
  /** Loader to be displayed*/
  loader: React.ReactNode;
  /** ClassName for image*/
  className?: string;
  loading?: "eager" | "lazy";
};
/**
 * This component displays `props.loadable` while the image is loaded by the browser.
 * @param props Component props
 * @returns Image Loadable React Component
 */
const ImageLoadable = (props: ImageLoadableProps) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  return imageLoaded == false ? (
    <>
      <img
        src={props.src}
        alt={props.alt}
        loading={props.loading}
        style={{ display: "none" }}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
      {props.loader}
    </>
  ) : (
    <img src={props.src} className={props.className} alt={props.alt} />
  );
};
export default ImageLoadable;
export type { ImageLoadableProps };
