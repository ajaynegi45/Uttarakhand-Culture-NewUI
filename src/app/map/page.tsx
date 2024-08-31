// 'use client'

import Image from "next/image";
import MapImage from "/public/map-uttarakhand.svg";
import styles from "@/app/map/page.module.css";
// import {useRef} from "react";



export default function Map() {

    // const zoomLevelRef = useRef<number>(1);
    // const marginLeftLevelRef = useRef<number>(0);
    // const marginTopLevelRef = useRef<number>(0);
    // const mapImageRef = useRef<HTMLImageElement>(null);
    // const mapBoxHeightRef = useRef<HTMLDivElement>(null);
    // const increaseMapBoxHeightRef = useRef<number>(6930);
    //
    // const handleZoomIn = () => {
    //     if (mapImageRef.current && mapBoxHeightRef.current) {
    //         mapBoxHeightRef.current.style.aspectRatio = `10800/${increaseMapBoxHeightRef.current += 3000}`;
    //     }
    //     zoomLevelRef.current += 1;
    //     marginLeftLevelRef.current += 46.2;
    //     marginTopLevelRef.current += 29;
    //     updateMapStyle();
    // };
    //
    // const handleZoomOut = () => {
    //     if (increaseMapBoxHeightRef.current > 6930) {
    //         if (mapBoxHeightRef.current) {
    //             mapBoxHeightRef.current.style.aspectRatio = `10800/${increaseMapBoxHeightRef.current -= 3000}`;
    //         }
    //     }
    //     if (zoomLevelRef.current > 1) {
    //         zoomLevelRef.current -= 1;
    //         marginLeftLevelRef.current -= 46.2;
    //         marginTopLevelRef.current -= 29;
    //         updateMapStyle();
    //     }
    // };
    //
    // const updateMapStyle = () => {
    //     if (mapImageRef.current) {
    //         mapImageRef.current.style.transform = `scale(${zoomLevelRef.current})`;
    //         mapImageRef.current.style.marginTop = `${marginTopLevelRef.current}vw`;
    //         mapImageRef.current.style.marginLeft = `${marginLeftLevelRef.current}vw`;
    //     }
    // };
    return (
        <>
            {/*<div  className={styles["map-container"]}>*/}
            {/*    <Image src={MapImage} alt={"Map Image"} }/>x*/}
            {/*</div>*/}

            {/*<div className={styles["zoomButtonContainer"]}>*/}
            {/*    <p className={styles["zoomLevelButton"]}>+</p>*/}
            {/*    <p className={styles["zoomLevelButton"]}>-</p>*/}
            {/*</div>*/}

            <section className={styles["map-container"]}>

                <div className={styles["map-image-container"]}>
                    <Image src={MapImage} alt={"Map Image"}/>
                </div>

                <div className={styles["map-button-container"]} >
                    <button>+</button>
                    <button>-</button>
                </div>

            </section>

            <div className={styles["image"]}>
                <h1>ekjbibeif</h1>
            </div>


            {/*<div ref={mapBoxHeightRef} className={styles["map-container"]}>*/}
            {/*    <Image src={MapImage} alt={"Map Image"} ref={mapImageRef}/>x*/}
            {/*</div>*/}

            {/*<div className={styles["zoomButtonContainer"]}>*/}
            {/*    <p onClick={handleZoomIn} className={styles["zoomLevelButton"]}>+</p>*/}
            {/*    <p onClick={handleZoomOut} className={styles["zoomLevelButton"]}>-</p>*/}
            {/*</div>*/}
        </>
    );
}