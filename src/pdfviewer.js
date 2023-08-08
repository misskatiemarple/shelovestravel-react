import React from "react";
import { PDFViewer, PDFLink } from "react-pdf-js";
import pdfFile from "./itinerary/pdf/aug2023.pdf";

export default function PDFView() {
  return (
    <div>
      <PDFViewer
        document={{
          url: pdfFile,
        }}
      />
      <PDFLink file={pdfFile}>Download the PDF here</PDFLink>
    </div>
  );
}
