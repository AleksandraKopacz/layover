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
          <Link href="/mv">VIDEOS</Link>
        </li>
      </ul>
    </nav>
  );
}
