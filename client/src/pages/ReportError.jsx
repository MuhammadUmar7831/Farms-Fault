import {useEffect, useState} from "react";
import ReportErrorMap from "../components/GoogleMap/ReportErrorMap";
import ErrorForm from "../components/reportAnError/ErrorForm";
import {addErrorApiCall} from "../apis/error.api";
import {useGeolocation} from "../hooks/useGeoLocation";
export default function ReportError() {
    const [type, setType] = useState("");
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(0);
    const [location, setLocation] = useState({lat: 40.0139, lng: -83.0104});
    const {isLoading, position, error, getPosition} = useGeolocation();
    const [errors, setErrors] = useState({type: false, photos: false});
    useEffect(() => {
        getPosition();
    }, []);
    useEffect(() => {
        if (position) setLocation(position);
    }, [position]);

    const handleSubmit = async () => {
        if (type === "") {
            setErrors((prevErrors) => ({ ...prevErrors, type: true }));
            return;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, type: false }));
        }
    
        if (photos.length === 0) {
            setErrors((prevErrors) => ({ ...prevErrors, photos: true }));
            return;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, photos: false }));
        }

        const body = {
            type,
            photos,
            description,
            location: {
                latitude: location.lat,
                longitude: location.lng,
            },
            points,
        };
        const res = await addErrorApiCall(body);
        setType("");
        setPhotos([]);
        setDescription("");
        setPoints(0);
        console.log(res);
    };

    return (
        <div className="flex flex-col overflow-x-auto space-y-10 py-8">
            <h1 className="heading font-light ml-14">Report an error</h1>
            <div className="flex flex-col items-center lg:items-start justify-center  space-x-12 lg:h-[100vh] lg:flex-row">
                <ErrorForm
                    description={description}
                    setType={setType}
                    photos={photos}
                    setPoints={setPoints}
                    setPhotos={setPhotos}
                    setDescription={setDescription}
                    errors={errors}
                >
                    <button
                        onClick={() => handleSubmit()}
                        className="bg-tertiary text-white txt-lg promoTest font-light  p-4"
                    >
                        Report Error
                    </button>
                </ErrorForm>
                <ReportErrorMap point={location} setPoint={setLocation} />
            </div>
        </div>
    );
}
