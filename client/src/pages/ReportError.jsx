import {useEffect, useState} from "react";
import ReportErrorMap from "../components/GoogleMap/ReportErrorMap";
import ErrorForm from "../components/reportAnError/ErrorForm";
import {addErrorApiCall} from "../apis/error.api";
import {useGeolocation} from "../hooks/useGeoLocation";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import Loader from "../svgs/Loader";
export default function ReportError() {
    const [type, setType] = useState("");
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(0);
    const [location, setLocation] = useState({lat: 40.0139, lng: -83.0104});
    const {isLoading, position, error, getPosition} = useGeolocation();
    const [errors, setErrors] = useState({type: false, photos: false});
    const [disable, setDisable] = useState(false);
    const [loadApi, setLoadApi] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        getPosition();
    }, []);
    useEffect(() => {
        if (position) setLocation(position);
    }, [position]);

    const handleSubmit = async () => {
        if (type === "") {
            setErrors((prevErrors) => ({...prevErrors, type: true}));
            toast.error("Please Select Type of Error");
            return;
        } else {
            setErrors((prevErrors) => ({...prevErrors, type: false}));
        }

        if (photos.length === 0) {
            setErrors((prevErrors) => ({...prevErrors, photos: true}));
            toast.error("Please Select At least One Picture");
            return;
        } else {
            setErrors((prevErrors) => ({...prevErrors, photos: false}));
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
        setDisable(true);
        setLoadApi(true);
        const res = await addErrorApiCall(body);
        setLoadApi(false);
        setDisable(false);
        if (res.message === "Error with this location and type already exists for this user") {
            toast.error("Error with this location and type already exists for your Account");
            return;
        }
        setType("");
        setPhotos([]);
        setDescription("");
        localStorage.setItem("points", points);
        setPoints(0);
        navigate('/report-confirmation');
    };

    return (
        <div className="flex flex-col w-[100%] px-10 overflow-x-auto space-y-10 pt-4 bg-primary">
            <h1 className="heading font-light lg:ml-14">Report an error</h1>
            <div className="flex flex-col items-center lg:items-start justify-center w-[100%] space-x-0 lg:space-x-12 lg:flex-row">
                <ErrorForm
                    setDisable={setDisable}
                    disable={disable}
                    description={description}
                    type={type}
                    setType={setType}
                    photos={photos}
                    setPoints={setPoints}
                    setPhotos={setPhotos}
                    setDescription={setDescription}
                    errors={errors}
                >
                    <button
                        onClick={() => handleSubmit()}
                        className={`bg-tertiary text-white txt-lg promoTest font-light  p-4  ${
                            disable ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                        }`}
                        disabled={disable}
                    >
                        {(isLoading||disable||loadApi) ? <Loader color={"white"} className={"animate-spin w-[28px] h-[28px] mx-auto" }/> : "Report Error"}
                    </button>
                </ErrorForm>
                <ReportErrorMap point={location} setPoint={setLocation} />
            </div>
        </div>
    );
}
