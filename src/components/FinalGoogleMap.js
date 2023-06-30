import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const FinalGoogleMap = () => {
    const [selectedPosition, setSelectedPosition] = useState({ lat: 28.6129, lng: 77.2295 });

    const handleUseCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                    setSelectedPosition(currLocation);
                    console.log("currLocation\n", currLocation);
                },
                (error) => {
                    // message.info(error.message);
                    console.log(error.message)
                }
            );
        } else {
            // message.info('Geolocation is not supported by your browser.');
            console.log('Geolocation is not supported by your browser.');
        }
    }

    const handleOnclickMarker = (mapProps, map, event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }
        setSelectedPosition(newLocation);
    };

    return (
        <React.Fragment>
            
            <div style={{ height: "450px", width: "800px" }}>
                <Map
                    containerStyle={{ height: "400px" }}
                    google={window.google}
                    zoom={14}
                    onClick={handleOnclickMarker}
                    initialCenter={selectedPosition}
                >
                    <Marker position={selectedPosition} />
                </Map>
            </div>
            <button onClick={handleUseCurrentLocation}>use my current location</button>
        </React.Fragment>
    );
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD00IKU5IKA3oHXt_9SmP6KXM3bCSuxZCQ',
})(FinalGoogleMap);