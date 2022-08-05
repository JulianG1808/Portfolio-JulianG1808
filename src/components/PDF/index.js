import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfCV from '../../assets/CV/Curriculum vitae - Julian Gomez.pdf'
import Sidebar from "../Sidebar";
import './index.scss'

const PdfViewer = () => {

    const [numPages, setNumPages] = useState(null);

    const onDucumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    return (
        <div className='containerPdf'>
            <Sidebar />

            <center>
                <div>
                    <Document file={pdfCV} onLoadSuccess={onDucumentLoadSuccess}>
                        {Array.from(
                        new Array(numPages),
                        (el,index) => (
                            <Page 
                            key={`page_${index+1}`}
                            pageNumber={index+1}
                            scale={1.5}
                            />
                        )
                        )}
                    </Document>
                </div>
            </center>
        </div>
    )
}

export default PdfViewer;