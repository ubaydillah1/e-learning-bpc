"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import NavbarTop from "./NavbarTop";
import AbsentSection from "./section/AbsentSection";
import ConsultationSection from "./section/ConsultationSection";

export type ActiveTabType = "ABSENSI" | "KONSULTASI" | "BELAJAR";

const BodyWrapper = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("ABSENSI");
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  const updateScrollState = useCallback(() => {
    const shouldBeScrolled = lastScrollY.current > 60;
    setIsScrolled((prev) => {
      if (prev !== shouldBeScrolled) {
        return shouldBeScrolled;
      }
      return prev;
    });
    ticking.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    lastScrollY.current = window.scrollY;

    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(updateScrollState);
    }
  }, [updateScrollState]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    updateScrollState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, updateScrollState]);

  const containerStyle = useMemo(
    () => ({
      position: isScrolled ? ("sticky" as const) : ("relative" as const),
      top: isScrolled ? "95px" : "auto",
      zIndex: isScrolled ? 10 : "auto",
      backgroundColor: "white",
      transform: "translateZ(0)",
      backfaceVisibility: "hidden" as const,
    }),
    [isScrolled],
  );

  return (
    <>
      <div style={containerStyle} className="px-5">
        <NavbarTop
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isSticky={isScrolled}
        />
      </div>

      <main className="bg-neutral-n100 pt-5 pb-20 px-5">
        {activeTab === "ABSENSI" && <AbsentSection />}
        {activeTab === "KONSULTASI" && <ConsultationSection />}
      </main>
    </>
  );
};

export default BodyWrapper;
