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

const Certificates = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a52]/90 to-[#0a1a52]/70"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                Quality Assurance
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Our <span className="text-[#d79b20]">Certifications</span>
            </h1>
            <p className="text-lg text-gray-200 mt-3 max-w-2xl">
              Jindutt Metal & Alloy Pvt. Ltd. is committed to maintaining the
              highest standards of quality, compliance and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Cards */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates && certificates.length > 0 ? (
            certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d79b20]/40 hover:-translate-y-2 flex flex-col"
              >
                {/* PDF Preview */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <iframe
                    src={`${certificate.pdf}#toolbar=0`}
                    title={certificate.name}
                    className="w-full h-full pointer-events-none"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0a1a52] shadow-sm border border-white/50 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#d79b20]" />
                    Verified
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-[#d79b20]" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#d79b20]">
                      Certificate
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0a1a52] group-hover:text-[#d79b20] transition-colors line-clamp-2">
                    {certificate.name}
                  </h2>

                  <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
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
                      <span>PDF Available</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 pt-5 border-t border-gray-100 group-hover:border-[#d79b20]/20 transition-colors flex items-center gap-3">
                    <Link
                      to={
                        certificate.route || `/certificates/${certificate.slug}`
                      }
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0a1a52] hover:bg-[#122a6e] text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0a1a52]/20 group-hover:shadow-[#0a1a52]/20"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href={certificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-slate-500 transition-all duration-300 hover:border-[#d79b20] hover:text-[#d79b20] hover:bg-[#d79b20]/5"
                      title="Open PDF"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href={certificate.pdf}
                      download={`${certificate.name}.pdf`}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-slate-500 transition-all duration-300 hover:border-[#d79b20] hover:text-[#d79b20] hover:bg-[#d79b20]/5"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
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
