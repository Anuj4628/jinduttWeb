// src/pages/Certificates/Certificates.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Download,
  ExternalLink,
  Award,
  CheckCircle,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import certificates from "../../data/certificates";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";
import { CATALOG_PDF } from "../../data/catalog";

const Certificates = () => {
  return (
    <section className="w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 border-b border-blue-200/70 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url(${bannerIndustrial})` }}
        />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0a1a52 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-7xl mx-auto flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#0a1a52] text-sm font-bold uppercase tracking-widest">
                Quality Assurance
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0a1a52] leading-tight">
              Our <span className="text-[#d79b20]">Certifications</span>
            </h1>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl font-normal">
              Jindutt Metal & Alloy Pvt. Ltd. is committed to maintaining the
              highest standards of quality, compliance and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Cards */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {certificates && certificates.length > 0 ? (
            certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d79b20]/40 hover:-translate-y-2 flex flex-col"
              >
                {/* Certificate Preview Thumbnail */}
                <Link
                  to={certificate.route || `/certificates/${certificate.slug}`}
                  className="relative h-72 bg-slate-100 overflow-hidden block group/preview"
                  title={`View ${certificate.name}`}
                >
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <iframe
                      src={`${certificate.pdf}#toolbar=0`}
                      title={certificate.name}
                      className="w-full h-full pointer-events-none"
                      loading="lazy"
                    />
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52]/75 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                      View Certificate →
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0a1a52] shadow-sm border border-white/50 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#d79b20]" />
                    Verified
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-[#d79b20]" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#d79b20]">
                      Certificate
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#0a1a52] group-hover:text-[#d79b20] transition-colors line-clamp-2">
                    {certificate.name}
                  </h2>

                  <p className="mt-2.5 text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
                    {certificate.description}
                  </p>

                  {/* Meta Info */}
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[#d79b20]" />
                      <span>Verified</span>
                    </div>
                    <div className="w-px h-4 bg-slate-200"></div>
                    <div className="flex items-center gap-1.5">
                      <FileCheck className="w-3 h-3 text-[#d79b20]" />
                      <span>Document</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 pt-5 border-t border-gray-100 group-hover:border-[#d79b20]/20 transition-colors flex items-center gap-2.5">
                    <Link
                      to={
                        certificate.route || `/certificates/${certificate.slug}`
                      }
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0a1a52] hover:bg-[#122a6e] text-white text-xs sm:text-sm font-semibold py-2.5 px-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0a1a52]/20 group-hover:shadow-[#0a1a52]/20"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href={certificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-slate-500 transition-all duration-300 hover:border-[#d79b20] hover:text-[#d79b20] hover:bg-[#d79b20]/5 flex-shrink-0"
                      title="Open in New Tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href={certificate.pdf}
                      download={`${certificate.name}.pdf`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-slate-500 transition-all duration-300 hover:border-[#d79b20] hover:text-[#d79b20] hover:bg-[#d79b20]/5 flex-shrink-0"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center py-12">
              <p className="text-slate-500">No certificates available.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
            <span className="text-sm text-gray-600">
              Need assistance with our certifications?
            </span>
            <a
              href={CATALOG_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#d79b20] hover:bg-[#d79b20] text-[#0a1a52] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300"
            >
              Explore Catalog
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0a1a52] hover:bg-[#122a6e] text-white text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0a1a52]/25"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
