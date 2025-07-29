"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const center = {
  lat: 35.931212,
  lng: 36.621411,
};

// Fix default marker icon issue with Leaflet in React
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "inherit", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[center.lat, center.lng]}>
        <Popup>
          <div className="flex flex-col justify-center items-center p-2">
            <p className="  text-lg">الجامعة الإسلامية</p>
            <div>
              <a
                href="https://maps.app.goo.gl/r4HbsXfgBeuYc7Sq7"
                target={"_blank"}
                className="bg-primary hover:bg-info visited:text-white text-white active:text-white hover:text-white font-bold px-3 py-2 rounded-lg"
              >
                فتح على الخريطة
              </a>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
