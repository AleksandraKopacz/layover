export default function CenterText({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div id="center">
      <p className="centerTitle">{title}</p>
      <p className="centerSubtitle">{subtitle}</p>
    </div>
  );
}
