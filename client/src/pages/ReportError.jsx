import {useState} from "react";
import ReportErrorMap from "../components/GoogleMap/ReportErrorMap";
import ErrorForm from "../components/reportAnError/ErrorForm";
import {addErrorApiCall} from "../apis/error.api"
export default function ReportError() {
    const [type, setType] = useState("");
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(1);
    const [location, setLocation] = useState({lat: 40.0139, lng: -83.0104});

    const handleSubmit = async () => {
        const body={
            type,
            photos,
            description,
            location: {
                latitude: location.lat,  // Ensure to extract the right values
                longitude: location.lng,
            },
            points
        }
        await addErrorApiCall(body);
    };

    return (
        <div className="flex flex-col  space-y-10 py-8">
            <h1 className="heading font-light ml-14">Report an error</h1>
            <div className="flex justify-center  space-x-12 h-[100vh]">
                <ErrorForm setType={setType} photos={photos} setPhotos={setPhotos} setDescription={setDescription}>
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
