import ViewMapComp from "../components/GoogleMap/ViewMap";
export default function ViewMap() {
    const points = [
        {lat: 40.0139, lng: -83.0104}, // Near a farm in Ohio
        {lat: 40.0141, lng: -83.0104}, // Slightly north of the first point, Ohio
        {lat: 40.0143, lng: -83.0104}, // Slightly further north, Ohio
    ];

    return (
        <div className="h-[100vh] flex flex-col py-8 px-20">
            <h1 className="heading font-light ">View Map</h1>
            <ViewMapComp points={points} width={"100%"} height={"70vh"} />
        </div>
    );
}
