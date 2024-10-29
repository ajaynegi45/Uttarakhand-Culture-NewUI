// components/MapModal.tsx
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './MapModal.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// Ensure Mapbox token is defined
if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
  throw new Error("Mapbox access token is not defined. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your environment variables.");
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Define the TrekDetails type with image as an array of strings
import { TrekDetails } from '../ui/TrekCard';

// Define the props interface, including `info` as a prop of type TrekDetails
interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  center?: number[];
  zoom?: number;
  markerLocation?: number[];
  info: TrekDetails;
  subTitle : string;
}

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
          <div ref={mapContainerRef} className={styles.mapContainer} />
        </div>
        <div className={styles.rightColumn}>
          <h2>{info.title}</h2>
          <p className={styles.subTitle}>{subTitle}</p>
          <h3>Address</h3>
          <p>{info.address}</p>
          <div className={styles.imageSection}>
              <img src={info.image} alt="Image" />
          </div>
          <div className={styles.mapLinks}>
          
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps
            <span className={styles.icon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
            </a>
            <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
            Apple Maps
            <span className={styles.icon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
              
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
