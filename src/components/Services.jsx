"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Icons = {
  lightbulb: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18"
      />
    </svg>
  ),
  ruler: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 10.5V12m4.5-1.5V12m4.5-1.5V12m4.5-1.5V12m-15 4.5v-9A2.25 2.25 0 016.75 5.25h10.5A2.25 2.25 0 0119.5 7.5v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 16.5v-9z"
      />
    </svg>
  ),
  book: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  users: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  ),
  cube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  ),
  home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  ),
  sparkles: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  ),
  building: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  ),
  key: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
      />
    </svg>
  ),
  default: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  ),
};

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Services = ({ content, design, global }) => {
  const [activeDesktopIndices, setActiveDesktopIndices] = useState({});
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  const [activeTab, setActiveTab] = useState("particuliers");
  const itemRefs = useRef({});

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!content) return null;

  const currentItems =
    activeTab === "particuliers"
      ? content.particuliersItems
      : content.prosItems;
  if (!currentItems) return null;

  const groupedItems = chunkArray(currentItems, 3);

  const handleInteraction = (rowIndex, colIndex, globalIndex) => {
    if (isDesktop) {
      setActiveDesktopIndices((prev) => ({
        ...prev,
        [rowIndex]: colIndex,
      }));
    } else {
      if (activeMobileIndex === globalIndex) return;
      setActiveMobileIndex(globalIndex);

      if (itemRefs.current[globalIndex]) {
        setTimeout(() => {
          const element = itemRefs.current[globalIndex];
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementTop = rect.top + window.scrollY;

          // Nouveau calcul : On aligne le BAS de la carte avec le bas de l'écran (moins 20px de marge).
          // Résultat : la boîte de texte (qui est en bas) se retrouve parfaitement au centre du téléphone.
          let offset = windowHeight - rect.height - 20;
          if (offset < 0) offset = 20; // Sécurité si l'écran est minuscule

          window.scrollTo({
            top: elementTop - offset,
            behavior: "smooth",
          });
        }, 450);
      }
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveMobileIndex(0);
    setActiveDesktopIndices({});
  };

  return (
    <section
      id="services"
      className={`min-h-screen py-32 px-6 flex flex-col justify-center relative ${design?.section || ""}`}
    >
      <div className="max-w-[1600px] mx-auto w-full relative z-10 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div data-aos="fade-right">
            <h2 className={`mb-4 block ${design?.subtitle || ""}`}>
              {content.subtitle}
            </h2>
            <h3 className={`block ${design?.title || ""}`}>
              {content.titleLine1} <br />
              <i className={design?.titleHighlight}>{content.titleLine2}</i>
            </h3>

            {content.tabParticuliers && content.tabPros && (
              <div
                className={`flex flex-wrap gap-4 mt-12 ${design?.tabWrapper || ""}`}
              >
                <button
                  onClick={() => handleTabChange("particuliers")}
                  className={`px-8 py-3 transition-all ${global?.buttonRadius} ${activeTab === "particuliers" ? design?.tabActive : design?.tabInactive}`}
                >
                  {content.tabParticuliers}
                </button>
                <button
                  onClick={() => handleTabChange("pros")}
                  className={`px-8 py-3 transition-all ${global?.buttonRadius} ${activeTab === "pros" ? design?.tabActive : design?.tabInactive}`}
                >
                  {content.tabPros}
                </button>
              </div>
            )}
          </div>
          <div
            data-aos="fade-left"
            className={`max-w-md lg:ml-auto lg:text-right pl-6 lg:pl-0 lg:pr-6 border-l-2 lg:border-l-0 lg:border-r-2 ${design?.quoteWrapper || ""}`}
          >
            <p className={`block ${design?.quote || ""}`}>
              &quot;{content.quote}&quot;
            </p>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 lg:gap-8 w-full transition-opacity duration-500"
          key={activeTab}
        >
          {groupedItems.map((row, rowIndex) => {
            return (
              <div
                key={rowIndex}
                className="flex flex-col lg:flex-row w-full lg:h-[600px] gap-3 lg:gap-4"
              >
                {row.map((item, colIndex) => {
                  const globalIndex = rowIndex * 3 + colIndex;
                  const Icon = Icons[item.icon] || Icons.default;

                  let isActive = false;
                  if (isDesktop) {
                    const activeColIndex =
                      activeDesktopIndices[rowIndex] !== undefined
                        ? activeDesktopIndices[rowIndex]
                        : rowIndex % 2 === 0
                          ? 0
                          : row.length - 1;
                    isActive = activeColIndex === colIndex;
                  } else {
                    isActive = activeMobileIndex === globalIndex;
                  }

                  return (
                    <div
                      key={globalIndex}
                      ref={(el) => (itemRefs.current[globalIndex] = el)}
                      className={`relative overflow-hidden group transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] 
                      ${isActive ? "h-[calc(100svh-110px)] md:h-[550px] lg:h-full lg:flex-6" : "h-[100px] lg:h-full lg:flex-1"}
                      ${isActive ? ` ${global?.imageRadius || "rounded-4xl lg:rounded-[2.5rem]"}` : ` cursor-pointer ${global?.imageRadius || "rounded-3xl lg:rounded-4xl"}`} ${isActive ? design?.panelActive : design?.panelInactive}`}
                      onMouseEnter={() => {
                        if (isDesktop) {
                          handleInteraction(rowIndex, colIndex, globalIndex);
                        }
                      }}
                      onClick={() =>
                        handleInteraction(rowIndex, colIndex, globalIndex)
                      }
                    >
                      <div className="absolute inset-0 z-0">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            quality={100}
                            className={`object-cover transition-all duration-1000 ease-out ${isActive ? "scale-100" : "scale-110"} ${isActive ? design?.imageActive : design?.imageInactive}`}
                            sizes="(max-width: 1024px) 100vw, 80vw"
                          />
                        )}
                        <div
                          className={`absolute inset-0 transition-opacity duration-800 ${isActive ? design?.overlayActive : design?.overlayInactive}`}
                        ></div>
                      </div>

                      <div
                        className={`absolute inset-0 p-4 lg:p-6 flex items-center justify-center pointer-events-none transition-opacity ${isActive ? "opacity-0 duration-200 delay-0" : "opacity-100 duration-700 delay-400"}`}
                      >
                        <div className="flex flex-col items-center gap-3 lg:hidden w-full">
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 ${design?.iconInactive}`}>
                              {Icon}
                            </div>
                            <span
                              className={`block ${design?.titleInactiveMobile}`}
                            >
                              {item.title}
                            </span>
                          </div>
                          {/* AJOUT : Indicateur visuel pour inviter au clic sur mobile */}
                          <span className="text-[9px] text-white/70 uppercase tracking-[0.2em] font-sans font-medium animate-pulse mt-1">
                            Appuyer pour découvrir
                          </span>
                        </div>

                        <div
                          className={`hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 transition-colors duration-500 ${design?.iconInactivePC}`}
                        >
                          {Icon}
                        </div>
                        <span
                          className={`hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center -rotate-90 whitespace-nowrap transition-colors duration-500 ${design?.titleInactivePC}`}
                        >
                          {item.title}
                        </span>
                      </div>

                      <div
                        className={`absolute inset-0 p-4 md:p-10 flex flex-col justify-between z-10 transition-all ease-out ${isActive ? "opacity-100 translate-y-0 duration-800 delay-300" : "opacity-0 translate-y-8 duration-200 delay-0 pointer-events-none"}`}
                      >
                        <div className="flex justify-between items-start shrink-0">
                          <div
                            className={`w-10 h-10 transition-transform duration-700 ${isActive ? "scale-100" : "scale-50"} ${design?.iconActive}`}
                          >
                            {Icon}
                          </div>
                          <span
                            className={`px-3 py-1 border rounded-full font-sans text-[10px] font-bold tracking-widest ${design?.numberActive}`}
                          >
                            0{globalIndex + 1}
                          </span>
                        </div>

                        {/* Optimisation des marges (padding p-4 au lieu de p-8 sur mobile) pour gagner de la place */}
                        <div
                          className={`flex flex-col mt-auto w-full md:w-[500px] lg:w-[600px] max-w-full p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl pointer-events-auto max-[900px]:landscape:overflow-y-auto max-[900px]:landscape:max-h-[70%] ${design?.contentBoxBg || "bg-[#303030]/90 backdrop-blur-xl"}`}
                        >
                          {/* Ajout de break-words et leading-tight pour "Investissement Meublé" */}
                          <h3
                            className={`mb-2 lg:mb-3 shrink-0 wrap-break-words hyphens-auto text-[26px] leading-tight md:text-inherit md:leading-inherit ${design?.titleActive}`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`mb-3 lg:mb-6 shrink-0 ${design?.descActive}`}
                          >
                            {item.details}
                          </p>

                          {item.detailsList && item.detailsList.length > 0 && (
                            <ul
                              className={`space-y-2 lg:space-y-3 pt-3 lg:pt-5 border-t shrink-0 ${design?.listContainer}`}
                            >
                              {item.detailsList.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex justify-between items-end gap-3 lg:gap-4"
                                >
                                  <div className="flex-1">
                                    <h4
                                      className={`block ${design?.listTitle}`}
                                    >
                                      • {detail.name}
                                    </h4>
                                    {detail.desc && (
                                      <p
                                        className={`mt-1 block ${design?.listDesc}`}
                                      >
                                        {detail.desc}
                                      </p>
                                    )}
                                  </div>
                                  {detail.price && (
                                    <span
                                      className={`px-3 py-1 block rounded-lg border border-white/10 whitespace-nowrap ${design?.listPrice}`}
                                    >
                                      {detail.price}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

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

export default Services;
