import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import docIcon from "../icons/doc.svg";
import { StyledIcon } from "../styledComponents/styles-one"


const items = [
    {
        label: "Dashboard",
        key: "/dashboard",
        icon: <StyledIcon src={docIcon} />
    },
    {
        label: "Contact",
        key: "/contact",
        icon: <StyledIcon src={docIcon} />
    },
    {
        label: "Test",
        key: "/test",
        icon: <StyledIcon src={docIcon} />
    }
]



const SideBar = () => {
    const navigate = useNavigate();

    const handleMenuChange = (event) => {
        navigate(event.key)
    }

    return (
        <Menu
            mode="inline"
            style={{ width: 200 }}
            onClick={handleMenuChange}
            items={items}
        />
    )
}

export default SideBar;