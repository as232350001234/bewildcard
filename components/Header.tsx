import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/65 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm">
      <div className="container h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-sm md:text-base">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black text-white shadow-sm">W</span>
          WildCard
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <Link href="#features" className="hover:text-neutral-900">功能</Link>
          <Link href="#faq" className="hover:text-neutral-900">常见问题</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="inline-flex h-8 items-center rounded-full bg-white/90 px-3 text-xs font-medium text-neutral-800 shadow-sm ring-1 ring-black/5 hover:bg-white">
            登录/注册
          </Link>
          <Link href="#cta" className="btn btn-primary h-8 px-4 text-sm">立即体验</Link>
        </div>
      </div>
      <div className="pointer-events-none h-px w-full bg-black/5" />
    </header>
  );
}
