export default function NotFound() {
  return (
    <main>
      <div>
        <video autoPlay muted loop id="backgroundVideo">
          <source src="assets/video/yeontan.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="layover">
        <p className="layoverTitle">404</p>
        <p className="layoverSubtitle">Page not found</p>
      </div>
    </main>
  );
}
