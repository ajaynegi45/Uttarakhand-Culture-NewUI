// components/ui/MapsButton.tsx
import React, { useState, useRef } from "react";
import "./MapsButton.css";

interface MapsButtonProps {
    text: string;
}

const MapsButton: React.FC<MapsButtonProps> = ({ text }) => {
    const [ripples, setRipples] = useState<
        { x: number; y: number; show: boolean }[]
    >([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const animateRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const pos = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - pos.left;
        const y = e.clientY - pos.top;

        setRipples((prevRipples) => [...prevRipples, { x, y, show: true }]);

        const appUrl = "geo:30.3528016,78.8970767,543181m?q=Uttarakhand"; // To open app directly
        const webUrl = "https://www.google.com/maps/place/Uttarakhand/@30.3528016,78.8970767,543181m/data=!3m1!1e3?maptype=satellite";

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        const isAndroid = /Android/.test(navigator.userAgent);

        if (isIOS) {
            // For iOS
            window.location.href = appUrl;
            setTimeout(() => {
                window.location.href = webUrl; 
            }, 2000);
        } else if (isAndroid) {
            // For Android
            window.location.href = appUrl;
            setTimeout(() => {
                window.location.href = webUrl;
            }, 2000);
        } else {
            // For other platforms
            window.open(webUrl, "_blank");
        }
    };

    const rippleEnd = (index: number) => {
        setRipples((prevRipples) =>
            prevRipples.map((ripple, i) =>
                i === index ? { ...ripple, show: false } : ripple
            )
        );
    };

    return (
        <button className="ti-btn" ref={buttonRef} onClick={animateRipple}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
            >
                <path
                    fill="#48b564"
                    d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"
                ></path>
                <path
                    fill="#fcc60e"
                    d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"
                ></path>
                <path
                    fill="#2c85eb"
                    d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"
                ></path>
                <path
                    fill="#ed5748"
                    d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"
                ></path>
                <path
                    fill="#5695f6"
                    d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"
                ></path>
            </svg>
            <span>{text}</span>
            {ripples.map(
                (ripple, i) =>
                    ripple.show && (
                        <span
                            key={`ripple-${i}`}
                            className="ripple"
                            style={{
                                top: ripple.y + "px",
                                left: ripple.x + "px",
                            }}
                            onAnimationEnd={() => rippleEnd(i)}
                        />
                    )
            )}
        </button>
    );
};

export default MapsButton;
