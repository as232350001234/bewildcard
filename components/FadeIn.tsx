"use client";
import React, { PropsWithChildren } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  className?: string;
  delay?: number;
};

export default function FadeIn({ children, className, delay = 0 }: PropsWithChildren<Props>) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity .6s ease, transform .6s ease",
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(12px)",
      }}
    >
      {children}
    </div>
  );
}
