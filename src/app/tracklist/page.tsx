import { Suspense } from "react";
import Loading from "../loading";
import VideoBG from "@/components/VideoBG";
import Track from "@/components/Track";


export default function Tracklist() {
  return (
    <Suspense fallback={<Loading />}>
      <VideoBG videoName="background.mp4" />
      <div id="containerTracklist">
        <Track fileName="assets/pictures/rainydays.png" title="Rainy Days" desc="In this track, V&apos;s voice melds beautifully with the sound of rain and everyday white noises, tugging at the listeners&apos; heartstrings." />
        <Track fileName="assets/pictures/blue.png" title="Blue" desc="An homage to old school R&B with a modern twist, adding a special flair to the song." />
        <Track fileName="assets/pictures/lovemeagain.png" title="Love Me Again" desc="A light and captivating R&B track with an alluring vibe that lingers long. V&apos;s signature baritone shines through in this track." />
        <Track fileName="assets/pictures/slowdancing.png" title="Slow Dancing" desc="The focus track of this album, a &apos;70s romantic soul style track that exudes a laid-back and free-spirited feeling, just as the title suggests." />
        <Track fileName="assets/pictures/forus.png" title="For Us" desc="A pop R&B track that leaves a lasting impression of the entire album. It serves as an epilogue, stirring up deep emotions with V&apos;s vocals and unique lyrics." />
        <Track fileName="assets/pictures/slowdancingpiano.png" title="Slow Dancing (Piano Ver.)" desc="A piano arrangement of the focus track &quot;Slow Dancing,&quot; which offers a different allure from the original as a bonus track." />
      </div>
    </Suspense>
  );
}
