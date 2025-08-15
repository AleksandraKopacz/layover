"use client"
import { useState } from "react";

export default function Track({
  title,
  desc,
  fileName,
}: {
  title: string;
  desc: string;
  fileName: string;
}) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="container"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? <p className="trackDesc">{desc}</p> : <p className="trackTitle">{title}</p>}
      <img className="trackBackground" src={fileName} alt={title} />
    </div>
  );
}
