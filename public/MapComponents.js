"use client"; // Next.js 13+ uses client-side rendering for Leaflet

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [14.583550998920371, 121.06259111174217]; // New York (Change to your desired location)

  return (
    <div className="w-full h-90">
      <MapContainer center={position} zoom={20} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>📍 This is your location!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
