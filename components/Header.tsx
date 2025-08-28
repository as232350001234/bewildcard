import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur border-b border-black/5">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black text-white">W</span>
          WildCard
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#" className="hover:opacity-80">功能</Link>
          <Link href="#faq" className="hover:opacity-80">常见问题</Link>
          <Link href="#" className="btn btn-primary h-9 px-4 text-sm">立即体验</Link>
        </nav>
      </div>
    </header>
  );
}
