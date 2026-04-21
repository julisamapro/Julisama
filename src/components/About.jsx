import Image from "next/image";

const About = ({ content, design, global }) => {
  if (!content) return null;

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center overflow-hidden relative py-32 px-6 ${design?.bgColor || ""}`}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <div className="lg:col-span-5 relative z-10" data-aos="fade-right">
            <span
              className={`block w-12 h-px mb-8 ${design?.lineDecoration}`}
            ></span>

            <h2 className={`mb-4 ${design?.subtitle}`}>{content.subtitle}</h2>
            <h3 className={`mb-8 ${design?.title}`}>{content.title}</h3>

            <div className={`space-y-6 ${design?.textContainer}`}>
              <p>{content.desc1}</p>
              <p>{content.desc2}</p>
            </div>

            <div className={`mt-12 pl-6 ${design?.founderContainer}`}>
              <p className={design?.founderName}>{content.founders}</p>
              <p className={`mt-2 ${design?.founderRole}`}>
                {content.foundersRole}
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-6 lg:col-start-7 relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className={`relative z-10 overflow-hidden aspect-3/4 group ${design?.imageWrapper} ${global?.imageRadius || "rounded-none"}`}
            >
              {content.image ? (
                <Image
                  src={content.image}
                  alt="Portrait"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div
                  className={`absolute inset-0 flex items-center justify-center ${design?.imagePlaceholder}`}
                >
                  PORTRAIT
                </div>
              )}
            </div>
            <div
              className={`absolute z-0 hidden md:block top-12 -right-12 w-full h-full ${design?.imageBackgroundDecor}`}
            ></div>
          </div>
        </div>
      </div>

      {/* Vague de transition SVG avec ombre portée douce */}
      <div
        className={`absolute bottom-0 left-0 w-full leading-none z-0 ${design?.bottomDivider || ""}`}
      >
        <svg
          className="relative block w-full h-[40px] md:h-[80px] drop-shadow-[0_-8px_15px_rgba(0,0,0,0.08)]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.5,187.38,97.71,232.88,85.73,277.53,70.62,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
