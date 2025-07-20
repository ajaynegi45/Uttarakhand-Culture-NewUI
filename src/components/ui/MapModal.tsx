// components/MapModal.tsx
import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './MapModal.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
// Define the TrekDetails type with image as an array of strings
import {TrekDetails} from '../ui/TrekCard';

// Ensure Mapbox token is defined
if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
    throw new Error("Mapbox access token is not defined. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your environment variables.");
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Define the props interface, including `info` as a prop of type TrekDetails
interface MapModalProps {
    isOpen: boolean;
    onClose: () => void;
    center?: number[];
    zoom?: number;
    markerLocation?: number[];
    info: TrekDetails;
    subTitle: string;
}

/**
 * Renders a modal with embedded Mapbox map and address information.
 * @example
 * MapModal({ isOpen: true, onClose: () => {}, center: [78.9629, 20.5937], zoom: 5, markerLocation: [78.9629, 20.5937], info: { title: 'Location', address: 'Address', image: 'image.jpg' }, subTitle: 'Sub-title' })
 * A modal with an interactive Mapbox map and links to external maps (Google and Apple) is displayed.
 * @param {boolean} isOpen - Specifies whether the modal should be displayed.
 * @param {function} onClose - Callback function to close the modal when triggered.
 * @param {Array<number>} center - The geographical coordinates to center the map, formatted as [longitude, latitude].
 * @param {number} zoom - The zoom level for the map.
 * @param {Array<number>} markerLocation - The geographical coordinates to place the map marker, formatted as [longitude, latitude].
 * @param {Object} info - Contains information to display in the modal, including title, address, and an image URL.
 * @param {string} subTitle - The subtitle text displayed under the title.
 * @returns {JSX.Element | null} Returns the JSX code for rendering the modal if `isOpen` is true, otherwise returns null.
 * @description
 *   - Initializes and configures a Mapbox map instance with a specified style and markers.
 *   - Generates URLs for mapping services, dynamically providing directions for both Google Maps and Apple Maps.
 *   - Handles modal closure by invoking the `onClose` callback when the overlay is clicked.
 */
const MapModal: React.FC<MapModalProps> = ({
                                               isOpen,
                                               onClose,
                                               center = [78.9629, 20.5937],
                                               zoom = 5,
                                               markerLocation = [78.9629, 20.5937],
                                               info,
                                               subTitle
                                           }) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (isOpen && mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [center[1], center[0]],
                zoom: zoom,
            });

            // Add the marker to the specified location
            new mapboxgl.Marker()
                .setLngLat([markerLocation[1], markerLocation[0]])
                .addTo(mapRef.current);

            return () => mapRef.current?.remove();
        }
    }, [isOpen, center, zoom, markerLocation]);

    if (!isOpen) return null;

    // URLs for Google Maps and Apple Maps
    const googleMapsUrl = `https://www.google.com/maps?q=${center[0]},${center[1]}`;
    const appleMapsUrl = `https://maps.apple.com/?ll=${center[0]},${center[1]}`;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.leftColumn}>
                    <div ref={mapContainerRef} className={styles.mapContainer}/>
                </div>
                <div className={styles.rightColumn}>
                    <h2>{info.title}</h2>
                    <p className={styles.subTitle}>{subTitle}</p>
                    <h3>Address</h3>
                    <p>{info.address}</p>
                    <div className={styles.imageSection}>
                        <img src={info.image} alt="Image"/>
                    </div>
                    <div className={styles.mapLinks}>

                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              
            <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
<path fill="#48b564"
      d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"></path><path
                fill="#fcc60e"
                d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"></path><path
                fill="#2c85eb"
                d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"></path><path
                fill="#ed5748"
                d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"></path><path
                fill="#5695f6"
                d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"></path>
</svg>
              </span>
                            Google Maps
                        </a>
                        <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
<path fill="#e0e0e0"
      d="M35.13 42H19V30C19 30 35.48 42 35.13 42zM6.3 10.87c.1-.33.22-.65.38-.96C7.36 8.46 8.54 7.3 10 6.64 10.149 6.565 11 13 11 13S6.193 11.207 6.3 10.87z"></path><path
                fill="#7cb342" d="M18 6H20V23H18z"></path><path fill="#ffcdd2"
                                                                d="M11,18v23.73c-0.35-0.09-0.68-0.21-1-0.37c-2.36-1.08-4-3.47-4-6.23V18H11z"></path><path
                fill="#aed581" d="M42,25v10.13c0,0.36-0.03,0.71-0.09,1.05L20,20.6V6h3C23,16.48,31.52,25,42,25z"></path><path
                fill="#bdbdbd"
                d="M12 14h-2V6.64c.32-.16.65-.28 1-.37.32-.1.66-.17 1-.2C12.28 6.02 12 14 12 14zM18 32H20V42H18z"></path><path
                fill="#f9a825"
                d="M42,35.02v0.11c0,0.36-0.03,0.71-0.09,1.05c-0.06,0.43-0.16,0.84-0.31,1.23 c-0.82,2.36-2.9,4.13-5.44,4.5C35.83,41.97,35.48,42,35.13,42h-0.57l-3.02-2.15c-0.01,0-0.01-0.01-0.01-0.01l-4.5-3.2 c0,0-0.01,0-0.01-0.01l-6.36-4.52L20,31.65l-1-0.72l-1-0.71l-0.91-0.64L16.28,29l-2.49-1.77L12.06,26L12,25.96l-1-0.71l-1-0.72 L9.26,24H9.25L6,21.69v-8.82c0-0.69,0.1-1.37,0.3-2c0.1-0.33,0.22-0.65,0.38-0.96L10,12.27l2,1.42l1,0.71l5,3.55l1,0.71l0.55,0.39 L20,19.37v0.01l14.73,10.47l1.6,1.14l2.66,1.89l0.98,0.7L42,35.02z"></path><path
                fill="#fdd835"
                d="M41.91,36.18c-0.06,0.43-0.16,0.84-0.31,1.23c-0.82,2.36-2.9,4.13-5.44,4.5l-2.72-1.93 c-0.01,0.01-0.01,0.01-0.02,0l-1.49-1.08l-4.15-2.94c0,0,0,0-0.01-0.01l-1.51-1.08l-5.07-3.6L20,30.42l-1-0.71L18,29l-1.53-1.09 h-0.01l-2.31-1.65L13,25.45l-1-0.72l-1-0.71l-1-0.71l-0.11-0.08L6,20.47v-7.6c0-0.69,0.1-1.37,0.3-2L10,13.5l1,0.71l2,1.42l5,3.55 l1,0.71l1,0.71v0.01l12.41,8.81l1.89,1.35c0,0,0,0.01,0.01,0.01l4.6,3.26l0.88,0.63L41.91,36.18z"></path><path
                fill="#ef9a9a" d="M12,33v8.94c-0.34-0.04-0.68-0.11-1-0.21c-0.35-0.09-0.68-0.21-1-0.37V32L12,33z"></path><path
                fill="#fafafa"
                d="M19,6v36h-6.13c-0.3,0-0.59-0.02-0.87-0.06c-0.34-0.04-0.68-0.11-1-0.21V6.27 c0.32-0.1,0.66-0.17,1-0.2C12.28,6.02,12.57,6,12.87,6H19z"></path><path
                fill="#3996e8" d="M18,6v17h-6V6.052C12.28,6.015,12.57,6,12.87,6H18z"></path><path fill="#1976d2"
                                                                                                  d="M38.77,29.04c0,0-0.77,0.96-2.77,0.96s-3-1-3-1s-1,1-3,1s-2.77-0.96-2.77-0.96 C26.45,30.16,26,31.53,26,33c0,3.87,3.13,7,7,7s7-3.13,7-7C40,31.53,39.55,30.16,38.77,29.04z"></path><path
                fill="#d84315"
                d="M38,33H28c0-0.42,0.05-0.83,0.15-1.23C28.72,31.92,29.34,32,30,32c1.28,0,2.29-0.31,3-0.64 c0.71,0.33,1.72,0.64,3,0.64c0.66,0,1.28-0.08,1.85-0.23C37.95,32.17,38,32.58,38,33z"></path><path
                fill="#fbc02d"
                d="M10 12.27L10 13.5 10 24.53 11 25.25 11 14.21 11 12.98zM20 19.38L20 31.65 19 30.93 19 18.66z"></path><path
                fill="#1976d2" d="M15 21A7 7 0 1 0 15 35A7 7 0 1 0 15 21Z"></path><path fill="#e89c23"
                                                                                        d="M10 12.27L10 13.5 11 14.21 11 12.98zM19 18.66L19 19.89 20 20.6 20 19.37z"></path><path
                fill="#e9e9e9" d="M42,16.96V26c-11.03,0-20-8.97-20-20h9.04C31.52,11.83,36.17,16.48,42,16.96z"></path><path
                fill="#7cb342" d="M42,13v4.96C35.62,17.48,30.52,12.38,30.05,6H35C38.87,6,42,9.13,42,13z"></path><path
                fill="#aed581" d="M42,13v3.96C36.17,16.48,31.52,11.83,31.04,6H35C38.87,6,42,9.13,42,13z"></path><g><path
                fill="#7cb342" d="M23,6h-1c0,11.03,8.97,20,20,20v-1C31.52,25,23,16.48,23,6z"></path></g><g><path
                fill="#fafafa" d="M15 24L12 32 15 30 18 32z"></path><path fill="#fff"
                                                                          d="M38.45,30.48C37.88,30.76,37.08,31,36,31c-1.39,0-2.39-0.41-3-0.77C32.39,30.59,31.39,31,30,31 c-1.08,0-1.88-0.24-2.45-0.52C27.19,31.26,27,32.11,27,33c0,3.31,2.69,6,6,6s6-2.69,6-6C39,32.11,38.81,31.26,38.45,30.48z M33,38 c-2.415,0-4.434-1.721-4.899-4h9.798C37.434,36.279,35.415,38,33,38z M28,33c0-0.422,0.051-0.834,0.151-1.233 C28.724,31.922,29.343,32,30,32c1.283,0,2.288-0.308,3-0.641C33.712,31.692,34.717,32,36,32c0.657,0,1.276-0.078,1.849-0.233 C37.949,32.166,38,32.578,38,33H28z"></path><path
                fill="#fff"
                d="M32.125 35.24c0 0 0-.625-.625-.625s-.625.625-.625.625h.375c0-.114.043-.25.25-.25.066 0 .242 0 .25.25 0 .215-.291.549-.487.707l-.013.01-.375.325v.036.298h1.25V36.24h-.628C31.497 36.24 32.125 35.74 32.125 35.24zM33.4 35.615c.125-.102.225-.243.225-.427 0-.316-.28-.573-.625-.573s-.625.257-.625.573c0 .184.1.325.225.427-.125.102-.225.243-.225.427 0 .316.28.573.625.573s.625-.257.625-.573C33.625 35.858 33.525 35.717 33.4 35.615zM33 34.99c.135 0 .25.091.25.198 0 .106-.157.19-.25.228-.092-.037-.25-.121-.25-.228C32.75 35.079 32.862 34.99 33 34.99zM33 36.24c-.138 0-.25-.089-.25-.198 0-.106.157-.19.25-.228.092.037.25.121.25.228C33.25 36.149 33.135 36.24 33 36.24zM34.499 34.99c.104 0 .138.033.163.067.057.075.087.207.087.382v.354c0 .175-.03.307-.086.381-.026.034-.06.067-.162.067-.105 0-.139-.033-.165-.067-.057-.075-.087-.206-.087-.38v-.355c0-.175.03-.307.086-.381C34.362 35.023 34.396 34.99 34.499 34.99M34.499 34.615c-.199 0-.352.071-.461.214s-.163.346-.163.608v.355c0 .261.055.463.164.607.109.144.264.215.463.215.198 0 .351-.071.46-.214.109-.143.163-.346.163-.608v-.354c0-.262-.055-.465-.164-.608C34.852 34.687 34.698 34.615 34.499 34.615L34.499 34.615z"></path></g>
</svg>
              </span>
                            Apple Maps

                        </a>
                    </div>
                    <button className={styles.closeButton} onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MapModal;
