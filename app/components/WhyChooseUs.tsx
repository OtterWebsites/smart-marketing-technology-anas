import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-16">
          <h2 className="text-[30px] font-bold tracking-tight text-black sm:text-[38px]">
            Why Choose Us?
          </h2>
          <p className="text-[16px] leading-relaxed text-neutral-700">
            Every business has its unique advantages, and users want to know what sets yours
            apart. This is the ideal place to highlight the reasons why customers should choose
            your services or products. Click on the text box to edit the content and include all
            the compelling details you wish to share.
          </p>
        </div>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200">
          <Image
            src="/home/meeting.webp"
            alt="Why Choose Us"
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
