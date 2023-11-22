import React, { useState } from "react";
import { StyledButton, StyledCard, StyledDiv, StyledIcon, StyledImage, StyledText } from "../../styledComponents/styles-one";
import uploadIcon from "../../icons/upload-icon.svg"
import editIcon from "../../icons/pencil-blue-icon.svg"

const DocumentUpload = (props) => {
    const { documentName, sizeLimit, fileExtension } = props

    const [previewFileUrl, setPreviewFileUrl] = useState()
    const [isSelectedFilePdf, setIsSelectedFilePdf] = useState(false);

    const handleUploadDocument = (event) => {
        const selectedFile = event?.target?.files[0]
        if (selectedFile.type === 'application/pdf') {
            setIsSelectedFilePdf(true);
        } else { setIsSelectedFilePdf(false) }
        setPreviewFileUrl(URL.createObjectURL(selectedFile))
    }

    return (
        <React.Fragment>
            {previewFileUrl ?
                <StyledCard d="block !important" h="fit-content" b="1.75px dashed #DADADA" br="10px"
                    p="0 10%" square="true" m="10px auto 14px" w="auto" squarecard={1} cursor="default">
                    {isSelectedFilePdf ?
                        <iframe src={previewFileUrl} width="100%" height="250">Your browser does not support PDF files</iframe>
                        :
                        <StyledImage src={previewFileUrl} w="100%" h="auto" m="auto" />
                    }
                    <StyledIcon src={editIcon} w="30px" h="30px" bgc="#fff" br="20px" p="2px"
                        position="absolute" top="0" right="0" bs="0px 1px 4px rgba(0, 0, 0, 0.25)" />
                    <input type="file" accept="application/pdf, image/jpeg, image/png, image/jpg"
                        style={{ opacity: 0, position: "absolute", right: "0px", top: "0px", cursor: 'pointer', zIndex: 9 }}
                        onChange={(event) => handleUploadDocument(event)}
                    />

                    <StyledButton w="60%" br="10px" p="0px" mt="-30px" ml="20%" c="#3766FE"
                        pos="absolute" bottom="0" bgc="#FFF" bs="0px 1px 4px rgba(0, 0, 0, 0.25)"
                        onClick={() => { window.open(previewFileUrl, "_blank") }}
                    >
                        Preview
                    </StyledButton>
                </StyledCard>

                :

                <StyledCard d="block !important" h="fit-content" b="1.75px dashed #DADADA" br="10px"
                    p="28px" m="10px auto 14px" w="auto">
                    <StyledIcon src={uploadIcon} w="42px" h="42px" mb="16.4px" ml="auto" mr="auto" d="block" />
                    <StyledText fs="14px" lh="17px" fw="400" mb="8px" mr="0px" maxh="17px">{documentName}</StyledText>
                    <StyledText fs="14px" lh="17px" fw="400" c="#8F8F8F" mb="31px" mr="0px">Size: {sizeLimit || 5}mb ( Format : {fileExtension || "pdf, jpg"} )</StyledText>
                    <StyledDiv d="flex" jc="center" style={{ position: 'relative' }}>
                        <StyledText fs="14px" lh="17px" fw="700" c="#3465FF" mr="0px" w="88px" m="auto">
                            Upload Now
                        </StyledText>
                        <input type="file" accept="application/pdf, image/jpeg, image/png, image/jpg"
                            style={{ opacity: 0, position: "absolute", top: 0, left: 0, cursor: 'pointer', zIndex: 9 }}
                            onChange={(event) => handleUploadDocument(event)}
                        />
                    </StyledDiv>
                </StyledCard>
            }
        </React.Fragment>
    )
}

export default DocumentUpload;