import Image from "next/image";

const Hero = ({ content, design, global }) => {
  if (!content) return null;

  return (
    <section
      id="hero"
      // CORRECTION : h-[100svh] pour le bas de l'écran, pt-32 pour baisser l'image sous la navbar, et p-5 pour un cadre plus élégant sur mobile
      className={`h-[100svh] p-5 pb-6 md:p-8 flex items-center justify-center overflow-hidden pt-32 md:pt-32 ${design?.bgColor || ""}`}
    >
      <div
        className={`relative w-full h-full overflow-hidden p-4 md:p-8 ${global?.imageRadius}`}
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        {design?.bgImage ? (
          <Image
            src={design.bgImage}
            alt="Hero Ambience"
            fill
            priority
            className="object-cover transition-transform duration-30000 ease-linear hover:scale-105"
            sizes="100vw"
          />
        ) : (
          <div
            className={`absolute inset-0 flex items-center justify-center ${design?.imagePlaceholderBg}`}
          >
            <span className={design?.imagePlaceholderText}>
              {content.imagePlaceholderText}
            </span>
          </div>
        )}

        {/* Le voile sombre */}
        <div
          className={`absolute inset-0 pointer-events-none ${design?.overlay || ""}`}
        ></div>

        {/* Le cadre fin conservé */}
        <div
          className={`absolute pointer-events-none z-10 inset-4 md:inset-8 ${design?.borderOverlay || ""}`}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <div className="text-center max-w-4xl flex flex-col items-center">
            <p
              className={`mb-6 md:mb-10 ${design?.tagline}`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {content.tagline}
            </p>
            <h1
              className={`mb-2 ${design?.titleLine1}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {content.titleLine1}
            </h1>
            <h1
              className={design?.titleLine2}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {content.titleLine2}
            </h1>

            {/* LE BOUTON CTA */}
            {content.cta && (
              <div data-aos="fade-up" data-aos-delay="900">
                <a
                  href={content.ctaHref || "#about"}
                  className={`inline-block ${design?.btnPrimary} ${global?.buttonRadius}`}
                >
                  {content.cta}
                </a>
              </div>
            )}
          </div>
        </div>

        <div
          className="absolute z-20 bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-aos="fade-in"
          data-aos-delay="1100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className={`w-8 h-8 ${design?.scrollIcon}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
