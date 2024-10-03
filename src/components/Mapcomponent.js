"use client";
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import uttarakhandBoundary from '../components/uttarakhand.json'; // existing import

// Fix for default marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

// Custom temple icon using L.divIcon
const templeIcon = L.divIcon({
  className: 'custom-temple-icon',
  html: '<div style="background-color: #ffcc00; border-radius: 50%; width: 30px; height: 30px; text-align: center; line-height: 30px; color: white;">🏛️</div>',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Main component
const UttarakhandMap = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedTemple, setSelectedTemple] = useState(null);

  const uttarakhandCenter = [30.0668, 79.0193];

  const districts = [
    { 
      name: 'Dehradun', 
      coordinates: [30.3165, 78.0322],
      description: 'The capital city of Uttarakhand, known for its pleasant climate, educational institutions, and rich cultural heritage.',
      culturalHotspots: ['Robber\'s Cave', 'Mindrolling Monastery'],
      historicalPlaces: ['Forest Research Institute', 'Khalanga War Memorial'],
      famousTemples: ['Tapkeshwar Temple', 'Lakshman Siddh Temple']
    },
    { 
      name: 'Haridwar', 
      coordinates: [29.9457, 78.1642],
      description: 'A major pilgrimage city, famous for the Ganga Aarti at Har Ki Pauri and is considered one of the seven holiest places in Hinduism.',
      culturalHotspots: ['Har Ki Pauri', 'Mansa Devi Temple'],
      historicalPlaces: ['Bharat Mata Mandir', 'Sapt Rishi Ashram'],
      famousTemples: ['Mansa Devi Temple', 'Chandi Devi Temple']
    },
    { 
      name: 'Nainital', 
      coordinates: [29.3802, 79.4542],
      description: 'Known for its stunning Naini Lake, Nainital is a popular hill station that offers breathtaking views and a serene environment.',
      culturalHotspots: ['Naini Lake', 'Snow View Point'],
      historicalPlaces: ['Naina Devi Temple', 'Governor’s House'],
      famousTemples: ['Naina Devi Temple', 'Ghorakhal Temple']
    },
    { 
      name: 'Rudraprayag', 
      coordinates: [30.3604, 78.7974],
      description: 'Located at the confluence of the Alaknanda and Mandakini rivers, this district is known for its spiritual significance and scenic beauty.',
      culturalHotspots: ['Devprayag', 'Sangam of Alaknanda and Bhagirathi'],
      historicalPlaces: ['Rudraprayag Temple', 'Kedarnath Temple'],
      famousTemples: ['Kedarnath Temple', 'Vishnuprayag Temple']
    },
    { 
      name: 'Chamoli', 
      coordinates: [30.4406, 79.2993],
      description: 'Famous for the Badrinath Temple and scenic landscapes, Chamoli is a significant pilgrimage destination in Uttarakhand.',
      culturalHotspots: ['Auli', 'Gurson Bugyal'],
      historicalPlaces: ['Badrinath Temple', 'Joshimath'],
      famousTemples: ['Badrinath Temple', 'Joshimath Temple']
    },
    { 
      name: 'Pauri Garhwal', 
      coordinates: [30.2168, 78.7547],
      description: 'Known for its panoramic views of the Himalayas, Pauri Garhwal is rich in natural beauty and cultural heritage.',
      culturalHotspots: ['Kandoliya', 'Khirsu'],
      historicalPlaces: ['Jaiharikhal', 'Pauri Fort'],
      famousTemples: ['Binsar Mahadev Temple', 'Kandoliya Temple']
    },
    { 
      name: 'Tehri Garhwal', 
      coordinates: [30.3450, 78.4607],
      description: 'Home to the Tehri Dam and beautiful landscapes, this district is both a tourist destination and a hub for adventure sports.',
      culturalHotspots: ['Tehri Lake', 'New Tehri'],
      historicalPlaces: ['Tehri Dam', 'Surkanda Devi Temple'],
      famousTemples: ['Surkanda Devi Temple', 'Chamba Devi Temple']
    },
    { 
      name: 'Almora', 
      coordinates: [29.5983, 79.6300],
      description: 'A picturesque town known for its rich cultural heritage, Almora offers stunning views and historical temples.',
      culturalHotspots: ['Kasardevi Temple', 'Lakhudi Taal'],
      historicalPlaces: ['Binsar Wildlife Sanctuary', 'Chitai Golu Devta Temple'],
      famousTemples: ['Golu Devata Temple', 'Jageshwar Temple']
    },
    { 
      name: 'Bageshwar', 
      coordinates: [29.5477, 80.2290],
      description: 'Known as the "Temple District" for its numerous ancient temples, Bageshwar is a gateway to various trekking routes.',
      culturalHotspots: ['Baijnath Temple', 'Pindari Glacier'],
      historicalPlaces: ['Bageshwar Temple', 'Kandara Cave'],
      famousTemples: ['Bageshwar Temple', 'Baijnath Temple']
    },
    { 
      name: 'Champawat', 
      coordinates: [29.0916, 80.0784],
      description: 'Rich in history and culture, Champawat is famous for its temples and as the historical capital of the Kumaon region.',
      culturalHotspots: ['Purnagiri Temple', 'Kailashanath Temple'],
      historicalPlaces: ['Champawat Fort', 'Abbot Mount'],
      famousTemples: ['Purnagiri Temple', 'Kailashanath Temple']
    },
    { 
      name: 'Udham Singh Nagar', 
      coordinates: [28.9652, 79.2512],
      description: 'A rapidly developing district, Udham Singh Nagar is known for its agricultural land and vibrant cultural life.',
      culturalHotspots: ['Nanakmatta', 'Rudrapur'],
      historicalPlaces: ['Kichha', 'Gurudwara Nanakmatta'],
      famousTemples: ['Nanakmatta Sahib', 'Bhimtal Temple']
    },
    { 
      name: 'Pithoragarh', 
      coordinates: [29.5816, 80.1151],
      description: 'Often referred to as "Little Kashmir," Pithoragarh is known for its breathtaking scenery and cultural diversity.',
      culturalHotspots: ['Pithoragarh Fort', 'Didihat'],
      historicalPlaces: ['Kapileshwar Temple', 'Jhulaghat'],
      famousTemples: ['Kapileshwar Temple', 'Mahuwa Temple']
    },
    { 
      name: 'Rudraprayag', 
      coordinates: [30.3604, 78.7974],
      description: 'This district is a significant pilgrimage site and offers stunning views of the rivers and mountains.',
      culturalHotspots: ['Devprayag', 'Kedarnath'],
      historicalPlaces: ['Koteshwar Temple', 'Rudraprayag Temple'],
      famousTemples: ['Kedarnath Temple', 'Rudranath Temple']
    }
];


  const temples = [
    {
      "name": "Binsar Mahadev Temple",
      "coordinates": [30.0833, 79.2333],
      "description": "Located in a dense forest in Pauri Garhwal, this ancient temple dedicated to Lord Shiva is known for its serene environment and connection to the Chand dynasty.",
      "image": "https://wandersky.in/wp-content/uploads/2024/03/binsar-mahadev-temple.jpg.webp"//if want to add images
    },
    {
      "name": "Tarkeshwar Mahadev Temple",
      "coordinates": [29.9123, 78.8520],
      "description": "A peaceful temple dedicated to Lord Shiva, nestled in the hills of Lansdowne, surrounded by pine and oak forests.",
      "image": "https://www.exoticmiles.com/lansdowne/tarkeshwar-mahadev-temple/"
    },
    {
      "name": "Golu Devata Temple",
      "coordinates": [29.6177, 79.6537],
      "description": "This temple is dedicated to Golu Devata, a local deity believed to be an incarnation of Lord Shiva, where devotees seek justice by writing their wishes on paper.",
      "image": "https://www.uttarakhandtraveltourism.com/wp-content/uploads/2022/01/Chitai-Temple-leters.png"
    },
    {
      "name": "Jageshwar Mandir",
      "coordinates": [29.6370, 79.8526],
      "description": "A cluster of ancient temples dedicated to Lord Shiva, Vishnu, and Devi, located in the Jataganga Valley, dating back to the 9th-12th centuries.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwuTXO_VnzeU6nLjVy_8rQ_qeOZPjyCjJaQ&s"
    },
    {
      "name": "Badrinath Temple",
      "coordinates": [30.7433, 79.4916],
      "description": "A sacred temple dedicated to Lord Vishnu, located in the Garhwal Himalayas, and one of the Char Dham pilgrimage sites.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Badrinath_Temple_%2C_Uttarakhand.jpg/640px-Badrinath_Temple_%2C_Uttarakhand.jpg"
    },
    {
      "name": "Kedarnath Temple",
      "coordinates": [30.7352, 79.0669],
      "description": "One of the 12 Jyotirlingas of Lord Shiva, located in the Rudraprayag district at a high altitude near the Mandakini River.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/640px-Kedarnath_Temple_in_Rainy_season.jpg"
    },
    {
      "name": "Yamunotri Temple",
      "coordinates": [31.0121, 78.4619],
      "description": "A sacred site dedicated to Goddess Yamuna, situated near the source of the Yamuna River and part of the Char Dham pilgrimage.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGc5vPycd4rrl9uUJJRsS8tDJ4jIGCyCtYoQ&s"
    }
  ];

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.district) {
      layer.bindPopup(feature.properties.district);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%', minWidth: '1000px', margin: '0 auto' }}>
        <MapContainer 
          center={uttarakhandCenter} 
          zoom={8}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON
            data={uttarakhandBoundary}
            style={() => ({
              color: '#4a83ec',
              weight: 1,
              fillColor: "#1e40af",
              fillOpacity: 0.1,
            })}
            onEachFeature={onEachFeature}
          />
          {districts.map((district) => (
            <Marker
              key={district.name}
              position={district.coordinates}
              eventHandlers={{
                click: () => {
                  setSelectedDistrict(district);
                  setSelectedTemple(null); // Clear selected temple when clicking a district
                },
              }}
            >
              <Popup>
                <div>
                  <h3>{district.name}</h3>
                  <p><strong>Cultural Hotspots:</strong> {district.culturalHotspots.join(', ') || 'N/A'}</p>
                  <p><strong>Historical Places:</strong> {district.historicalPlaces.join(', ') || 'N/A'}</p>
                  <p><strong>Famous Temples:</strong> {district.famousTemples.join(', ') || 'N/A'}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {temples.map((temple) => (
            <Marker
              key={temple.name}
              position={temple.coordinates}
              icon={templeIcon} // Use the custom temple icon
              eventHandlers={{
                click: () => {
                  setSelectedTemple(temple);
                  setSelectedDistrict(null); // Clear selected district when clicking a temple
                },
              }}
            >
              <Popup>
                <div>
                  <h3>{temple.name}</h3>
                  <img src={temple.image} alt={temple.name} style={{ width: '100%', height: 'auto' }} onClick={(e) => e.stopPropagation()} />
                  <p>{temple.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        {selectedDistrict && (
          <div style={{ marginTop: '20px' }}>
            <h2>{selectedDistrict.name}</h2>
            <p> {selectedDistrict.description}</p>
          </div>
        )}
        {selectedTemple && (
          <div style={{ marginTop: '20px' }}>
            <h2>{selectedTemple.name}</h2>
            
            <p>{selectedTemple.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default UttarakhandMap;
