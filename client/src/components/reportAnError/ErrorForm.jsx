import Description from "./Description";
import ImageUploadSection from "./ImageUploadSection";
import SelectError from "./SelectError";
// primary: "#DACDBB",
// secondary: "#E7DBCA",
// tertiary: "#181C1E",
function ErrorForm({setType, photos, setPhotos, setDescription, children}) {
    return (
        <div className="flex flex-col space-y-4 w-[26%]">
            <SelectError setType={setType} />
            <ImageUploadSection images={photos} setImages={setPhotos} />
            <Description setDescription={setDescription} />
            {children}
        </div>
    );
}

export default ErrorForm;
