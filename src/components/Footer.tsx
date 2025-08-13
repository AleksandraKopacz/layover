import Link from "next/link";
import { FaYoutube, FaSpotify, FaTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer">
      <p className="socials">
        <Link
          style={{ paddingRight: "1rem" }}
          target="_blank"
          href="https://youtube.com/playlist?list=OLAK5uy_kNOuQThHGWJNos0pyFpQ8OMmsvlB5QeaA&si=2j9ECQF-jCZAs5EI"
        >
          <FaYoutube />
        </Link>
        <Link
          style={{ paddingRight: "1rem" }}
          target="_blank"
          href="https://open.spotify.com/album/7ixOAT89NSsgUITYc5ByB5?si=oneFYTnFQ7OdSUp6rcatDA"
        >
          <FaSpotify />
        </Link>
        <Link
          style={{ paddingRight: "1rem" }}
          target="_blank"
          href="https://x.com/bts_bighit"
        >
          <FaTwitter />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/bts.bighitofficial/"
        >
          <FaInstagram />
        </Link>
      </p>
      <p className="credits">
        Website design by{" "}
        <Link
          style={{ fontStyle: "italic" }}
          target="_blank"
          href="https://github.com/AleksandraKopacz"
        >
          Aleksandra Kopacz
        </Link>
      </p>
    </footer>
  );
}
