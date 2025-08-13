import { Suspense } from "react";
import Loading from "../loading";

export default function MV() {
  return (
    <Suspense fallback={<Loading />}>
      <div>COMING SOON</div>
    </Suspense>
  );
}
