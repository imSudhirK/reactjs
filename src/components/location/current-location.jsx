import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { StyledDiv, StyledText } from '../../styledComponents/styles-one';
import { getCurrentLatLong } from '../../helpers/utils-one';
import { getCurrentAddress } from '../../api/apis-one';
import { useDispatch } from 'react-redux';
import { setCurrentAddress } from '../../redux/actions/one';

const CurrentLocation = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [address, setAddress] = useState({})

    const helper = async () => {
        setIsLoading(true)
        try {
            const res = await getCurrentLatLong()
            if (res?.lat && res.lng) {
                setLatitude(res.lat);
                setLongitude(res.lng);
                const resp = await getCurrentAddress(res.lat, res.lng);
                setAddress(resp?.data?.address);
                dispatch(setCurrentAddress(resp?.data?.address));
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
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">Latitude:</StyledText><StyledText w="50%" ta="left">{latitude}</StyledText></StyledDiv>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">Longitude:</StyledText><StyledText w="50%" ta="left">{longitude}</StyledText></StyledDiv>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">Location:</StyledText><StyledText w="50%" ta="left">{address?.amenity}</StyledText></StyledDiv>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">Tehsil:</StyledText><StyledText w="50%" ta="left">{address?.county}</StyledText></StyledDiv>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">District:</StyledText><StyledText w="50%" ta="left">{address?.city_district}</StyledText></StyledDiv>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">State:</StyledText><StyledText w="50%" ta="left">{address?.state}</StyledText></StyledDiv>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">Country:</StyledText><StyledText w="50%" ta="left">{address?.country}</StyledText></StyledDiv>
            <StyledDiv d="flex"><StyledText w="45%" ta="right" mr="5%">PostCode:</StyledText><StyledText w="50%" ta="left">{address?.postcode}</StyledText></StyledDiv>
        </Spin>
    );
};
export default CurrentLocation;
