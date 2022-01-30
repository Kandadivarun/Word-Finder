function Logo() {
    return (
        // <a href="/">
            <svg
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                {" "}
                <defs>
                    {" "}
                    <linearGradient
                        id="sw-gradient"
                        x1="0"
                        x2="1"
                        y1="1"
                        y2="0"
                    >
                        {" "}
                        <stop
                            id="stop1"
                            stop-color="rgba(248, 117, 55, 1)"
                            offset="0%"
                        ></stop>{" "}
                        <stop
                            id="stop2"
                            stop-color="rgba(172.125, 126.676, 51.657, 1)"
                            offset="100%"
                        ></stop>{" "}
                    </linearGradient>{" "}
                </defs>{" "}
                <path
                    fill="url(#sw-gradient)"
                    d="M11.2,-24.7C13,-18.3,11.9,-12.3,14.6,-8.2C17.3,-4.2,23.8,-2.1,28.2,2.6C32.7,7.3,35.2,14.5,31.2,16.3C27.2,18.1,16.7,14.4,10.4,17.8C4.1,21.1,2.1,31.6,0.2,31.3C-1.6,30.9,-3.3,19.7,-9.1,16.1C-15,12.4,-25.1,16.4,-26.2,15C-27.2,13.6,-19.2,6.8,-18.4,0.5C-17.6,-5.9,-24,-11.7,-22.3,-12C-20.6,-12.2,-10.7,-6.8,-5.6,-11.3C-0.6,-15.8,-0.3,-30.1,2.2,-33.9C4.7,-37.8,9.4,-31.1,11.2,-24.7Z"
                    width="100%"
                    height="100%"
                    transform="translate(50 50)"
                    stroke-width="0"
                    style="transition: all 0.3s ease 0s;"
                    stroke="url(#sw-gradient)"
                ></path>{" "}
            </svg>
        // </a>
    );
}

export default Logo;
