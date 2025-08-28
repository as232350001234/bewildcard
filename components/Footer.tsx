export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10">
      <div className="container py-10 text-sm text-neutral-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} WildCard</div>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-80">隐私政策</a>
          <a href="#" className="hover:opacity-80">使用条款</a>
        </div>
      </div>
    </footer>
  );
}
