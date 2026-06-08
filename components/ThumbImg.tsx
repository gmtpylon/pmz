"use client";

export function ThumbImg({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        const frame = (e.currentTarget as HTMLImageElement).parentElement;
        frame?.classList.add("no-img");
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
