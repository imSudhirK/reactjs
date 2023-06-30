import React, { useEffect, useState } from 'react';

const CurrentLocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by your browser.');
        }
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (latitude && longitude) {
        return (
            <div>
                Latitude: {latitude}<br />
                Longitude: {longitude}
            </div>
        );
    }

    return <div>Loading...</div>;
};

export default CurrentLocation;
