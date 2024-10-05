import ImageUpload from "./ImageUpload";
// primary: "#DACDBB",
// secondary: "#E7DBCA",
// tertiary: "#181C1E",
function ErrorForm() {
    return (
        <div className="flex flex-col">
            <div className="relative inline-block w-[55%] border-b-2 border-tertiary">
                <select className="block appearance-none promoTest w-full py-3 text-xl bg-primary  focus:outline-none">
                    <option value="" disabled selected>
                        Select Error Type
                    </option>
                    <option value="404" className="">404 - Not Found</option>
                </select>
                <div className="absolute inset-y-7 right-0 flex items-center  pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                    </svg>
                </div>
            </div>

            <p className="text-xs font-light text-[#181C1E]">Uploaded Photos</p>
            <ImageUpload />
            
            <div className="flex flex-col">
                <h6 className="txt promoTest text-tertiary text-lg">Description (Optional)</h6>
                <textarea
                    className="bg-secondary 
                rounded-xl shadow-md p-4 placeholder:text-xs placeholder:font-thin  "
                    placeholder="Write Description here"
                    name=""
                    id=""
                    cols="40"
                    rows="5"
                ></textarea>
            </div>
            <button className="bg-tertiary text-white txt-lg promoTest font-light  p-4">Report Error</button>
        </div>
    );
}

export default ErrorForm;
