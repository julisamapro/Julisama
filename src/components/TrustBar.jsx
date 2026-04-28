"use client";

const TrustBar = ({ content, design }) => {
  if (!content) return null;

  const repeatedItems = [...content, ...content, ...content];

  return (
    <section
      className={`relative w-full overflow-hidden py-12 ${design?.bgColor || ""}`}
    >
      <div
        className="flex w-max whitespace-nowrap animate-marquee md:animate-marquee-slow"
        style={{ animationDuration: "75s" }}
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-12">
            <span
              className={`transition-colors duration-300 ${design?.textClass}`}
            >
              {item}
            </span>
            <span className={`ml-12 w-px h-8 ${design?.separator}`}></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
