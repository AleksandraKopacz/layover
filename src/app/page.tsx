import { Suspense } from "react";
import Loading from "./loading";
import CenterText from "@/components/CenterText";
import VideoBG from "@/components/VideoBG";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <VideoBG videoName="layover.mp4" />
      <CenterText title="Layover" subtitle="V of BTS first solo album" />
    </Suspense>
  );
}
