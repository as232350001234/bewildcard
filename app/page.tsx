import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
import dynamic from "next/dynamic";
const Sticker = dynamic(() => import("@/components/Sticker"), { ssr: false });

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full" />
        </div>
        <div className="container py-[var(--hero-pad)] text-center relative">
          <h1 className="text-[44px] md:text-[64px] font-extrabold leading-tight tracking-tight">
            WildCard
            <br />
            轻松订阅
          </h1>
          <p className="mt-3 text-[40px] md:text-[56px] font-extrabold text-brand-600">
            OpenAI API
          </p>
          <div className="mt-7 flex items-center justify-center gap-4">
            <Link href="#" className="btn btn-primary h-12 px-6 text-lg">
              立即体验
            </Link>
            <Link href="#faq" className="btn btn-secondary h-12 px-6 text-lg">
              常见问题
            </Link>
          </div>

          <Sticker x="8%" y="8%" rotate={-12} opacity={0.95} />
          <Sticker x="18%" y="22%" rotate={8} opacity={0.9} />
          <Sticker x="72%" y="12%" rotate={5} opacity={0.95} />
          <Sticker x="86%" y="28%" rotate={-6} opacity={0.9} />
          <Sticker x="14%" y="56%" rotate={-8} opacity={0.85} />
          <Sticker x="78%" y="54%" rotate={10} opacity={0.85} />

          {/* Stickers */}
          {/* Using generic gradient W stickers as placeholders to match layout without external assets */}
        </div>

        {/* Positioned stickers around hero */}
        {/* top-left cluster */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="absolute inset-0">
          {/* import component inline to avoid dynamic issues in app dir */}
        </div>
      </section>

      <section className="container py-16">
        <div className="rounded-3xl bg-white p-6 md:p-10 shadow-sm">
          <div className="text-2xl font-semibold">WildCard 功能卡片示意</div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold">
                  W
                </div>
                <div className="mt-4 text-lg font-semibold">优势 {i + 1}</div>
                <p className="mt-2 text-sm text-neutral-600">
                  与原站版式、留白、色彩接近的占位内容，稍后替换为精确文案与图形。
                </p>
              </div>
            ))}
          </div>
        </div>
      <section className="container py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/10">
            <div className="text-sm text-brand-600 font-semibold">收费标准</div>
            <div className="mt-2 text-3xl font-bold">$11.99 <span className="text-base font-medium text-neutral-500">/ 1年</span></div>
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
