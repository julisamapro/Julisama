import Image from "next/image";

const Portfolio = ({ content, design, global }) => {
  if (!content) return null;

  return (
    <section
      id="portfolio"
      className={`min-h-screen relative py-32 px-6 ${design?.bgColor || ""}`}
    >
      <div className="max-w-7xl mx-auto relative z-10 pb-16">
        <div className="text-center" data-aos="fade-in" data-aos-offset="0">
          <span className={`block mb-4 ${design?.subtitle}`}>
            {content.subtitle}
          </span>
          <h2 className={`mb-12 md:mb-24 ${design?.title}`}>{content.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 px-4 md:px-12 mt-12 md:mt-24">
          <div className="flex flex-col gap-12 md:gap-32">
            {content.items.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-offset="0"
                // On supprime le délai sur mobile pour que l'apparition soit immédiate
                data-aos-delay={
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? "0"
                    : "0"
                }
              >
                <div
                  className={`relative overflow-hidden aspect-4/5 mb-8 ${design?.imageWrapper} ${global?.imageRadius || "rounded-none"}`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 flex items-center justify-center ${design?.imagePlaceholder}`}
                    >
                      IMAGE {index + 1}
                    </div>
                  )}

                  <div
                    className={`absolute bottom-6 inset-x-6 p-6 z-20 flex flex-col justify-center translate-y-6 opacity-0 pointer-events-none md:pointer-events-auto md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] ${design?.textBoxWrapper}`}
                  >
                    <p className={design?.textBoxText}>{item.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className={design?.itemTitle}>{item.title}</h3>
                  <p className={`mt-2 ${design?.itemCategory}`}>
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-12 md:gap-32 md:pt-32">
            {content.items.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay={
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? "200"
                    : "0"
                }
              >
                <div
                  className={`relative overflow-hidden aspect-4/5 mb-8 ${design?.imageWrapper} ${global?.imageRadius || "rounded-none"}`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 flex items-center justify-center ${design?.imagePlaceholder}`}
                    >
                      IMAGE {index + 3}
                    </div>
                  )}

                  <div
                    className={`absolute bottom-6 inset-x-6 p-6 z-20 flex flex-col justify-center translate-y-6 opacity-0 pointer-events-none md:pointer-events-auto md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] ${design?.textBoxWrapper}`}
                  >
                    <p className={design?.textBoxText}>{item.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className={design?.itemTitle}>{item.title}</h3>
                  <p className={`mt-2 ${design?.itemCategory}`}>
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
