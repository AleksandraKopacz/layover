import { Suspense } from "react";
import Loading from "../loading";

export default function Tracklist() {
  return (
    <Suspense fallback={<Loading />}>
    <div>
        COMING SOON
    </div>
    </Suspense>
  );
}