import { PDFViewer } from "@react-pdf/renderer";
import { DonQuijoteDocument } from "./Document";

function PdfGenerator() {
    return (
        <PDFViewer
            width={"1024px"}
            height={"500px"}
        >
            <DonQuijoteDocument />
        </PDFViewer>
    );
};

export default PdfGenerator;
