function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="bg-[#181C1ECC] text-white py-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4  lg:px-20">
                    <div className="flex flex-col lg:w-1/2 lg:p-20">
                        <h1 className="text-7xl text-secondary">Farm Faults</h1>
                        <p className="text-secondary font-semibold mt-2 lg:mt-0 text-xl">
                            Cultivating a better tomorrow, one error at a time
                        </p>
                    </div>
                    <div className="flex flex-col lg:w-1/2 py-14 space-y-4">
                        <h2 className="text-4xl font-semibold text-secondary">Ready To Play</h2>
                        <p className="font-semibold text-wrap lg:w-3/4 text-secondary">
                            Sign up now and start spotting errors! Together, we can cultivate a more informed and
                            resilient farming community.
                        </p>
                        <button className=" lg:w-[25%] flex justify-center items-center gap-2 bg-secondary text-tertiary rounded-xl py-2 px-4">
                            Get Started
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.9"
                                    d="M8.32795 14.3139L14.096 8.54587C14.201 8.43616 14.2834 8.30678 14.3383 8.16518C14.4536 7.88432 14.4536 7.56929 14.3383 7.28843C14.2834 7.14682 14.201 7.01745 14.096 6.90774L8.32795 1.13968C8.22039 1.03212 8.0927 0.946799 7.95216 0.888588C7.81163 0.830376 7.661 0.800415 7.50889 0.800415C7.20168 0.800415 6.90705 0.922453 6.68982 1.13968C6.47259 1.35691 6.35056 1.65154 6.35056 1.95875C6.35056 2.26595 6.47259 2.56058 6.68982 2.77781L10.4967 6.57319L1.74083 6.57319C1.43487 6.57319 1.14145 6.69473 0.925101 6.91108C0.708757 7.12742 0.587217 7.42085 0.587217 7.7268C0.587217 8.03276 0.708757 8.32619 0.925101 8.54253C1.14145 8.75887 1.43487 8.88041 1.74083 8.88041L10.4967 8.88041L6.68982 12.6758C6.5817 12.783 6.49587 12.9106 6.43731 13.0512C6.37874 13.1918 6.34859 13.3426 6.34859 13.4949C6.34859 13.6472 6.37874 13.7979 6.43731 13.9385C6.49587 14.0791 6.5817 14.2067 6.68982 14.3139C6.79707 14.422 6.92466 14.5079 7.06523 14.5664C7.20581 14.625 7.3566 14.6552 7.50889 14.6552C7.66118 14.6552 7.81196 14.625 7.95254 14.5664C8.09312 14.5079 8.22071 14.422 8.32795 14.3139Z"
                                    fill="#181C1E"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex  justify-center">
                    <ul className="flex flex-col items-center lg:flex-row  gap-6 ">
                        <li className="text-primary">About us</li>
                        <li className="text-primary">Contact us</li>
                        <li className="text-primary">Privacy Policy</li>
                        <li className="text-primary">Term of service</li>
                    </ul>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row px-4 space-y-4 justify-center items-center lg:space-y-0   space-x-5 py-3">
                <div className="flex opacity-60 items-center space-x-2 font-semibold">
                    <p>CopyRight</p>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.5"
                            d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.6309C2.12798 10.3747 1.99183 8.99237 2.2571 7.65875C2.52238 6.32513 3.17716 5.10013 4.13864 4.13864C5.10013 3.17716 6.32514 2.52237 7.65876 2.2571C8.99238 1.99183 10.3747 2.12798 11.631 2.64833C12.8872 3.16868 13.9609 4.04987 14.7164 5.18045C15.4718 6.31104 15.875 7.64025 15.875 9C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM6.5 9C6.5 9.52471 6.6651 10.0361 6.9719 10.4618C7.2787 10.8874 7.71165 11.2058 8.20943 11.3717C8.70721 11.5376 9.24458 11.5427 9.74542 11.3863C10.2463 11.2298 10.6852 10.9198 11 10.5C11.0996 10.3674 11.2477 10.2798 11.4119 10.2564C11.5761 10.233 11.7428 10.2758 11.8754 10.3754C12.008 10.4749 12.0956 10.6231 12.119 10.7873C12.1424 10.9514 12.0996 11.1182 12 11.2508C11.5277 11.8802 10.8692 12.3451 10.118 12.5796C9.36679 12.8141 8.56083 12.8064 7.81427 12.5574C7.06771 12.3084 6.4184 11.8309 5.95829 11.1925C5.49818 10.554 5.25059 9.78698 5.25059 9C5.25059 8.21302 5.49818 7.44599 5.95829 6.80753C6.4184 6.16908 7.06771 5.69155 7.81427 5.44259C8.56083 5.19363 9.36679 5.18585 10.118 5.42036C10.8692 5.65486 11.5277 6.11976 12 6.74922C12.0493 6.81488 12.0852 6.88961 12.1056 6.96914C12.126 7.04866 12.1306 7.13143 12.119 7.21272C12.1074 7.29401 12.08 7.37222 12.0382 7.44289C11.9964 7.51357 11.9411 7.57531 11.8754 7.62461C11.8097 7.67391 11.735 7.70979 11.6555 7.7302C11.5759 7.75062 11.4932 7.75518 11.4119 7.7436C11.3306 7.73203 11.2524 7.70456 11.1817 7.66277C11.111 7.62097 11.0493 7.56566 11 7.5C10.6852 7.08024 10.2463 6.77017 9.74542 6.61372C9.24458 6.45727 8.70721 6.46237 8.20943 6.62829C7.71165 6.79422 7.2787 7.11256 6.9719 7.53822C6.6651 7.96389 6.5 8.47529 6.5 9Z"
                            fill="#181C1E"
                        />
                    </svg>
                    <p className="text-xs text-right sm:text-md">2024 Farm Faults. All Rights Reserved</p>
                </div>
                <div className="flex space-x-3">
                    <p>Be social with us!</p>
                    <div className="flex space-x-3">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_48_320)">
                                <path
                                    d="M24.3683 12.1841C24.3683 5.45502 18.9132 0 12.1841 0C5.45502 0 0 5.45502 0 12.1841C0 18.2655 4.45554 23.3062 10.2804 24.2202V15.7061H7.18673V12.1841H10.2804V9.49981C10.2804 6.44617 12.0994 4.75943 14.8825 4.75943C16.2151 4.75943 17.6099 4.9974 17.6099 4.9974V7.99583H16.0735C14.56 7.99583 14.0879 8.93511 14.0879 9.8996V12.1841H17.4671L16.9269 15.7061H14.0879V24.2202C19.9127 23.3062 24.3683 18.2655 24.3683 12.1841Z"
                                    fill="#181C1E"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_48_320">
                                    <rect width="24.3683" height="24.3683" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.0435 2.19409C16.2989 2.19409 16.6845 2.20837 17.9647 2.26549C19.1546 2.31784 19.7971 2.51774 20.2255 2.68432C20.7918 2.90325 21.2012 3.16978 21.6247 3.59337C22.0531 4.02171 22.3149 4.42627 22.5338 4.99264C22.7004 5.42098 22.9003 6.06827 22.9526 7.25336C23.0097 8.53841 23.024 8.92392 23.024 12.1746C23.024 15.4301 23.0097 15.8156 22.9526 17.0959C22.9003 18.2857 22.7004 18.9282 22.5338 19.3566C22.3149 19.923 22.0483 20.3323 21.6247 20.7559C21.1964 21.1842 20.7918 21.446 20.2255 21.6649C19.7971 21.8315 19.1498 22.0314 17.9647 22.0837C16.6797 22.1408 16.2942 22.1551 13.0435 22.1551C9.78806 22.1551 9.40254 22.1408 8.12226 22.0837C6.9324 22.0314 6.28988 21.8315 5.86153 21.6649C5.29516 21.446 4.88585 21.1794 4.46226 20.7559C4.03391 20.3275 3.77214 19.923 3.55321 19.3566C3.38663 18.9282 3.18673 18.281 3.13438 17.0959C3.07727 15.8108 3.06299 15.4253 3.06299 12.1746C3.06299 8.91916 3.07727 8.53365 3.13438 7.25336C3.18673 6.06351 3.38663 5.42098 3.55321 4.99264C3.77214 4.42627 4.03867 4.01695 4.46226 3.59337C4.89061 3.16502 5.29516 2.90325 5.86153 2.68432C6.28988 2.51774 6.93716 2.31784 8.12226 2.26549C9.40254 2.20837 9.78806 2.19409 13.0435 2.19409ZM13.0435 0C9.7357 0 9.32163 0.0142783 8.02231 0.0713914C6.72775 0.128504 5.83773 0.337919 5.06671 0.637763C4.26236 0.951885 3.58177 1.36595 2.90593 2.04655C2.22533 2.72239 1.81126 3.40299 1.49714 4.20257C1.19729 4.97836 0.987879 5.86361 0.930766 7.15817C0.873653 8.46226 0.859375 8.87633 0.859375 12.1841C0.859375 15.4919 0.873653 15.906 0.930766 17.2053C0.987879 18.4999 1.19729 19.3899 1.49714 20.1609C1.81126 20.9653 2.22533 21.6459 2.90593 22.3217C3.58177 22.9975 4.26236 23.4164 5.06195 23.7257C5.83773 24.0256 6.72299 24.235 8.01755 24.2921C9.31687 24.3492 9.73094 24.3635 13.0387 24.3635C16.3465 24.3635 16.7606 24.3492 18.0599 24.2921C19.3545 24.235 20.2445 24.0256 21.0155 23.7257C21.8151 23.4164 22.4957 22.9975 23.1716 22.3217C23.8474 21.6459 24.2662 20.9653 24.5756 20.1657C24.8754 19.3899 25.0848 18.5046 25.142 17.2101C25.1991 15.9108 25.2134 15.4967 25.2134 12.1889C25.2134 8.88109 25.1991 8.46702 25.142 7.16769C25.0848 5.87313 24.8754 4.98312 24.5756 4.21209C24.2757 3.40299 23.8617 2.72239 23.1811 2.04655C22.5052 1.37071 21.8246 0.951885 21.0251 0.642522C20.2493 0.342679 19.364 0.133264 18.0695 0.0761508C16.7654 0.0142783 16.3513 0 13.0435 0Z"
                                fill="#181C1E"
                            />
                            <path
                                d="M13.0433 5.92548C9.58797 5.92548 6.78467 8.72878 6.78467 12.1841C6.78467 15.6395 9.58797 18.4428 13.0433 18.4428C16.4987 18.4428 19.302 15.6395 19.302 12.1841C19.302 8.72878 16.4987 5.92548 13.0433 5.92548ZM13.0433 16.2439C10.8016 16.2439 8.98352 14.4258 8.98352 12.1841C8.98352 9.94243 10.8016 8.12433 13.0433 8.12433C15.285 8.12433 17.1031 9.94243 17.1031 12.1841C17.1031 14.4258 15.285 16.2439 13.0433 16.2439Z"
                                fill="#181C1E"
                            />
                            <path
                                d="M21.0107 5.67794C21.0107 6.48705 20.3539 7.13909 19.5495 7.13909C18.7404 7.13909 18.0884 6.48229 18.0884 5.67794C18.0884 4.86884 18.7452 4.2168 19.5495 4.2168C20.3539 4.2168 21.0107 4.8736 21.0107 5.67794Z"
                                fill="#181C1E"
                            />
                        </svg>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_48_322)">
                                <path
                                    d="M8.38476 22.0837C17.5781 22.0837 22.6078 14.4653 22.6078 7.86068C22.6078 7.64651 22.6031 7.42758 22.5935 7.2134C23.572 6.50581 24.4164 5.62936 25.087 4.62523C24.1758 5.03066 23.2083 5.29544 22.2175 5.41053C23.2607 4.78526 24.0417 3.80298 24.4159 2.64578C23.4346 3.22736 22.3614 3.63762 21.2423 3.85896C20.4883 3.0578 19.4914 2.52734 18.4057 2.34959C17.32 2.17184 16.206 2.3567 15.2359 2.87559C14.2658 3.39447 13.4936 4.21849 13.0388 5.22023C12.584 6.22198 12.4718 7.34566 12.7196 8.41754C10.7326 8.31782 8.78864 7.80164 7.01386 6.90244C5.23909 6.00325 3.67309 4.74112 2.41739 3.19788C1.77917 4.29823 1.58388 5.60031 1.8712 6.83948C2.15851 8.07865 2.90688 9.16194 3.9642 9.86916C3.17043 9.84396 2.39404 9.63025 1.69919 9.24568V9.30755C1.69848 10.4623 2.09769 11.5816 2.82895 12.4753C3.56021 13.369 4.5784 13.9819 5.71043 14.2098C4.97513 14.4109 4.20339 14.4403 3.45494 14.2954C3.77438 15.2885 4.39589 16.1571 5.23274 16.7799C6.06958 17.4028 7.08 17.7489 8.12299 17.7698C6.35231 19.1607 4.165 19.9151 1.91337 19.9115C1.51406 19.9109 1.11514 19.8865 0.71875 19.8383C3.00617 21.3058 5.66706 22.0852 8.38476 22.0837Z"
                                    fill="#181C1E"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_48_322">
                                    <rect
                                        width="24.3683"
                                        height="24.3683"
                                        fill="white"
                                        transform="translate(0.71875)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
