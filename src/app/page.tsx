import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>Catinhos</p>
        <Link
          style={{
            textDecoration: "underline",
            color: "green",
          }}
          href="https://open.spotify.com/playlist/1pPLLyWGAPTCxTTRC02zAV?si=a82d0623b07c4aa4&pt=5fbe432e9ed1aea92de4d2b07afad2cb"
        >
          Link --> playlist clika
        </Link>
      </div>
    </main>
  );
}
