export default function Track({
  title,
  subtitle,
  trackNumber,
}: {
  title: string;
  subtitle: string;
  trackNumber: string;
}) {
  return (
    <div id="trackDetails">
      <div className="trackNumbers">
        <p>{trackNumber}</p>
      </div>
      <div className="trackTitles">
        <p className="trackTitle">{title}</p>
        <p className="trackDesc">{subtitle}</p>
      </div>
    </div>
  );
}
