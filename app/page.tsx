import Image from "next/image";
import Link from "next/link";
import Sticker from "@/components/Sticker";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="container py-[var(--hero-pad)] relative">
          <div className="mx-auto rounded-[32px] md:rounded-[40px] bg-[var(--bg)]/90 border border-white/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,.4),0_8px_24px_rgba(15,23,42,.08)] p-6 md:p-12">
            <div className="text-center">
              <h1 className="text-[52px] md:text-[86px] font-extrabold leading-[1.05] tracking-tight text-[var(--ink)]">
                WildCard
                <br />
                轻松订阅
              </h1>
              <p className="mt-2 text-[44px] md:text-[64px] font-extrabold text-brand-600">
                Cursor Pro
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Link href="#" className="btn btn-primary h-14 px-8 text-lg">立即体验</Link>
                <Link href="#faq" className="btn btn-secondary h-14 px-8 text-lg">常见问题</Link>
              </div>
            </div>
            <Sticker x="6%" y="8%" rotate={-12} opacity={0.95} className="scale-75 md:scale-100" />
            <Sticker x="18%" y="24%" rotate={8} opacity={0.9} className="hidden md:block" />
            <Sticker x="70%" y="12%" rotate={5} opacity={0.95} className="hidden md:block" />
            <Sticker x="86%" y="30%" rotate={-6} opacity={0.9} className="hidden md:block" />
            <Sticker x="14%" y="58%" rotate={-8} opacity={0.85} className="scale-75 md:scale-100" />
            <Sticker x="78%" y="56%" rotate={10} opacity={0.85} className="hidden md:block" />
          </div>

          <Sticker x="8%" y="8%" rotate={-12} opacity={0.95} className="scale-75 md:scale-100" />
          <Sticker x="18%" y="22%" rotate={8} opacity={0.9} className="hidden md:block" />
          <Sticker x="72%" y="12%" rotate={5} opacity={0.95} className="hidden md:block" />
          <Sticker x="86%" y="28%" rotate={-6} opacity={0.9} className="hidden md:block" />
          <Sticker x="14%" y="56%" rotate={-8} opacity={0.85} className="scale-75 md:scale-100" />
          <Sticker x="78%" y="54%" rotate={10} opacity={0.85} className="hidden md:block" />
        </div>
      </section>

      <section id="features" className="container py-16">
        <div className="rounded-3xl bg-white p-6 md:p-10 shadow-sm">
          <div className="text-2xl font-semibold">WildCard 功能卡片示意</div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold">W</div>
                <div className="mt-4 text-lg font-semibold">优势 {i + 1}</div>
                <p className="mt-2 text-sm text-neutral-600">与原站版式、留白、色彩接近的占位内容，稍后替换为精确文案与图形。</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/10">
            <div className="text-sm text-brand-600 font-semibold">收费标准</div>
            <div className="mt-2 text-3xl font-bold">
              $11.99 <span className="text-base font-medium text-neutral-500">/ 1年</span>
            </div>
            <div className="mt-1 text-sm text-neutral-600">0 月费</div>
          </div>
          <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/10">
            <div className="text-sm text-brand-600 font-semibold">服务承诺</div>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700 list-disc pl-5">
              <li>ChatGPT 订阅不成功全额退款</li>
              <li>支持全自动订阅 ChatGPT Plus</li>
              <li>可同时订阅 4 个 ChatGPT Plus</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="rounded-3xl bg-white/70 backdrop-blur p-4 border border-black/5">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-80">
            {["OpenAI", "Google", "Apple", "Meta", "X", "Microsoft"].map((name) => (
              <div key={name} className="text-sm md:text-base font-semibold text-neutral-500">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["非常便捷", "几分钟就能用上，流程很顺畅。"],
            ["价格合理", "订阅成本透明，性价比高。"],
            ["客服靠谱", "遇到问题能快速响应并解决。"]
          ].map(([t, d], i) => (
            <div key={i} className="rounded-2xl bg-white p-6 border border-black/10 shadow-sm">
              <div className="text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
              <div className="mt-4 text-xs text-neutral-400">— 用户反馈</div>
            </div>
          ))}
        </div>
      </section>

      <section id="cta" className="container py-20">
        <div className="rounded-3xl bg-white p-10 md:p-16 text-center border border-black/10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-extrabold">马上开始</h2>
          <p className="mt-3 text-neutral-600">轻松订阅海外服务，体验更高效的工作与创作。</p>
          <div className="mt-6">
            <Link href="#" className="btn btn-primary h-12 px-6 text-lg">立即体验</Link>
          </div>
        </div>
      </section>

      <section id="faq" className="container py-16">
        <h2 className="text-3xl font-bold">常见问题</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-2xl bg-white">
          {[
            ["如何开通？", "提交必要信息后即可快速开通。"],
            ["支持哪些服务？", "覆盖 OpenAI 等主流海外服务。"],
            ["如何支付？", "支持便捷、安全的支付方式。"]
          ].map(([q, a], i) => (
            <details key={i} className="group p-6 open:bg-neutral-50">
              <summary className="cursor-pointer list-none text-lg font-medium">{q}</summary>
              <p className="mt-2 text-neutral-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
