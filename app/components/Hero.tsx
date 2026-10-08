import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative flex min-h-[65vh] w-full items-center justify-center overflow-hidden bg-black lg:min-h-screen">
      <Image
        src="/home/hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <p
          className="text-[18px] leading-relaxed font-medium text-white sm:text-[22px]"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}
        >
          At Smart Marketing Technologies, we provide advanced marketing solutions tailored to
          your unique needs. Our innovative strategies ensure your business reaches its full
          potential.
        </p>

        <a
          href="#"
          className="mt-9 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-[16px] font-medium text-slate-900 shadow-lg transition-colors hover:bg-slate-100"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
