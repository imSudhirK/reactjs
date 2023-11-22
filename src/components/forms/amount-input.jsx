import React from "react";
import { StyledDiv, StyledIcon, StyledInput, StyledText } from "../../styledComponents/styles-one";
import { addCommas } from "../../helpers/utils-one";
import rupeeIcon from "../../icons/rupee-icon.svg"
import pencilIcon from "../../icons/pencil-blue-icon.svg"

const AmountInputForm = (props) => {
    const { amount, setAmount } = props;

    const handleAmountChange = (event) => {
        const amountEntered = event.target.value?.toString().replace(/\D/g, '');
        setAmount(amountEntered)
    }

    return (
        <React.Fragment>
            <StyledText fs="18px" lh="22px" fw="500" ta="left" mt="20px" mb="8px">Enter Amount</StyledText>
            <StyledDiv d="flex">
                <StyledInput h="40px" pl="25px" bgp="5px 10px" fs="24px" fw="500" lh="28px"
                    name="amount"
                    placeholder="0"
                    bgi={`url(${rupeeIcon})`}
                    value={addCommas(amount)}
                    onChange={handleAmountChange}
                    style={{ border: !amount ? "2px solid red" : "" }}
                />
                <StyledIcon src={pencilIcon} m="5px 0px 0px -35px" ml="-45px" zi="1" />
            </StyledDiv>
        </React.Fragment>
    )
}

export default AmountInputForm;