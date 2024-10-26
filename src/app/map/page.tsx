"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
			// Add smooth transition
			mapImageRef.current.style.transition =
				"transform 0.3s ease, margin 0.3s ease";
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
			mapBoxHeightRef.current.style.aspectRatio = `10800/${(increaseMapBoxHeightRef.current += 3000)}`;
		}
		zoomLevelRef.current += 1;
		marginLeftLevelRef.current += 46.2;
		marginTopLevelRef.current += 29;
		triggerUpdateMapStyle();
	};

	const handleZoomOut = () => {
		if (increaseMapBoxHeightRef.current > 6930 && mapBoxHeightRef.current) {
			mapBoxHeightRef.current.style.aspectRatio = `10800/${(increaseMapBoxHeightRef.current -= 3000)}`;
		}
		if (zoomLevelRef.current > 1) {
			zoomLevelRef.current -= 1;
			marginLeftLevelRef.current -= 46.2;
			marginTopLevelRef.current -= 29;
			triggerUpdateMapStyle();
		}
	};

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (animationFrameIdRef.current) {
				cancelAnimationFrame(animationFrameIdRef.current);
			}
		};
	}, []);

	return (
		<>
			<div>
				<div className={styles["uttarakhand-map"]}>
					<motion.h1
						className={styles["uttarakhand-map-heading"]}
						initial={{ opacity: 0, y: -50 }} // Initial state
						animate={{ opacity: 1, y: 0 }} // Animate to this state
						exit={{ opacity: 0, y: 50 }} // Animate to this state on exit
						transition={{ duration: 0.5 }} // Transition properties
					>
						Map of Uttarakhand
					</motion.h1>
					<p>Detailed map of Uttarakhand</p>
					<div
						ref={mapBoxHeightRef}
						className={styles["uttarakhand-map-container"]}
					>
						<Image
							className={styles["map-image"]}
							ref={mapImageRef}
							src={map}
							alt="Important Map of Uttarakhand"
							decoding="async"
						/>
					</div>
					<div className={styles["zoom-button-container"]}>
						<button
							onClick={handleZoomIn}
							className={styles["zoom-level-button"]}
							aria-label="Zoom In"
						>
							+
						</button>
						<button
							onClick={handleZoomOut}
							className={styles["zoom-level-button"]}
							aria-label="Zoom Out"
						>
							-
						</button>
					</div>
					<p>Zoom to view Map</p>
				</div>
			</div>
		</>
	);
};

export default Map;
