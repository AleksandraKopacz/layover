/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function VideoFrame({ id }: { id: string }) {
  const size = useWindowSize();
  const [width, setWidth] = useState<number>(560);
  const [height, setHeight] = useState<number>(315);
  const [frameWidth, setFrameWidth] = useState<number>(622);
  const [frameHeight, setFrameHeight] = useState<number>(368);
  useEffect(() => {
    if (size.width! <= 620) {
      setWidth(323);
      setHeight(174);
      setFrameWidth(360);
      setFrameHeight(202);
    } else {
      setWidth(560);
      setHeight(315);
      setFrameWidth(622);
      setFrameHeight(368);
    }
  }, [id, size.width]);
  return (
    <div className="container">
      <iframe
        className="musicVideo"
        width={width} // 560/360
        height={height} // 315/203
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <img
        className="mvFrame"
        src="assets/pictures/frame.png"
        alt="Frame"
        width={frameWidth}
        height={frameHeight} /* 622/401, 368/238 */
      />
    </div>
  );
}
