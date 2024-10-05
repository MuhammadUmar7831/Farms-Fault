import React, {useEffect, useState, useCallback} from "react";
import {GoogleMap, useJsApiLoader, MarkerF, OverlayView} from "@react-google-maps/api";
import {useGeolocation} from "../hooks/useGeoLocation";
import convertToDMS from "../utils/mapCordinatesConvertor";

const containerStyle = {
    width: "800px",
    height: "450px",
};
const points = [
    {lat: 40.0139, lng: -83.0104}, // Near a farm in Ohio
    {lat: 40.0141, lng: -83.0104}, // Slightly north of the first point, Ohio
    {lat: 40.0143, lng: -83.0104}, // Slightly further north, Ohio
];

function Map() {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCt0RICkMcvoqaM-8Yog82-5cEw1OC3TYM",
    });
    const [map, setMap] = useState(null);
    const onLoad = useCallback(function callback(map) {
        if (points[0].lat !== 0 && points[0].lng !== 0) {
            map.setCenter(points[0]);
        }
        setMap(map);
    }, []);
    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);
    return isLoaded ? (
        <div>
            <h1 className="text-3xl font-bold text-center">{points[0].lat}</h1>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={points[0]}
                zoom={35}
                mapTypeId="satellite"
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {points.map((point, index) => (
                    <MarkerF key={`marker-${index}`} position={point} icon={"./markerIcon.png"} />
                ))}
                {points.map((point, index) => (
                    <OverlayView
                        key={`overlay-${index}`}
                        position={{lat: point.lat + 0.000022, lng: point.lng + 0.000015}} // Adjusted for right positioning
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="text-white font-light">{`${convertToDMS(point.lat, "lat")}`}</div>
                            <div className="text-white font-light">{`${convertToDMS(point.lng, "lng")}`}</div>
                        </div>
                    </OverlayView>
                ))}
            </GoogleMap>
        </div>
    ) : (
        <div>Loading Map...</div>
    );
}

export default React.memo(Map);
