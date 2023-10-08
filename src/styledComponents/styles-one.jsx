import styled from 'styled-components';
import { Button, Input } from 'antd';


export const HorizontalLine = styled.div((props) => ({
    width: props.w || "",
    maxWidth: props.maxW || "",
    border: props.border || "1px solid rgba(0, 0, 0, 0.25)",
    marginBottom: props.mb || "38px",
    marginLeft: props.ml || "",
    marginRight: props.mr || "",
    margin: props.m || "",
    flex: props.flex || "",
}));

export const StyledDiv = styled.div((props) => ({
    display: props.d || "",
    justifyContent: props.jc || "",
    marginLeft: props.ml || "",
    marginRight: props.mr || "",
    margin: props.margin || "",
    width: props.w || "",
    marginBottom: props.mb || "",
    top: props.t || "",
    position: props.ps || "",
    zIndex: props.zI || "",
    marginTop: props.mt || "",
    overflow: props.ov || "",
    height: props.h || "",
    boxShadow: props.boxS || "",
    border: props.b || "none",
    backgroundColor: props.bgc || "",
    borderRadius: props.br || "",
    padding: props.p || "",
    background: props.bgurl ? props.bgurl : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: props.bs || "cover",
    flexDirection: props.fd || "",
    background: props.bg || "",
    color: props.c || "",
    paddingTop: props.pt || "",
    paddingBottom: props.pb || "",
    bottom: props.btm || "",
    borderTop: props.brt || '',
    borderLeft: props.brl || "",
    borderRight: props.brr || "",
    borderBottom: props.brb || "",
    cursor: props.hoverable ? "pointer" : "",
    maxHeight: props.mh || "",
    textAlign: props.ta || "",
}));

export const StyledText = styled.p((props) => ({
    display: props.d || "",
    position: props.pos || "",
    left: props.pos === "absolute" ? props.left : "",
    top: props.pos === "absolute" ? props.top : "",
    fontFamily: props.ff || "Lato",
    color: props.c || "#000",
    fontSize: props.fs || "16px",
    lineHeight: props.lh || "24px",
    fontWeight: props.fw || "500",
    width: props.w || "",
    maxWidth: props.maxW || "",
    height: props.h || "",
    marginTop: props.mt || "0px",
    marginRight: props.mr || "4px",
    marginLeft: props.ml || "",
    marginBottom: props.mb || "0px",
    textAlign: props.ta || "center",
    letterSpacing: props.ls || "0px",
    margin: props.margin || "",
    alignItems: props.ai || "",
    alignSelf: props.aself || "",
    opacity: props.opac || "",
    backgroundColor: props.bgc || "",
    borderRadius: props.br || "",
    padding: props.pd || "",
    height: props.h || "",
    justifyContent: props.jc || "",
    textDecorationLine: props.tdl || "",
    top: props.top || "",
    left: props.left || "",
    transform: props.tf || "",
    "&:hover": {
        cursor: props.hoverable ? "pointer" : ""
    }
}));

export const StyledButton = styled(Button)((props) => ({
    display: props.d || "",
    width: props.w || "104px",
    margin: props.m || "",
    height: props.h || "32px",
    border: props.b || "none",
    borderRadius: props.br || "8px",
    padding: props.p || "6px 18px 7px 22px",
    cursor: props.disabled ? "not-allowed" : "pointer",
    color: props.c || "#fff",
    backgroundColor: props.disabled ? "#808080" : props.bgc || "#3766FE",
    fontSize: props.fs || "16px",
    fontWeight: props.fw || "500",
    lineHeight: props.lh || "19.2px",
    letterSpacing: props.ls || "0.15px",
    fontFamily: "Lato",
    marginBottom: props.mb || "",
    marginLeft: props.ml || "",
    marginRight: props.mr || "",
    marginTop: props.mt || "",
    background: props.bcg || "",
    marginTop: props.mt || "",
    alignSelf: props.as || "",
    textAlign: props.ta || "",
    "&:focus": {
        color: props.c || "#fff",
        backgroundColor: props.disabled ? "#808080" : props.bgc || "#3766FE",

    },
    "&:hover": {
        color: props.c || "#fff",
        backgroundColor: props.disabled ? "#808080" : props.bgc || "#3766FE",
    },
    "&:disabled": {
        "&:hover": {
            backgroundColor: props.disabledHoverBgc || "#808080",
            color: props.c || ""
        },
        backgroundColor: props.disabledbgc || "#808080",
        color: props.c || "#fff"
    }
}));

export const StyledInput = styled(Input)((props) => ({
    width: props.w || "",
    height: props.h || '',
    backgroundSize: props.bgs || "",
    backgroundRepeat: props.bgr || '',
    paddingRight: props.p || '',
    backgroundImage: props.bgi || "",
    backgroundPosition: props.bgp || "",
    paddingRight: props.pr || "",
    border: props.b || "",
    margin: props.margin || "",
    color: props.c || "",
    ".ant-input-group-addon": {
        height: props.h || ""
    },
    ".ant-input-group > .ant-input:last-child": {
        height: props.h || "",
        color: props.c || ""
    },
    ".ant-input-group": {
        border: props.inputGrpB || "",
        borderRadius: props.inputGrpBR || ""
    },
    ".ant-input": {
        border: props.inputB || "",
    }
}))

export const StyledIcon = styled.img((props) => ({
    width: props.w || "32px",
    height: props.h || "32px",
    cursor: props.hoverable ? "pointer" : "",
    transform: props.hoverable ? props.transform || "" : "",
    marginRight: props.mr || "",
    color: props.c || "",
    marginLeft: props.ml || "",
    visibility: props.hide ? "hidden" : "",
    marginTop: props.mt || "",
    marginBottom: props.mb || "",
    marginRight: props.mr || "",
    margin: props.margin || "",
    padding: props.p || "",
    border: props.bdr || "",
    borderRadius: props.br || "",
    background: props.bgc || "",
    position: props.position || "",
    top: props.top || "",
    bottom: props.bottom || "",
    right: props.right || "",
    bottom: props.bottom || "",
    boxShadow: props.bs || "",
    display: props.d || ""
}));