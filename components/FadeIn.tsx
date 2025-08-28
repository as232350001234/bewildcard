"use client";
import React, { PropsWithChildren } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  className?: string;
  delay?: number;
  initialInView?: boolean;
};

export default function FadeIn({ children, className, delay = 0, initialInView = false }: PropsWithChildren<Props>) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const visible = initialInView || inView;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity .6s ease, transform .6s ease",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      {children}
    </div>
  );
}
