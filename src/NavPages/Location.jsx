import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

const Location = () => {
  const center = [22.636646, 91.798693]; // Coordinates for Nazir Hat, Fatikchari Road

  return (
    <MapContainer center={center} zoom={15} style={{ height: '60vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      {/* Add a Marker for the specified location */}
      <Marker position={center}>
        <Popup>
          Nazir Hat, Fatikchari Road
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
