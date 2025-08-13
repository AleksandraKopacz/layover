import { Suspense } from "react";
import Loading from "../loading";
import VideoBG from "@/components/VideoBG";
import CenterText from "@/components/CenterText";

export default function Schedule() {
  return (
    <Suspense fallback={<Loading />}>
      <VideoBG videoName="background.mp4" />
      <CenterText title="Coming soon" subtitle="Stay tuned!" />
    </Suspense>
  );
}
