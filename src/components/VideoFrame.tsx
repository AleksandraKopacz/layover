import { useEffect } from "react";

export default function VideoFrame({ id }: { id: string }) {
    useEffect(() => {}, [id])
  return (
    <div className="container">
      <iframe
        className="musicVideo"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <img className="mvFrame" src="assets/pictures/frame.png" alt="Frame" />
    </div>
  );
}
