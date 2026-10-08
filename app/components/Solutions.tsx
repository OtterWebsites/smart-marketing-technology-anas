import Image from "next/image";

const cards = [
  {
    img: "/home/solution-1.webp",
    title: "Data-Driven Analysis",
    desc: "Utilize comprehensive data-driven analysis to make informed marketing decisions and optimize your strategies for maximum impact.",
  },
  {
    img: "/home/solution-2.webp",
    title: "Social Media Campaigns",
    desc: "Create engaging social media campaigns that captivate your audience and drive meaningful interactions with your brand.",
  },
  {
    img: "/home/solution-1.webp",
    title: "Data-Driven Analysis",
    desc: "Utilize comprehensive data-driven analysis to make informed marketing decisions and optimize your strategies for maximum impact.",
  },
];

export default function Solutions() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-16">
          <h2 className="text-[26px] font-semibold tracking-tight text-white">
            Our Marketing Solutions
          </h2>
          <p className="text-[16px] leading-relaxed text-neutral-400">
            Discover the range of advanced marketing solutions we offer to help your business
            thrive. From targeted digital advertising to engaging social media campaigns, our
            services are designed to maximize your market reach and enhance revenue.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={`${card.title}-${i}`}
              className="flex flex-col overflow-hidden rounded-lg bg-neutral-900"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[15px] font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-400">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1 text-[12px] font-medium text-white underline underline-offset-2"
                >
                  Learn More <span aria-hidden>&rsaquo;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
