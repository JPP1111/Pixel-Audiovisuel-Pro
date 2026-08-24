"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label }: { label: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#9A9078] hover:text-white transition-colors mb-8"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {label}
    </button>
  );
}
