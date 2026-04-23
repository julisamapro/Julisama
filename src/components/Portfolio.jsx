"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PortfolioItem = ({ item, index, design, global, openModal }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = item.images || (item.image ? [item.image] : []);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    let interval;
    if (isHovered && hasMultiple) {
      interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % images.length);
      }, 2200);
    }
    return () => clearInterval(interval);
  }, [isHovered, hasMultiple, images.length]);

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="group cursor-pointer relative w-full"
      data-aos="fade-up"
      data-aos-once="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImg(0);
      }}
      onClick={() => openModal(item, currentImg)}
    >
      <div
        className={`relative overflow-hidden aspect-[4/3] md:aspect-[16/10] mb-6 md:mb-8 ${design?.imageWrapper} ${global?.imageRadius || "rounded-none"}`}
      >
        {images.length > 0 ? (
          images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${item.title} - Vue ${idx + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out absolute inset-0 ${idx === currentImg ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ))
        ) : (
          <div
            className={`absolute inset-0 flex items-center justify-center ${design?.imagePlaceholder}`}
          >
            IMAGE {index + 1}
          </div>
        )}

        {hasMultiple && (
          <div className="absolute inset-0 z-30 flex items-center justify-between px-4 md:hidden pointer-events-none">
            <button
              onClick={prevImg}
              aria-label="Image précédente"
              className="p-3 bg-[#303030]/40 backdrop-blur-sm text-[#faf7f3] rounded-full pointer-events-auto active:scale-95 transition-transform"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImg}
              aria-label="Image suivante"
              className="p-3 bg-[#303030]/40 backdrop-blur-sm text-[#faf7f3] rounded-full pointer-events-auto active:scale-95 transition-transform"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {hasMultiple && (
          <div className="absolute top-5 inset-x-0 z-30 flex justify-center gap-2 md:hidden">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImg ? "w-5 bg-[#faf7f3]" : "w-1.5 bg-[#faf7f3]/50"}`}
              />
            ))}
          </div>
        )}

        <div className="hidden md:flex absolute inset-x-0 bottom-0 pt-32 pb-6 px-8 z-20 flex-col justify-end bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none">
          <p className="font-sans text-[#faf7f3] font-medium text-sm leading-relaxed drop-shadow-md">
            {item.description}
          </p>
          <span className="font-sans text-[10px] text-[#faf7f3]/70 uppercase tracking-widest mt-3 flex items-center gap-2">
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            Cliquer pour agrandir
          </span>
        </div>
      </div>

      <div className="text-center md:text-left px-2">
        <h3 className={design?.itemTitle}>{item.title}</h3>
        <p className={`mt-2 ${design?.itemCategory}`}>{item.category}</p>
        <p className="mt-4 font-sans text-[#303030]/80 font-medium text-sm leading-relaxed md:hidden">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Portfolio = ({ content, design, global }) => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    item: null,
    imgIndex: 0,
  });

  if (!content) return null;

  const openModal = (item, startIndex) => {
    setModalData({ isOpen: true, item, imgIndex: startIndex });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalData({ isOpen: false, item: null, imgIndex: 0 });
    document.body.style.overflow = "auto";
  };

  const modalNextImg = (e) => {
    e.stopPropagation();
    if (!modalData.item) return;
    const images = modalData.item.images || [modalData.item.image];
    setModalData((prev) => ({
      ...prev,
      imgIndex: (prev.imgIndex + 1) % images.length,
    }));
  };

  const modalPrevImg = (e) => {
    e.stopPropagation();
    if (!modalData.item) return;
    const images = modalData.item.images || [modalData.item.image];
    setModalData((prev) => ({
      ...prev,
      imgIndex: (prev.imgIndex - 1 + images.length) % images.length,
    }));
  };

  return (
    <>
      <section
        id="portfolio"
        className={`min-h-screen relative py-32 px-6 ${design?.bgColor || ""}`}
      >
        <div className="max-w-[1600px] mx-auto relative z-10 pb-16">
          <div
            className="text-center max-w-3xl mx-auto"
            data-aos="fade-in"
            data-aos-once="true"
          >
            <span className={`block mb-4 ${design?.subtitle}`}>
              {content.subtitle}
            </span>
            <h2 className={`mb-12 md:mb-24 ${design?.title}`}>
              {content.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24 px-0 md:px-8 mt-12 md:mt-24">
            <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
              {content.items.slice(0, 2).map((item, index) => (
                <PortfolioItem
                  key={`left-${index}`}
                  item={item}
                  index={index}
                  design={design}
                  global={global}
                  openModal={openModal}
                />
              ))}
            </div>

            <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 md:pt-48">
              {content.items.slice(2, 4).map((item, index) => (
                <PortfolioItem
                  key={`right-${index}`}
                  item={item}
                  index={index + 2}
                  design={design}
                  global={global}
                  openModal={openModal}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalData.isOpen && modalData.item && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#a2623d] transition-colors z-50"
            aria-label="Fermer"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-full h-full max-w-[90vw] max-h-[80vh] flex items-center justify-center mt-8 md:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={
                (modalData.item.images || [modalData.item.image])[
                  modalData.imgIndex
                ]
              }
              alt={`${modalData.item.title} - Plein écran`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {modalData.item.images?.length > 1 && (
              <>
                <button
                  onClick={modalPrevImg}
                  className="absolute left-0 md:-left-12 p-3 md:p-4 bg-black/40 hover:bg-[#a2623d] text-white rounded-full transition-all active:scale-90"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={modalNextImg}
                  className="absolute right-0 md:-right-12 p-3 md:p-4 bg-black/40 hover:bg-[#a2623d] text-white rounded-full transition-all active:scale-90"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center pointer-events-none px-4">
            <h4 className="text-white font-serif text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg">
              {modalData.item.title}
            </h4>
            {modalData.item.images?.length > 1 && (
              <p className="text-white/60 font-sans text-xs uppercase tracking-widest mt-3">
                {modalData.imgIndex + 1} / {modalData.item.images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
