import React, { useState } from "react";
import htmlCode from "../../datas/two-html.json";
import { Modal } from "antd";
import { StyledDiv } from "../../styledComponents/styles-one";

const HtmlToPdf = () => {
    const [html, setHtml] = useState(htmlCode.html);
    const [showHtml, setShowHtml] = useState(false);

    const toggleShowHtml = () => { setShowHtml(!showHtml) }

    const handlePrintPdf = () => {
        const doc = document.getElementById("html-to-pdf-iframe");
        doc.contentWindow.focus();
        doc.contentWindow.print();
    }

    // TODO: convert it into pdf buffer and upload to api

    return (
        <React.Fragment>
            <StyledDiv>This Page was developed to Demonstrate html to pdf conversion</StyledDiv>
            <StyledDiv d="flex" jc="center" ta="center" b="1px solid black" style={{ cursor: "pointer" }} onClick={toggleShowHtml}>show Html</StyledDiv>
            <Modal
                title={"Html To Pdf"}
                open={showHtml}
                footer={null}
                onCancel={toggleShowHtml}
                style={{ top: 30, minWidth: "60%" }}
            >
                <iframe srcDoc={html} title="html to pdf" id={"html-to-pdf-iframe"} style={{ width: '100%', height: '80vh', border: "2px solid black" }} />
                <StyledDiv d="flex" jc="center" ta="center" b="1px solid black" style={{ cursor: "pointer" }} onClick={handlePrintPdf}>Print</StyledDiv>
            </Modal>
        </React.Fragment>
    )

}

export default HtmlToPdf;