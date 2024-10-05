import Map from "../components/Map";
import ErrorForm from "../components/ErrorForm";
export default function ReportError() {
    return (
        <div className="flex justify-center items-center">
          <ErrorForm/>
            <Map />
        </div>
    );
}
