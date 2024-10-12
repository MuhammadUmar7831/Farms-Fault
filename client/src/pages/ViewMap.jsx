import {useEffect, useState} from "react";
import ViewMapComp from "../components/GoogleMap/ViewMap";
import {getAllErrorApiCall} from "../apis/error.api";
import ErrorInfo from "../components/viewMap/ErrorInfo";
import { useGeolocation } from "../hooks/useGeoLocation";
export default function ViewMap() {
    const [points, setPoints] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState({});
    const [openInfo, setOpenInfo] = useState(false);
    const [location, setLocation] = useState({lat: 40.0139, lng: -83.0104});
    const {isLoading, position, error, getPosition} = useGeolocation();
    useEffect(() => {
        getPosition();
    }, []);
    useEffect(() => {
        if (position) setLocation(position);
    }, [position]);

    useEffect(() => {
        async function getErrors() {
            setIsLoaded(true);
            const res = await getAllErrorApiCall();
            setPoints(res.data);
            console.log(res.data);
            setIsLoaded(false);
        }
        getErrors();
    }, []);


    return (
        <div className="w-[100%] bg-primary flex flex-col py-8 pt-14  lg:pt-4 ">
            <h1 className="heading font-light ml-2 lg:ml-14">View Map</h1>
            {!isLoaded && (
                <ViewMapComp location={location} setOpenInfo={setOpenInfo} setSelectedPoint={setSelectedPoint} points={points} width={"100%"} height={"70vh"} />
            )}
            {!isLoaded&&openInfo&&<ErrorInfo setOpenInfo={setOpenInfo}  selectedPoint={selectedPoint}/>}
        </div>
    );
}
