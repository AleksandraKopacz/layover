import { Suspense } from "react";
import Loading from "../loading";
import VideoBG from "@/components/VideoBG";
import Track from "@/components/Track";

export default function Tracklist() {
  return (
    <Suspense fallback={<Loading />}>
      <VideoBG videoName="background.mp4" />
      <div id="containerTracklist">
        <div className="container">
        <Track trackNumber="1." title="Rainy Days" subtitle="In this track, V&apos;s voice melds beautifully with the sound of rain and everyday white noises, tugging at the listeners&apos; heartstrings." />
        <Track trackNumber="2." title="Blue" subtitle="An homage to old school R&B with a modern twist, adding a special flair to the song." />
        <Track trackNumber="3." title="Love Me Again" subtitle="A light and captivating R&B track with an alluring vibe that lingers long. V&apos;s signature baritone shines through in this track." />
        <Track trackNumber="4." title="Slow Dancing" subtitle="The focus track of this album, a &apos;70s romantic soul style track that exudes a laid-back and free-spirited feeling, just as the title suggests." />
        <Track trackNumber="5." title="For Us" subtitle="A pop R&B track that leaves a lasting impression of the entire album. It serves as an epilogue, stirring up deep emotions with V&apos;s vocals and unique lyrics." />
        <Track trackNumber="6." title="Slow Dancing (Piano Ver.)" subtitle="A piano arrangement of the focus track &quot;Slow Dancing,&quot; which offers a different allure from the original as a bonus track" />
      </div></div>
    </Suspense>
  );
}
