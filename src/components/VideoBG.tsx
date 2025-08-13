export default function VideoBG({ videoName }: { videoName: string }) {
  return (
    <div>
      <video autoPlay muted loop id="backgroundVideo">
        <source src={`assets/video/${videoName}`} type="video/mp4" />
      </video>
    </div>
  );
}
