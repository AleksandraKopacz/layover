import VideoBG from "@/components/VideoBG";

export default function Loading() {
  return (
    <div>
      <VideoBG videoName="yeontan.mp4" />
      <div id="center">
      <p className="centerTitle">Loading...</p>
    </div>
    </div>
  );
}
