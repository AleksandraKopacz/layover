import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <video autoPlay muted loop id="backgroundVideo">
          <source src="assets/video/layover.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="layover">
        <p className="layoverTitle">Layover</p>
        <p className="layoverSubtitle">V of BTS first solo album</p>
      </div>
    </Suspense>
  );
}
