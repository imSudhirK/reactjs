import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const MapContainer = () => {
    const [initialPosition, setInitialPosition] = useState({ lat: 28.6129, lng: 77.2295 });
    const [selectedPosition, setSelectedPosition] = useState({ lat: 28.6129, lng: 77.2295 })

    const handleOnclickMarker = (mapProps, map, event) => {
        console.log("evebrb\n", event, "\nenebfhrhb");
        const { latLng } = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        console.log('Clicked location:', { lat, lng });
        setSelectedPosition({ lat, lng });
    };

    return (
        <div>
            <Map
                google={window.google}
                zoom={14}
                onClick={handleOnclickMarker}
                initialCenter={initialPosition}
            >
                <Marker position={selectedPosition} />

            </Map>

        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD00IKU5IKA3oHXt_9SmP6KXM3bCSuxZCQ',
})(MapContainer);