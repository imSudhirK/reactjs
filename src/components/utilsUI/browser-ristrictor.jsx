import React from "react";
import { Modal } from "antd";
import { StyledIcon, StyledText } from "../../styledComponents/styles-one"
import warningIcon from "../../icons/browser-warning.svg"

const BrowserRestrictor = () => {
    const [safariAgent, setSafariAgent] = React.useState()
    const [firefoxAgent, setFirefoxAgent] = React.useState()

    React.useEffect(() => {
        const isSafariAgent = navigator.vendor &&
            navigator.vendor.indexOf('Apple') > -1 &&
            navigator.userAgent &&
            navigator.userAgent.indexOf('CriOS') === -1 &&
            navigator.userAgent.indexOf('FxiOS') === -1;

        setSafariAgent(isSafariAgent);
        const isFirefoxAgent = navigator.userAgent.indexOf('Firefox') > -1;
        setFirefoxAgent(isFirefoxAgent);
    }, [])

    return (
        <Modal
            open={safariAgent || firefoxAgent}
            footer={null}
            closable={false}
        >
            <StyledIcon src={warningIcon} h="170px" w="170px" ml="31%" mt="20px" />
            <StyledText fs="20px" lh="30px" fw="500" mr="0px" mt="15px">
                Browser doesn't support this website. Switch to "Google Chrome" browser for seamless experience.
            </StyledText>
        </Modal>
    )
}

export default BrowserRestrictor;