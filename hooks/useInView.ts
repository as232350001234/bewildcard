import { useEffect, useRef, useState } from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInView<T extends HTMLElement>(opts: Options = { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            observer.unobserve(e.target);
          }
        });
      },
      {
        root: opts.root ?? null,
        rootMargin: opts.rootMargin ?? "0px 0px -10% 0px",
        threshold: opts.threshold ?? 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts.root, opts.rootMargin, opts.threshold]);

  return { ref, inView };
}
