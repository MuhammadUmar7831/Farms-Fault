import Description from "./Description";
import ImageUploadSection from "./ImageUploadSection";
import SelectError from "./SelectError";
// primary: "#DACDBB",
// secondary: "#E7DBCA",
// tertiary: "#181C1E",
function ErrorForm({errors,description,setPoints,setType, photos, setPhotos, setDescription, children}) {
    return (
        <div className="flex flex-col space-y-4 mb-2 lg:mb-0 lg:w-[26%]">
            <SelectError errors={errors} setPoints={setPoints} setType={setType} />
            <ImageUploadSection errors={errors} images={photos} setImages={setPhotos} />
            <Description description={description} setDescription={setDescription} isEditable={true} />
            {children}
        </div>
    );
}
export default ErrorForm;
