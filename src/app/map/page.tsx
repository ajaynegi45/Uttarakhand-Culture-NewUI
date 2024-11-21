"use client";

import {useRef} from 'react';
import map from "/public/mapUk.svg";
import styles from "./page.module.css";
import Image from "next/image";

const Map = () => {
    console.log("Map.tsx");

    const zoomLevelRef = useRef<number>(1);
    const marginLeftLevelRef = useRef<number>(0);
    const marginTopLevelRef = useRef<number>(0);
    const mapImageRef = useRef<HTMLImageElement | null>(null);
    const mapBoxHeightRef = useRef<HTMLDivElement | null>(null);
    const increaseMapBoxHeightRef = useRef<number>(6930);
    const animationFrameIdRef = useRef<number | null>(null);

    const updateMapStyle = () => {
        if (mapImageRef.current) {
            mapImageRef.current.style.transform = `scale(${zoomLevelRef.current})`;
            mapImageRef.current.style.marginTop = `${marginTopLevelRef.current}vw`;
            mapImageRef.current.style.marginLeft = `${marginLeftLevelRef.current}vw`;
        }
    };

    const triggerUpdateMapStyle = () => {
        if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
        }
        animationFrameIdRef.current = requestAnimationFrame(() => {
            updateMapStyle();
        });
    };

    const handleZoomIn = () => {
        if (mapBoxHeightRef.current) {
            mapBoxHeightRef.current.style.aspectRatio = `10800/${increaseMapBoxHeightRef.current += 3000}`;
        }
        zoomLevelRef.current += 1;
        marginLeftLevelRef.current += 46.2;
        marginTopLevelRef.current += 29;
        triggerUpdateMapStyle();
    };

    const handleZoomOut = () => {
        if (increaseMapBoxHeightRef.current > 6930 && mapBoxHeightRef.current) {
            mapBoxHeightRef.current.style.aspectRatio = `10800/${increaseMapBoxHeightRef.current -= 3000}`;
        }
        if (zoomLevelRef.current > 1) {
            zoomLevelRef.current -= 1;
            marginLeftLevelRef.current -= 46.2;
            marginTopLevelRef.current -= 29;
            triggerUpdateMapStyle();
        }
    };

    return (
        <>
            {/*<div>*/}
            {/*    <Image src={"/mapClick.svg"} alt={""} width={100} height={100} />*/}
            {/*</div>*/}

            <div>
                <div className={styles["uttarakhand-map"]}>
                    <h1 className={styles["uttarakhand-map-heading"]}>Map of Uttarakhand</h1>
                    <p>Detailed map of Uttarakhand</p>
                    <div ref={mapBoxHeightRef} className={styles["uttarakhand-map-container"]}>
                        <Image className={styles["map-image"]} ref={mapImageRef} src={map}
                               alt="Important Map of Uttarakhand"
                               decoding="async"/>
                    </div>
                    <div className={styles["zoom-button-container"]}>
                        <p onClick={handleZoomIn} className={styles["zoom-level-button"]}>+</p>
                        <p onClick={handleZoomOut} className={styles["zoom-level-button"]}>-</p>
                    </div>
                    <p>Zoom to view Map</p>
                </div>
            </div>
        </>
    )
        ;
};

export default Map;

