"use client"; // Mark this component as a Client Component

import React, { useEffect, useRef } from 'react';

const InteractiveMap = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Function to load the Google Maps API script
        const loadGoogleMapsApi = () => {
            return new Promise<void>((resolve, reject) => {
                if (window.google) {
                    resolve(); // Google Maps API is already loaded
                } else {
                    const script = document.createElement('script');
                    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
                    script.async = true;
                    script.defer = true;
                    script.onload = () => resolve(); // Resolve when the script is loaded
                    script.onerror = () => reject(new Error('Failed to load Google Maps API'));
                    document.head.appendChild(script);
                }
            });
        };

        loadGoogleMapsApi()
            .then(() => {
                if (mapRef.current) {
                    const map = new window.google.maps.Map(mapRef.current, {
                        center: { lat: 30.3165, lng: 78.0322 }, // Center of Uttarakhand
                        zoom: 9,
                        disableDefaultUI: true,
                    });

                    const locations = [
                        { position: { lat: 30.3165, lng: 78.0322 }, name: "Dehradun", description: "Capital city of Uttarakhand." },
                        { position: { lat: 30.4402, lng: 78.5463 }, name: "Haridwar", description: "Famous for its ghats and temples." },
                        { position: { lat: 30.0668, lng: 79.0193 }, name: "Nainital", description: "Known for its beautiful lake." },
                        { position: { lat: 30.2025, lng: 78.1654 }, name: "Rishikesh", description: "Yoga capital of the world." },
                        { position: { lat: 30.2201, lng: 78.5864 }, name: "Mussoorie", description: "Queen of the Hills." },
                    ];

                    locations.forEach(location => {
                        const marker = new window.google.maps.Marker({
                            position: location.position,
                            map: map,
                            title: location.name,
                        });

                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `<h3>${location.name}</h3><p>${location.description}</p>`,
                        });

                        marker.addListener('click', () => {
                            infoWindow.open(map, marker);
                        });
                    });
                }
            })
    }, []);

    return (
        <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
    );
};

export default InteractiveMap;