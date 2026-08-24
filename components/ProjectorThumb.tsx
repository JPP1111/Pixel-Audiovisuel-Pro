import Image from "next/image";

function ProjectorIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 text-[#3A4A9C]" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="12" width="40" height="28" rx="2" />
      <circle cx="24" cy="26" r="6" />
      <path d="M4 18h4M40 18h4" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectorThumb({
  image,
  refLabel,
  size = 56,
}: {
  image: string | null;
  refLabel: string;
  size?: number;
}) {
  return (
    <div
      className="flex-shrink-0 rounded-md bg-white/95 border border-[#1a2a8c] flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      {image ? (
        <Image
          src={image}
          alt={refLabel}
          width={size}
          height={size}
          className="object-contain w-full h-full p-1"
        />
      ) : (
        <ProjectorIcon />
      )}
    </div>
  );
}
