import { Suspense } from "react";
import Loading from "../loading";

export default function Schedule() {
  return (
    <Suspense fallback={<Loading />}>
      <div>COMING SOON</div>
    </Suspense>
  );
}
