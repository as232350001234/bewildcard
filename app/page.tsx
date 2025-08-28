import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Sticker from "@/components/Sticker";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="container py-[var(--hero-pad)] relative">
          <FadeIn>
            <div className="mx-auto rounded-[36px] md:rounded-[48px] bg-white/75 backdrop-blur-sm border border-white/70 shadow-[0_20px_60px_rgba(4,9,20,.18)] ring-1 ring-white/40 p-8 md:p-14 z-10 relative">
              <div className="text-center">
              <h1 className="text-[52px] md:text-[86px] font-extrabold leading-[1.05] tracking-tight text-[var(--ink)]">
                WildCard
                <br />
                轻松订阅
              </h1>
              <p className="mt-2 text-[44px] md:text-[64px] font-extrabold text-brand-600">
                OpenAI API
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Link href="#" className="btn btn-primary h-14 px-8 text-lg">立即体验</Link>
                <Link href="#faq" className="btn btn-secondary h-14 px-8 text-lg">常见问题</Link>
              </div>
            </div>
            <>
              <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/amazon.8e082f47fd190e17717d.png" x="6%" y="8%" rotate={-12} opacity={0.95} className="scale-75 md:scale-100" />
              <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/apple.781b714de2311b3c0358.png" x="18%" y="24%" rotate={8} opacity={0.9} className="hidden md:block" />
              <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/claude.622f89215abf1d86f2e4.png" x="70%" y="12%" rotate={5} opacity={0.95} className="hidden md:block" />
              <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/discord.179eb64460f7c216746c.png" x="86%" y="30%" rotate={-6} opacity={0.9} className="hidden md:block" />
              <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/facebook.2c95929eba23324186a4.png" x="14%" y="58%" rotate={-8} opacity={0.85} className="scale-75 md:scale-100" />
              <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/openAI.d5cafebe1ddb401d1cac.png" x="78%" y="56%" rotate={10} opacity={0.85} className="hidden md:block" />
            </>
            </div>
          </FadeIn>

          <>
            <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/github.eb6b2cd9b152e26df29e.png" x="8%" y="8%" rotate={-12} opacity={0.95} className="scale-75 md:scale-100" />
            <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/google.c0a1ffab09641599ec51.png" x="18%" y="22%" rotate={8} opacity={0.9} className="hidden md:block" />
            <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/cursor.facf092aed1594ae59be.png" x="72%" y="12%" rotate={5} opacity={0.95} className="hidden md:block" />
            <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/poe.f7aab7f8d5720ad344c7.png" x="86%" y="28%" rotate={-6} opacity={0.9} className="hidden md:block" />
            <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/facebook.2c95929eba23324186a4.png" x="14%" y="56%" rotate={-8} opacity={0.85} className="scale-75 md:scale-100" />
      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[0,1,2].map((i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="relative rounded-3xl p-[1px]"
                   style={{
                     background: "linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,0) 30%), radial-gradient(120% 120% at 0% 0%, rgba(99,102,241,.45), rgba(59,130,246,.25) 45%, rgba(0,0,0,0) 60%)",
                   }}>
                <div className="rounded-3xl bg-black text-white p-6 md:p-8 min-h-[220px] shadow-[0_12px_30px_rgba(0,0,0,.35)]">
                  <div className="text-sm text-white/60">优势 {i + 1}</div>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">更快更稳的订阅体验</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    按照原站版式与留白构建的黑色卡片三联，带有彩虹晕边与内阴影，滚动入场淡入上移。
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-brand-300">
                    <span className="text-sm">了解更多</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80"><path fill="currentColor" d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364l-1.414-1.414z"/></svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="container py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <FadeIn key={n} delay={i * 80}>
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 border border-black/10 shadow-sm">
                <div className="pointer-events-none absolute -top-6 -left-2 text-[140px] font-extrabold leading-none text-black/5 select-none">
                  {n}
                </div>
                <h3 className="text-xl font-bold tracking-tight">步骤 {n}</h3>
                <p className="mt-3 text-sm text-neutral-600">
                  还原原站“支持全球优质服务”样式的步骤说明，含大号半透明序号与蓝灰背景风格。
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>


            <Sticker src="https://cdn-bewildcard.wildcard.com.cn/static/media/openAI.d5cafebe1ddb401d1cac.png" x="78%" y="54%" rotate={10} opacity={0.85} className="hidden md:block" />
          </>

        </div>
      </section>

      <section id="features" className="container py-16">
        <FadeIn>
          <div className="rounded-3xl bg-white p-6 md:p-10 shadow-sm">
            <div className="text-2xl font-semibold">WildCard 功能卡片示意</div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold">W</div>
                    <div className="mt-4 text-lg font-semibold">优势 {i + 1}</div>
                    <p className="mt-2 text-sm text-neutral-600">与原站版式、留白、色彩接近的占位内容，稍后替换为精确文案与图形。</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/10">
              <div className="text-sm text-brand-600 font-semibold">收费标准</div>
              <div className="mt-2 text-3xl font-bold">
                $11.99 <span className="text-base font-medium text-neutral-500">/ 1年</span>
              </div>
              <div className="mt-1 text-sm text-neutral-600">0 月费</div>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/10">
              <div className="text-sm text-brand-600 font-semibold">服务承诺</div>
              <ul className="mt-2 space-y-1 text-sm text-neutral-700 list-disc pl-5">
                <li>ChatGPT 订阅不成功全额退款</li>
                <li>支持全自动订阅 ChatGPT Plus</li>
                <li>可同时订阅 4 个 ChatGPT Plus</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container py-8">
        <FadeIn>
          <div className="rounded-3xl bg-white/70 backdrop-blur p-4 border border-black/5">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-80">
              {["OpenAI", "Google", "Apple", "Meta", "X", "Microsoft"].map((name, i) => (
                <FadeIn key={name} delay={i * 60}>
                  <div className="text-sm md:text-base font-semibold text-neutral-500">
                    {name}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container py-20">
        <div className="rounded-3xl bg-[#FFF7D6] p-8 md:p-12 border border-black/5">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["非常便捷", "几分钟就能用上，流程很顺畅。"],
              ["价格合理", "订阅成本透明，性价比高。"],
              ["客服靠谱", "遇到问题能快速响应并解决。"]
            ].map(([t, d], i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="rounded-2xl bg-white p-6 border border-black/10 shadow-[0_10px_20px_rgba(0,0,0,.06)]">
                  <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" className="text-yellow-500"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <div className="text-lg font-semibold">{t}</div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">{d}</p>
                  <div className="mt-4 text-xs text-neutral-400">— 用户反馈</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="container py-20">
        <FadeIn>
          <div className="rounded-3xl bg-white p-10 md:p-16 text-center border border-black/10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold">马上开始</h2>
            <p className="mt-3 text-neutral-600">轻松订阅海外服务，体验更高效的工作与创作。</p>
            <div className="mt-6">
              <Link href="#" className="btn btn-primary h-12 px-6 text-lg">立即体验</Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="faq" className="container py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">常见问题</h2>
        </FadeIn>
        <FadeIn delay={80}>
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
        </FadeIn>
      </section>
    </main>
  );
}
