import { Suspense } from "react";
import Loading from "../loading";
import VideoBG from "@/components/VideoBG";

export default function Tracklist() {
  return (
    <Suspense fallback={<Loading />}>
      <VideoBG videoName="background.mp4" />
      <div id="layover">
        <p className="layoverTitle">Coming soon...</p>
      </div>
    </Suspense>
  );
}