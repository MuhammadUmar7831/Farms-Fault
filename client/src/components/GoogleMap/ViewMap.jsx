import React, {useState, useCallback, useEffect} from "react";
import {GoogleMap, useJsApiLoader, MarkerF, OverlayView} from "@react-google-maps/api";
import convertToDMS from "../../utils/mapCordinatesConvertor";
function ViewMap({points, width, height, setSelectedPoint, setOpenInfo, location}) {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
        libraries: ["places"],
    });
    const [map, setMap] = useState(null);
    const onLoad = useCallback(
        (mapInstance) => {
            if (location.lat !== 0 && location.lng !== 0) {
                mapInstance.setCenter({lat: location.lat, lng: location.lng});
            }
            setMap(mapInstance);
        },
        [location]
    );
    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);
    useEffect(() => {
        if (map && isLoaded) {
            points.forEach((point, index) => {
                const overlayPosition = {
                    lat: point.location.latitude + 0.000022,
                    lng: point.location.longitude + 0.000015,
                };
                const div = document.createElement("div");
                div.className = "flex items-center space-x-2 rounded-md shadow-lg";
                div.innerHTML = `
                    <div class="text-white font-light">${convertToDMS(point.location.latitude, "lat")}</div>
                    <div class="text-white font-light">${convertToDMS(point.location.longitude, "lng")}</div>
                `;

                const overlayView = new window.google.maps.OverlayView();
                overlayView.onAdd = function () {
                    this.getPanes().overlayMouseTarget.appendChild(div);
                };
                overlayView.draw = function () {
                    const projection = this.getProjection();
                    const position = projection.fromLatLngToDivPixel(new window.google.maps.LatLng(overlayPosition));
                    if (div) {
                        div.style.position = "absolute";
                        div.style.left = `${position.x}px`;
                        div.style.top = `${position.y}px`;
                    }
                };
                overlayView.onRemove = function () {
                    if (div.parentNode) {
                        div.parentNode.removeChild(div);
                    }
                };
                overlayView.setMap(map);
            });
        }
    }, [map, points, isLoaded]);
    return isLoaded ? (
        <div className="rounded-xl lg:px-20 px-2">
            <GoogleMap
                mapContainerStyle={{width, height}}
                center={{lat: location.lat, lng: location.lng}}
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
            </GoogleMap>
        </div>
    ) : (
        <div>Loading Map...</div>
    );
}

export default React.memo(ViewMap);
