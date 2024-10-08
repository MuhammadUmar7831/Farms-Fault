import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function ReportErrorConfirmation() {
    const [points, setPoints] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const data = localStorage.getItem("points");
        if (data) {
            setPoints(JSON.parse(data));
        } else {
            navigate("/dashboard");
        }
    }, []);
    useEffect(() => {
        if (!points) return;
        localStorage.clear();
    }, [points]);

    if (!points) {
        return <>Loading...</>;
    }

    return (
        <section className=" flex justify-center items-center h-[100vh] w-full px-4">
            <div className="flex flex-col  rounded-xl border-4 border-tertiary  lg:w-1/2">
                <div className="flex flex-col xl:flex-row items-center justify-center bg-tertiary py-2  gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.95329 16.4908L5.38423 11.9207L6.90689 10.398L9.95329 13.4434L16.0439 7.35164L17.5677 8.87537L9.95329 16.4908Z"
                            fill="#DACDBB"
                            fill-opacity="0.78"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 11.8453C0 5.30347 5.30347 0 11.8453 0C18.3872 0 23.6906 5.30347 23.6906 11.8453C23.6906 18.3872 18.3872 23.6906 11.8453 23.6906C5.30347 23.6906 0 18.3872 0 11.8453ZM11.8453 21.5369C10.5726 21.5369 9.31233 21.2863 8.13649 20.7992C6.96065 20.3122 5.89225 19.5983 4.9923 18.6983C4.09235 17.7984 3.37847 16.73 2.89142 15.5541C2.40437 14.3783 2.15369 13.118 2.15369 11.8453C2.15369 10.5726 2.40437 9.31233 2.89142 8.13649C3.37847 6.96065 4.09235 5.89225 4.9923 4.9923C5.89225 4.09235 6.96065 3.37847 8.13649 2.89142C9.31233 2.40437 10.5726 2.15369 11.8453 2.15369C14.4157 2.15369 16.8808 3.17477 18.6983 4.9923C20.5159 6.80983 21.5369 9.27494 21.5369 11.8453C21.5369 14.4157 20.5159 16.8808 18.6983 18.6983C16.8808 20.5159 14.4157 21.5369 11.8453 21.5369Z"
                            fill="#DACDBB"
                            fill-opacity="0.78"
                        />
                    </svg>
                    <p className="text-secondary font-bold">Thank You!</p>
                    <p className="text-center lg:text-left text-secondary font-light ">
                        {" "}
                        Your error has been reported and you’ve earned {points} points
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center space-x-3 space-y-2 py-2 text-sm lg:text-md">
                    <button onClick={() => navigate("/dashboard")} className="flex justify-center items-center  gap-2 ">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 8.88985H3.0625L8.32812 14.7412L7.20312 16L0 8.00434L7.20312 0L8.32812 1.25882L3.0625 7.11015H16V8.88985Z"
                                fill="#181C1E"
                            />
                        </svg>
                        Back To DashBoard
                    </button>
                    <button
                        onClick={() => navigate("/report-error")}
                        className=" flex justify-center items-center p-2  border-2 border-tertiary rounded-full px-4 gap-2
                    text-xs lg:text-md
                    "
                    >
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.19912 0.909257C7.72222 0.51918 11.2776 0.51918 14.8007 0.909257C16.7514 1.12789 18.3251 2.66404 18.554 4.62152C18.9715 8.19486 18.9715 11.8047 18.554 15.378C18.3251 17.3355 16.7514 18.8716 14.8007 19.0903C11.2776 19.4803 7.72222 19.4803 4.19912 19.0903C2.24847 18.8716 0.674745 17.3355 0.44586 15.378C0.0284633 11.805 0.0284633 8.19562 0.44586 4.62266C0.561632 3.67167 0.995161 2.78765 1.67618 2.11386C2.35721 1.44007 3.24581 1.01601 4.19798 0.910396M9.49992 4.31407C9.72643 4.31407 9.94366 4.40405 10.1038 4.56421C10.264 4.72438 10.354 4.94161 10.354 5.16812V9.14571H14.3316C14.5581 9.14571 14.7753 9.23569 14.9355 9.39585C15.0956 9.55602 15.1856 9.77325 15.1856 9.99976C15.1856 10.2263 15.0956 10.4435 14.9355 10.6037C14.7753 10.7638 14.5581 10.8538 14.3316 10.8538H10.354V14.8314C10.354 15.0579 10.264 15.2751 10.1038 15.4353C9.94366 15.5955 9.72643 15.6855 9.49992 15.6855C9.27341 15.6855 9.05618 15.5955 8.89602 15.4353C8.73585 15.2751 8.64587 15.0579 8.64587 14.8314V10.8538H4.66828C4.44177 10.8538 4.22454 10.7638 4.06438 10.6037C3.90421 10.4435 3.81423 10.2263 3.81423 9.99976C3.81423 9.77325 3.90421 9.55602 4.06438 9.39585C4.22454 9.23569 4.44177 9.14571 4.66828 9.14571H8.64587V5.16812C8.64587 4.94161 8.73585 4.72438 8.89602 4.56421C9.05618 4.40405 9.27341 4.31407 9.49992 4.31407Z"
                                fill="#181C1E"
                            />
                        </svg>
                        Report another error
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ReportErrorConfirmation;
