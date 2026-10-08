const projects = [
  {
    title: "Project Alpha",
    desc: "Increased client engagement by 50% through targeted social media campaigns.",
  },
  {
    title: "Project Beta",
    desc: "Boosted online sales by 30% with data-driven digital advertising strategies.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-black pb-20">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-16">
          <h2 className="text-[26px] font-semibold tracking-tight text-white">
            Our Success Stories
          </h2>
          <p className="text-[16px] leading-relaxed text-neutral-400">
            Discover how Smart Marketing Technology has helped businesses across various
            industries achieve remarkable results. Our case studies demonstrate our commitment
            to delivering tailored marketing solutions that drive success.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title}>
              <h3 className="text-[18px] font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
