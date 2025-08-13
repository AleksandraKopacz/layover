import Link from "next/link";

export default function Navigation() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/tracklist">TRACKLIST</Link>
        </li>
        <li>
          <Link href="/mv">MUSIC VIDEOS</Link>
        </li>
        <li>
          <Link href="/schedule">SCHEDULE</Link>
        </li>
      </ul>
    </nav>
  );
}
