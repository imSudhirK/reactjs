import styled from 'styled-components';
import { Button, Card, Input } from 'antd';


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
    flexDirection: props.fd || "",
    justifyContent: props.jc || "",
    margin: props.margin || "",
    marginLeft: props.ml || "",
    marginRight: props.mr || "",
    marginBottom: props.mb || "",
    marginTop: props.mt || "",
    width: props.w || "",
    top: props.t || "",
    position: props.ps || "",
    zIndex: props.zi || "",
    overflow: props.ov || "",
    height: props.h || "",
    boxShadow: props.bs || "",
    border: props.b || "none",
    backgroundColor: props.bgc || "",
    borderRadius: props.br || "",
    padding: props.p || "",
    backgroundRepeat: "no-repeat",
    backgroundSize: props.bs || "cover",
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
    maxWidth: props.mw || "",
    textAlign: props.ta || "",
}));

export const StyledText = styled.p((props) => ({
    display: props.d || "",
    position: props.pos || "",
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
    border: props.b || "",
    borderRadius: props.br || "",
    padding: props.pd || "",
    justifyContent: props.jc || "",
    textDecorationLine: props.tdl || "",
    top: props.t || "",
    left: props.l || "",
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
    fontSize: props.fs || "",
    fontWeight: props.fw || "",
    lineHeight: props.lh || "",
    backgroundSize: props.bgs || "",
    backgroundRepeat: props.bgr || "no-repeat",
    backgroundImage: props.bgi || "",
    backgroundPosition: props.bgp || "",
    paddingRight: props.pr || "",
    paddingLeft: props.pl || "",
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
    color: props.c || "",
    visibility: props.hide ? "hidden" : "",
    marginTop: props.mt || "",
    marginRight: props.mr || "",
    marginBottom: props.mb || "",
    marginLeft: props.ml || "",
    margin: props.m || "",
    padding: props.p || "",
    border: props.bdr || "",
    borderRadius: props.br || "",
    background: props.bgc || "",
    position: props.position || "",
    top: props.top || "",
    bottom: props.b || "",
    right: props.right || "",
    boxShadow: props.bs || "",
    display: props.d || "",
    zIndex: props.zi || ""
}));

export const StyledCard = styled(Card)((props) => ({
    width: props.w || "342px",
    height: props.h || "77px",
    margin: props.m || "auto",
    marginTop: props.mt || "",
    marginRight: props.mr || "",
    marginBottom: props.mb || "8px",
    marginLeft: props.ml || "",
    backgroundColor: props.bgc || "#FFFFFF",
    border: props.b || "",
    borderRadius: props.br || "4px",
    "&:hover": {
        cursor: props.hoverableCard ? "pointer" : ""
    },
    ".ant-card-body": {
        paddingLeft: props.squarecard ? "" : "4px",
        padding: props.p || "",
        width: props.w || "342px",
        height: props.h || "77px",
        display: props.bd || "",
        flexDirection: props.bfd || "",
        alignItems: props.ai || ""
    },
}));

export const StyledImage = styled.img`
  display: ${props => (!props.d ? "block" : null)};
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m || ""}
  margin-top: ${props => props.mt || "auto"};
  margin-right: ${props => props.mr || "auto"};
  margin-bottom: ${props => props.mb || ""};
  margin-left: ${props => props.ml || "auto"};
  padding: ${props => props.p || ""};
  vertical-align: middle;
  object-fit: contain;
  cursor: ${props => props.hoverable ? "pointer" : props.disabled ? "not-allowed" : ""};
`;