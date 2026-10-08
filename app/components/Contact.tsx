import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Image
        src="/home/contact%20bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-16 lg:py-24">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-[16px] font-bold text-black">Contact</h3>
            <a
              href="mailto:bamarketing@ba-partners-academy.com"
              className="mt-3 block text-[15px] text-neutral-800 transition-colors hover:text-black hover:underline"
            >
              bamarketing@ba-partners-academy.com
            </a>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-black">Address</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">
              BA MARKETING INC
              <br />
              7345 W SAND LAKE RD STE 210, OF8159
              <br />
              ORLANDO, FL 32819
              <br />
              USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
