function Description({setDescription}) {
    return (
        <div className="flex flex-col space-y-2">
            <h6 className="txt promoTest text-tertiary text-lg">Description (Optional)</h6>
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="bg-secondary 
        rounded-xl shadow-md p-4 placeholder:text-xs placeholder:font-thin  "
                placeholder="Write Description here"
                name=""
                id=""
                cols="40"
                rows="5"
            ></textarea>
        </div>
    );
}

export default Description;
