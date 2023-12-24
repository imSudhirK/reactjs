import React, { useEffect, useState } from "react";
import {
    HorizontalLine, StyledCard, StyledDiv,
    StyledIcon, StyledText
} from "../../styledComponents/styles-one";
import pencilIcon from "../../icons/pencil-blue-icon.svg"
import deleteIcon from "../../icons/delete-icon.svg"
import { fetchNotes } from "../../api/notes";
import { Spin, message } from "antd";
import EditNotes from "./edit-notes";
import DeleteNotes from "./delete-notes";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [showEditNotes, setShowEditNotes] = useState(false);
    const [showDeleteNotes, setShowDeleteNotes] = useState(false);
    const [selectedNotes, setSelectedNotes] = useState({});
    const [isAddNotes, setIsAddNotes] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    const toggleEditNotes = () => { setShowEditNotes(!showEditNotes) }
    const toggleDeleteNotes = () => { setShowDeleteNotes(!showDeleteNotes) }

    const fetchAllNotes = () => {
        setIsLoading(true);
        fetchNotes().then(resp => {
            setNotes(resp.data);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            return message.error("Failed to fetch Notes")
        })
    }

    useEffect(() => {
        fetchAllNotes();
    }, [])
    return (
        <StyledDiv>
            <StyledText lh="50px" fs="24px" fw="550" mb="10px">Notes</StyledText>
            <StyledDiv d="flex" fwp="wrap" p="2%">
                <Spin spinning={isLoading} delay={false}>
                    {notes?.map(item => {
                        return (
                            <StyledCard>
                                <StyledText fs="20px" fw="520">{item.title}</StyledText>
                                <HorizontalLine />
                                <StyledText>{item.description}</StyledText>
                                <StyledDiv d="flex">
                                    <StyledIcon w="20px" h="20px" ml="220px" p="5px" bdr="0.5px dotted blue" br="50%" zi="1" hoverable={true}
                                        src={pencilIcon} onClick={() => { setIsAddNotes(false); setSelectedNotes(item); toggleEditNotes() }} />
                                    <StyledIcon w="20px" h="20px" ml="10px" p="5px" bdr="0.5px dotted red" br="50%" zi="1" hoverable={true}
                                        src={deleteIcon} onClick={() => { setSelectedNotes(item); toggleDeleteNotes() }} />
                                </StyledDiv>
                            </StyledCard>
                        )
                    })}
                </Spin>
            </StyledDiv>

            <EditNotes
                showModal={showEditNotes}
                toggleModal={toggleEditNotes}
                notes={selectedNotes}
                isAddNotes={isAddNotes}
                setSelectedNotes={setSelectedNotes}
                fetchAllNotes={fetchAllNotes}
            />

            <DeleteNotes
                showModal={showDeleteNotes}
                toggleModal={toggleDeleteNotes}
                notes={selectedNotes}
                fetchAllNotes={fetchAllNotes}
            />

            <StyledDiv onClick={() => { setSelectedNotes({}); setIsAddNotes(true); toggleEditNotes() }}>Add</StyledDiv>
        </StyledDiv>
    )
}

export default Notes;