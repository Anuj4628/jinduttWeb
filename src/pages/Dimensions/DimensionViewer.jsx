// src/pages/Dimensions/DimensionViewer.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Ruler,
  FileText,
  Printer,
  Maximize2,
  Home,
} from "lucide-react";
import dimensions from "../../data/dimensions";
import { CATALOG_PDF } from "../../data/catalog";
import jinduttEmblem from "../../assets/images/logo/jindutt-emblem.png";

const DimensionViewer = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const dimension = dimensions.find((d) => d.slug === slug);

  if (!dimension) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4">
        {/* Brand Logo Header */}
        <div className="mb-8">
          <Link to="/" title="Jindutt Metal & Alloy Pvt. Ltd.">
            <img
              src={jinduttEmblem}
              alt="Jindutt Metal & Alloy Emblem"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="text-center max-w-md p-8 bg-white border border-slate-200 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ruler className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-[#0a1a52] mb-2">
            Dimension Not Found
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            The dimension chart you're looking for doesn't exist.
          </p>
          <Link
            to="/dimensions/coils"
            className="inline-flex items-center gap-2 bg-[#0a1a52] hover:bg-[#122a6e] text-white font-medium px-6 py-2.5 rounded-lg transition duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dimensions
          </Link>
        </div>
      </div>
    );
  }

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-slate-50 flex flex-col overflow-hidden">
      {/* Header - Clean White Branded Header with Jindutt Metal & Alloy Emblem */}
      <div className="bg-white border-b border-slate-200/90 shadow-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Logo Area: Centered, clean white background, prominent & balanced */}
          <div className="pt-3 sm:pt-4 md:pt-4.5 pb-2 sm:pb-3 flex justify-center items-center">
            <Link
              to="/"
              title="Jindutt Metal & Alloy Pvt. Ltd."
              className="inline-block transition-transform duration-200 hover:scale-[1.015]"
            >
              <img
                src={jinduttEmblem}
                alt="Jindutt Metal & Alloy Emblem"
                className="h-11 sm:h-14 md:h-16 lg:h-18 w-auto object-contain select-none"
              />
            </Link>
          </div>

          {/* Thin subtle separation line */}
          <div className="w-full border-t border-slate-100" />

          {/* Dimension Title & Action Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2.5 sm:py-3">
            {/* Left Section: Back Link, Icon, Dimension Name, Subtitle */}
            <div className="flex items-center gap-2.5 min-w-0">
              <Link
                to="/dimensions"
                className="text-slate-500 hover:text-[#0a1a52] transition-colors p-1.5 rounded-lg hover:bg-slate-100 flex-shrink-0"
                aria-label="Back to Dimensions"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>

              <div className="flex items-center gap-2.5 min-w-0">
                <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-[#0a1a52] flex-shrink-0">
                  <Ruler className="w-4 h-4 text-[#d79b20]" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-base sm:text-lg font-bold text-[#0a1a52] tracking-tight truncate">
                    {dimension.name}
                  </h1>
                  <p className="text-xs text-slate-500 truncate">
                    Dimension Chart • Technical Specifications
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <a
                href={CATALOG_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#d79b20] bg-white hover:bg-[#d79b20] hover:text-white px-2.5 py-1.5 text-xs font-medium text-[#0a1a52] transition-all duration-200 shadow-sm"
                title="View Full Catalog"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Catalog</span>
              </a>

              <a
                href={dimension.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-[#0a1a52] transition-all duration-200 shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open</span>
              </a>

              <a
                href={dimension.pdf}
                download
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0a1a52] hover:bg-[#122a6e] px-2.5 py-1.5 text-xs font-medium text-white transition-all duration-200 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-[#0a1a52] transition-all duration-200 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={() => {
                  const iframe = document.querySelector("iframe");
                  if (iframe) {
                    if (iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    }
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-[#0a1a52] transition-all duration-200 shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer - Take remaining height */}
      <div className="flex-1 relative">
        {/* Loading Indicator - Hidden when loaded */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20 transition-opacity duration-500">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[#d79b20]/20 border-t-[#d79b20] rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-400 text-sm">
                Loading dimension chart...
              </p>
              <p className="text-slate-300 text-xs mt-2">Please wait...</p>
            </div>
          </div>
        )}

        <iframe
          src={`${dimension.pdf}#toolbar=0`}
          title={dimension.name}
          className="w-full h-full relative z-10"
          loading="lazy"
          onLoad={handleIframeLoad}
        />
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-white border-t border-slate-200 py-1.5 px-4 sm:px-6 lg:px-8 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#d79b20]" />
              <span className="truncate max-w-[200px] sm:max-w-none">
                {dimension.name}
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="hidden sm:flex items-center gap-2">
              <span>Updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Ready to view</span>
            </span>
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-[#0a1a52] hover:text-[#d79b20] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionViewer;
