// src/data/certificates.js
import { BadgeCheck, Receipt, Building2 } from "lucide-react";

// Import the PDF file directly
import gstCertificate from "../assets/certificates/gst-certificate.pdf";

const certificates = [
  // {
  //   id: 1,
  //   name: "ISO 9001:2015",
  //   slug: "iso-9001-2015",
  //   pdf: "/certificates/iso-9001.pdf",
  //   description: "ISO 9001:2015 Quality Management System Certification.",
  //   icon: BadgeCheck,
  //   route: "/certificates/iso-9001-2015",
  // },
  {
    id: 1,
    name: "GST Certificate",
    slug: "gst-certificate",
    pdf: gstCertificate, // Use the imported PDF
    description: "Goods and Services Tax Registration Certificate.",
    icon: Receipt,
    route: "/certificates/gst-certificate",
  },
  // {
  //   id: 3,
  //   name: "Udyam Registration",
  //   slug: "udyam-registration",
  //   pdf: "/certificates/udyam.pdf",
  //   description: "MSME Udyam Registration Certificate.",
  //   icon: Building2,
  //   route: "/certificates/udyam-registration",
  // },
];

export default certificates;
