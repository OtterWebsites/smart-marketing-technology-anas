import Image from "next/image";

const stats = [
  {
    value: "2023 Years in Business",
    desc: "Since our inception in 2020, we have continuously adapted our strategies to meet the evolving needs of our clients, ensuring their long-term success in a dynamic marketplace.",
  },
  {
    value: "100 Clients Served",
    desc: "We have successfully partnered with over 100 clients across various industries, delivering tailored marketing solutions that drive measurable results.",
  },
  {
    value: "30 Team Members",
    desc: "Our team consists of seasoned experts, including data analysts, creative directors, and marketing strategists, all committed to delivering excellence in every project.",
  },
  {
    value: "200 Successful Campaigns",
    desc: "We have executed over 200 successful marketing campaigns, utilizing state-of-the-art strategies to maximize our clients' market reach and enhance their revenue.",
  },
];

export default function Vision() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[360px] overflow-hidden rounded-lg lg:h-[500px]">
            <Image
              src="/home/mid-1.webp"
              alt="Our Vision & Values"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex items-center">
            <div className="max-w-2xl">
              <h2 className="text-[30px] font-bold tracking-tight text-black sm:text-[38px]">
                Our Vision &amp; Values
              </h2>

              <p className="mt-6 text-[17px] leading-relaxed text-neutral-700">
                At Smart Marketing Technologies , we are dedicated to empowering businesses
                through innovative marketing solutions. Our mission is to drive growth and
                enhance market presence by tailoring strategies to meet unique client needs. We
                value innovation, integrity, collaboration, and excellence in all our endeavors.
              </p>

              <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {stats.map((s) => (
                  <div key={s.value}>
                    <h3 className="text-[22px] font-bold tracking-tight text-black sm:text-[24px]">
                      {s.value}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
