"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Icons = {
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
  hands: (
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
        d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575V12a1.5 1.5 0 003 0v-1.5m0 0h.008v.008H9.9V10.5M20.25 7.5v11.25a2.25 2.25 0 01-2.25 2.25h-5.25a2.25 2.25 0 01-2.25-2.25V16.5M6.75 12a2.25 2.25 0 01-2.25-2.25V7.5"
      />
    </svg>
  ),
  stone: (
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
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
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
  // Séparation des états pour PC et Mobile
  const [activeDesktopIndices, setActiveDesktopIndices] = useState({});
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  const [activeTab, setActiveTab] = useState("particuliers");
  const itemRefs = useRef({});

  // Détection de la taille de l'écran
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Vérification initiale
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
      // Logique PC : on met à jour la ligne spécifique
      setActiveDesktopIndices((prev) => ({
        ...prev,
        [rowIndex]: colIndex,
      }));
    } else {
      // Logique Mobile : on met à jour l'élément global unique
      if (activeMobileIndex === globalIndex) return;
      setActiveMobileIndex(globalIndex);

      if (itemRefs.current[globalIndex]) {
        setTimeout(() => {
          const element = itemRefs.current[globalIndex];
          const offset = 100;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }, 150);
      }
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Réinitialisation des états
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

                  // Calcul de l'état actif (Différent selon PC ou Mobile)
                  let isActive = false;
                  if (isDesktop) {
                    const activeColIndex =
                      activeDesktopIndices[rowIndex] !== undefined
                        ? activeDesktopIndices[rowIndex]
                        : rowIndex % 2 === 0
                          ? 0 // Premier pour les lignes paires (0, 2...)
                          : row.length - 1; // Dernier pour les lignes impaires (1, 3...)
                    isActive = activeColIndex === colIndex;
                  } else {
                    isActive = activeMobileIndex === globalIndex;
                  }

                  return (
                    <div
                      key={globalIndex}
                      ref={(el) => (itemRefs.current[globalIndex] = el)}
                      className={`relative overflow-hidden group transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] 
                      ${isActive ? "h-[600px] lg:h-full lg:flex-6" : "h-[100px] lg:h-full lg:flex-1"}
                      ${isActive ? ` ${global?.imageRadius || "rounded-4xl lg:rounded-[2.5rem]"}` : ` cursor-pointer ${global?.imageRadius || "rounded-3xl lg:rounded-4xl"}`} ${isActive ? design?.panelActive : design?.panelInactive}`}
                      onMouseEnter={() => {
                        // Activation au survol uniquement sur ordinateur
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
                            className={`object-cover transition-all duration-1000 ease-out ${isActive ? "scale-100" : "scale-110"} ${isActive ? design?.imageActive : design?.imageInactive}`}
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        )}
                        <div
                          className={`absolute inset-0 transition-opacity duration-800 ${isActive ? design?.overlayActive : design?.overlayInactive}`}
                        ></div>
                      </div>

                      {/* État Inactif (fermé) */}
                      <div
                        className={`absolute inset-0 p-5 lg:p-6 flex items-center justify-center pointer-events-none transition-opacity ${isActive ? "opacity-0 duration-200 delay-0" : "opacity-100 duration-700 delay-400"}`}
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

                      {/* État Actif (ouvert) */}
                      <div
                        className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10 transition-all ease-out ${isActive ? "opacity-100 translate-y-0 duration-800 delay-300" : "opacity-0 translate-y-8 duration-200 delay-0 pointer-events-none"}`}
                      >
                        <div className="flex justify-between items-start">
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

                        <div
                          className={`flex flex-col justify-end mt-auto w-full md:w-[500px] lg:w-[600px] max-w-full p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl ${design?.contentBoxBg || "bg-[#303030]/90 backdrop-blur-xl"}`}
                        >
                          <h3 className={`mb-3 ${design?.titleActive}`}>
                            {item.title}
                          </h3>
                          <p className={`mb-6 ${design?.descActive}`}>
                            {item.details}
                          </p>

                          {item.detailsList && item.detailsList.length > 0 && (
                            <ul
                              className={`space-y-3 pt-5 border-t ${design?.listContainer}`}
                            >
                              {item.detailsList.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex justify-between items-end gap-4"
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
