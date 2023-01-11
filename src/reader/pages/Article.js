import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack5'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Sample from "../helpers/articles/sample.pdf"
import {findPDF} from "../helpers/findPDF";


function Article() {

    const {id} = useParams()
    const [pages, setPages] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [userWidth, setUserWidth] = useState(window.innerWidth);
    const fileRep = findPDF(id)

    window.addEventListener("resize", (event) => {setUserWidth(window.innerWidth)});


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        for(var k=1; k < numPages+1; k++) {
            let temp = pages
            temp.push(k)
            setPages(temp)
        }
    }
    
    return(
        <div>
            <Document file={fileRep} onLoadSuccess={onDocumentLoadSuccess}>
                {pages.map(page =>{
                    return(
                            <Page pageNumber={page} width={userWidth} key={page}/>
                    )
                })}
            </Document>
        </div>
    )
}

export default Article;