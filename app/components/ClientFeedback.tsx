import Image from "next/image";

const reviews = [
  {
    avatar: "/home/emily.webp",
    name: "Emily Johnson",
    role: "CEO, Tech Innovations",
    text: "Smart Marketing Technology transformed our online presence. Their targeted campaigns significantly boosted our engagement!",
  },
  {
    avatar: "/home/michael.webp",
    name: "Michael Smith",
    role: "Marketing Director, Retail Solutions",
    text: "The team at Smart Marketing Technology delivered exceptional results. Our sales increased by 30% within three months!",
  },
  {
    avatar: "/home/david.webp",
    name: "David Brown",
    role: "VP of Sales, Global Enterprises",
    text: "Their innovative strategies helped us reach a wider audience. We couldn't be happier with the results!",
  },
];

const cards = [...reviews, ...reviews];

export default function ClientFeedback() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-[30px] font-bold tracking-tight text-black sm:text-[38px]">
            Client Feedback
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-neutral-600">
            Discover what our clients say about their experiences with Smart Marketing
            Technology. Their success stories inspire us!
          </p>
        </div>
      </div>

      <div className="bg-neutral-100 py-16">
        <div className="mx-auto w-full max-w-[1200px] px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex flex-col rounded-lg bg-[#0d0d0d] p-6"
              >
                <div className="text-[16px] leading-none tracking-[0.2em] text-[#f5b301]">
                  ★★★★★
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-200">{c.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={c.avatar}
                    alt={c.name}
                    width={96}
                    height={96}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[14px] font-semibold text-white">{c.name}</p>
                    <p className="text-[12px] text-neutral-400">{c.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
