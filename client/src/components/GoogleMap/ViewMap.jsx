import React, { useState, useCallback} from "react";
import {GoogleMap, useJsApiLoader, MarkerF, OverlayView} from "@react-google-maps/api";
import convertToDMS from "../../utils/mapCordinatesConvertor";


function ViewMap({points,width,height}) {
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
        <div className="rounded-xl ">
            <GoogleMap 
                mapContainerStyle={{width:width,height:height}}
                center={points[0]}
                zoom={20}
                mapTypeId="satellite"
                onLoad={onLoad}
                onUnmount={onUnmount}                
            >
                {points?.map((point, index) => (
                    <MarkerF key={`marker-${index}`} position={point} icon={"./markerIcon.png"} />
                ))}
                {points?.map((point, index) => (
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

export default React.memo(ViewMap);
