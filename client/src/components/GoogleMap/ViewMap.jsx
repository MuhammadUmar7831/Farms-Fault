import React, {useState, useCallback} from "react";
import {GoogleMap, useJsApiLoader, MarkerF, OverlayView} from "@react-google-maps/api";
import convertToDMS from "../../utils/mapCordinatesConvertor";

function ViewMap({points, width, height, setSelectedPoint,setOpenInfo,location}) {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCt0RICkMcvoqaM-8Yog82-5cEw1OC3TYM",
    });
    const [map, setMap] = useState(null);
    const onLoad = useCallback(
        (map) => {
            if (location.lat !== 0 && location.lng !== 0) {
                map.setCenter({lat: location.lat, lng: location.lng});
            }
            setMap(map);
        },
        [points]
    );

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div className="rounded-xl">
            <GoogleMap
                mapContainerStyle={{width, height}}
                center={{lat: location.lat, lng:location.lng}}
                zoom={20}
                mapTypeId="satellite"
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {points.map((point, index) => (
                    <MarkerF
                        key={`marker-${index}`}
                        position={{lat: point.location.latitude, lng: point.location.longitude}}
                        icon="./markerIcon.png"
                        onClick={() => {
                            setSelectedPoint(point);
                            setOpenInfo(true);
                        }}
                    />
                ))}
                {points.map((point, index) => (
                    <OverlayView
                        key={`overlay-${index}`}
                        position={{lat: point.location.latitude + 0.000022, lng: point.location.longitude + 0.000015}}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div className="flex items-center space-x-2  rounded-md shadow-lg">
                            <div className="text-white font-light">{convertToDMS(point.location.latitude, "lat")}</div>
                            <div className="text-white font-light">{convertToDMS(point.location.longitude, "lng")}</div>
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
