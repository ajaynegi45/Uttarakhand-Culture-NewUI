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
        center: [center[1],center[0]],
        zoom: zoom,
      });

      // Add the marker to the specified location
      new mapboxgl.Marker()
        .setLngLat([markerLocation[1],markerLocation[0]])
        .addTo(mapRef.current);

      return () => mapRef.current?.remove();
    }
  }, [isOpen, center, zoom, markerLocation]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.leftColumn}>
          <div ref={mapContainerRef} className={styles.mapContainer} />
        </div>
        <div className={styles.rightColumn}>
          <h2>{info.title}</h2>
          <p className={styles.subTitle}>{subTitle}</p>
          <h3>Address </h3>
          <p>{info.address}</p>
          <p></p>
          <div className={styles.imageSection}>
              <img src={info.image} alt={`Image`} />
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
