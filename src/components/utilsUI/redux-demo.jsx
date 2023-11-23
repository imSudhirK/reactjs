import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { StyledDiv, StyledText } from '../../styledComponents/styles-one';
import { getCurrentLatLong } from '../../helpers/utils-one';
import { getCurrentAddress } from '../../api/apis-one';
import { useDispatch } from 'react-redux';
import { setCurrentAddress } from '../../redux/actions/one';
import store from '../../redux/store';

const ReduxDemo = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    const [address, setAddress] = useState({})
    const helper = async () => {
        setIsLoading(true)
        try {
            const res = await getCurrentLatLong()
            if (res?.lat && res.lng) {
                const resp = await getCurrentAddress(res.lat, res.lng);
                dispatch(setCurrentAddress(resp?.data?.address));
                
                const myAddress = store.getState()?.reducerOne?.currentAddress;
                console.log("myAddress", myAddress, "myAddress")
                setAddress(myAddress);
            }
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        helper()
    }, [])

    return (
        <Spin spinning={isLoading} delay={500}>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">PostCode:</StyledText><StyledText w="50%" ta="left">{address?.postcode}</StyledText></StyledDiv>
        </Spin>
    );
}
export default ReduxDemo;