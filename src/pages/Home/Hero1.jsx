// src/pages/Home/Hero1.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CATALOG_PDF } from "../../data/catalog";
import "./HeroSlider.css";

// High-resolution, clean product-focused backgrounds (no heavy dark/blue tint)
import slidePipes from "../../assets/images/hero/slide1-pipes-tubes.jpg";
import slideFlanges from "../../assets/images/hero/slide2-flanges-fittings.png";
import slideBars from "../../assets/images/hero/slide3-rods-bars.png";
import slidePlates from "../../assets/images/hero/slide4-sheets-plates.png";
import slideGlobal from "../../assets/images/hero/slide5-complete-range.jpg";

const SLIDE_DURATION_MS = 6000;
const PROGRESS_STEP_MS = 40;

const slides = [
  {
    id: 1,
    image: slidePipes,
    eyebrow: "BUILT ON STRENGTH",
    accentWord: "ENGINEERED",
    headlineRest: "PIPES & SEAMLESS\nTUBING SOLUTIONS.",
    description:
      "High-grade austenitic, duplex, and nickel alloy pipes precision-formed for high-pressure fluid systems, offshore infrastructure, and chemical process piping.",
    specTag: "ISO 9001:2015 CERTIFIED // PRIME MILL TEST CERTIFICATES",
  },
  {
    id: 2,
    image: slideFlanges,
    eyebrow: "CRITICAL FLOW ENGINEERING",
    accentWord: "PRECISION",
    headlineRest: "FLANGES & FORGED\nFITTINGS.",
    description:
      "Heavy-duty weld neck, blind, slip-on flanges and buttweld elbows engineered to ASME/ANSI standards for leak-proof performance in demanding severe environments.",
    specTag: "IBR APPROVED TEST CERTIFICATES // DIRECT STOCKIST",
  },
  {
    id: 3,
    image: slideBars,
    eyebrow: "METALLURGICAL EXCELLENCE",
    accentWord: "HIGH-TENSILE",
    headlineRest: "STRENGTH. PRECISION\nRODS & BARS.",
    description:
      "Bright annealed round bars, hex rods, and precision ground shafting manufactured with tight dimensional tolerances for aerospace, marine, and heavy engineering.",
    specTag: "100% ULTRASONICALLY TESTED // READY STOCK SIZES",
  },
  {
    id: 4,
    image: slidePlates,
    eyebrow: "SURFACE INTEGRITY",
    accentWord: "SUPERIOR",
    headlineRest: "PLATES & COLD ROLLED\nSHEET PROFILES.",
    description:
      "Comprehensive inventory of corrosion-resistant stainless steel plates, slit coils, and custom cut profiles tailored for pressure vessels and structural fabrications.",
    specTag: "MULTI-GRADE SOURCING // CUSTOM CUT-TO-SIZE",
  },
  {
    id: 5,
    image: slideGlobal,
    eyebrow: "GLOBAL SUPPLY NETWORK",
    accentWord: "COMPLETE",
    headlineRest: "ALLOY INVENTORY.\nWORLDWIDE SUPPLY.",
    description:
      "Direct stockist and global exporter of stainless steel, duplex, nickel alloys, and piping packages serving mission-critical projects across 50+ countries.",
    specTag: "EXPORTING TO 50+ COUNTRIES // ON-TIME DISPATCH",
  },
];

export default function Hero1() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const touchStartXRef = useRef(null);
  const totalSlides = slides.length;

  const goToSlide = useCallback((index) => {
    setCurrent(index);
    progressRef.current = 0;
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % totalSlides);
  }, [current, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current === 0 ? totalSlides - 1 : current - 1));
  }, [current, totalSlides, goToSlide]);

  // Continuous progress bar & autoplay
  useEffect(() => {
    if (paused) return;

    const increment = (PROGRESS_STEP_MS / SLIDE_DURATION_MS) * 100;
    const interval = setInterval(() => {
      if (document.hidden) return;

      progressRef.current += increment;
      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setProgress(0);
        setCurrent((prev) => (prev + 1) % totalSlides);
      } else {
        setProgress(progressRef.current);
      }
    }, PROGRESS_STEP_MS);

    return () => clearInterval(interval);
  }, [paused, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const currentFormatted = String(current + 1).padStart(2, "0");
  const totalFormatted = String(totalSlides).padStart(2, "0");

  return (
    <section
      className="hero-slider-section"
      aria-label="Jindutt Metal & Alloy Hero Showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle atmospheric blends (replaces heavy blue overlays) */}
      <div className="hero-ambient-top" />
      <div className="hero-ambient-bottom" />

      {/* Slide Items Viewport */}
      <div className="hero-slider-viewport">
        {slides.map((slide, index) => {
          const isActive = index === current;

          return (
            <div
              key={slide.id}
              className={`hero-slide-pane ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              {/* Natural Industrial Background Image with subtle scale */}
              <div className="hero-bg-layer">
                <img
                  src={slide.image}
                  alt={slide.eyebrow}
                  className="hero-bg-img"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Foreground Glass Content Layer */}
              <div className="hero-content-layer">
                <div className="hero-content-container">
                  {/* Frosted Architectural Glass Panel */}
                  <div className="hero-glass-panel">
                    {/* Eyebrow Label */}
                    <div className="hero-panel-eyebrow">
                      <span className="hero-eyebrow-line" />
                      <span className="hero-eyebrow-text">{slide.eyebrow}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-panel-headline">
                      <span className="hero-headline-accent">{slide.accentWord} </span>
                      {slide.headlineRest.split("\n").map((line, lIdx) => (
                        <React.Fragment key={lIdx}>
                          {lIdx > 0 && <br />}
                          <span>{line}</span>
                        </React.Fragment>
                      ))}
                    </h1>

                    {/* Description */}
                    <p className="hero-panel-desc">{slide.description}</p>

                    {/* CTA Buttons */}
                    <div className="hero-panel-cta-group">
                      <Link
                        to="/products"
                        className="hero-btn-primary group"
                        id={`hero-explore-products-btn-${slide.id}`}
                      >
                        Explore Products
                        <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={CATALOG_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-btn-glass"
                        id={`hero-explore-catalog-btn-${slide.id}`}
                      >
                        Explore Catalog
                      </a>

                      <Link
                        to="/contact"
                        className="hero-btn-quote"
                        id={`hero-get-quote-btn-${slide.id}`}
                      >
                        Get a Quote
                      </Link>
                    </div>

                    {/* Credibility / Quality Assurance Tag */}
                    <div className="hero-panel-spec-tag">
                      <span className="hero-spec-pip" />
                      <span className="hero-spec-text">{slide.specTag}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Telemetry Progress Dock & Navigation Controls (Bottom Bar) */}
      <div className="hero-bottom-dock">
        <div className="hero-bottom-inner">
          {/* Bottom-Left Telemetry Dock */}
          <div
            className="hero-telemetry-capsule"
            aria-label="Slide Telemetry Progress"
          >
            {/* Phase / Slide Counter */}
            <div className="telemetry-counter-block">
              <span className="telemetry-pulse-dot" aria-hidden="true" />
              <span className="telemetry-phase-tag">PHASE</span>
              <div className="telemetry-number-display">
                <span className="telemetry-curr-num">{currentFormatted}</span>
                <span className="telemetry-divider">/</span>
                <span className="telemetry-total-num">{totalFormatted}</span>
              </div>
            </div>

            {/* Segmented Interactive Progress Track (5 Slides) */}
            <div className="telemetry-bars-track" role="tablist">
              {slides.map((_, idx) => {
                const isTabActive = idx === current;
                const isPassed = idx < current;
                const fillWidth = isTabActive
                  ? `${progress}%`
                  : isPassed
                  ? "100%"
                  : "0%";

                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={isTabActive}
                    aria-label={`Switch to slide ${idx + 1}`}
                    className={`telemetry-bar-btn ${
                      isTabActive ? "is-active" : isPassed ? "is-passed" : ""
                    }`}
                    onClick={() => goToSlide(idx)}
                  >
                    <div className="telemetry-bar-housing">
                      <div
                        className="telemetry-bar-fill"
                        style={{ width: fillWidth }}
                      >
                        {isTabActive && <span className="telemetry-bar-laser" />}
                      </div>
                    </div>
                    <span className="telemetry-bar-label">0{idx + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom-Right Navigation Arrows */}
          <div className="hero-arrows-wrap" aria-label="Slide Navigation Controls">
            <button
              type="button"
              className="hero-arrow-button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              id="hero-prev-slide-btn"
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              className="hero-arrow-button"
              onClick={nextSlide}
              aria-label="Next Slide"
              id="hero-next-slide-btn"
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
