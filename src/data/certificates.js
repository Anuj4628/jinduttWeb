// src/data/certificates.js
import { BadgeCheck, Receipt, Award, ShieldCheck } from "lucide-react";

// PDF Files
import gstCertificatePdf from "../assets/certificates/gst-certificate.pdf";
import iso9001Pdf from "../assets/certificates/iso-9001-2015.pdf";
import iso14001Pdf from "../assets/certificates/iso-14001-2015.pdf";
import pedPdf from "../assets/certificates/ped-2014-68-eu.pdf";

// Thumbnails
import gstCertificateImg from "../assets/certificates/gst-certificate.png";
import iso9001Img from "../assets/certificates/iso-9001-2015.png";
import iso14001Img from "../assets/certificates/iso-14001-2015.png";
import pedImg from "../assets/certificates/ped-2014-68-eu.png";

const certificates = [
  {
    id: 1,
    name: "GST Certificate",
    slug: "gst-certificate",
    pdf: gstCertificatePdf,
    image: gstCertificateImg,
    description: "Goods and Services Tax Registration Certificate issued by Government of India.",
    icon: Receipt,
    route: "/certificates/gst-certificate",
    certNo: "33AAHCJ5055C1ZW",
  },
  {
    id: 2,
    name: "ISO 9001:2015",
    slug: "iso-9001-2015",
    pdf: iso9001Pdf,
    image: iso9001Img,
    description: "Quality Management System Certification for exporter, importer and stockist of metal products.",
    icon: BadgeCheck,
    route: "/certificates/iso-9001-2015",
    certNo: "26MEQXV21",
  },
  {
    id: 3,
    name: "ISO 14001:2015",
    slug: "iso-14001-2015",
    pdf: iso14001Pdf,
    image: iso14001Img,
    description: "Environmental Management System Certification adhering to international environmental standards.",
    icon: ShieldCheck,
    route: "/certificates/iso-14001-2015",
    certNo: "26MEEXJ17",
  },
  {
    id: 4,
    name: "PED 2014/68/EU",
    slug: "ped-2014-68-eu",
    pdf: pedPdf,
    image: pedImg,
    description: "Pressure Equipment Directive 2014/68/EU Compliance Certification for pipes, tubes, fittings, flanges & valves.",
    icon: Award,
    route: "/certificates/ped-2014-68-eu",
    certNo: "CTN202608517",
  },
];

export default certificates;
