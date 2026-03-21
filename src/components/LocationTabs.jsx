import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const categories = {
  atracciones: [
    { name: "Plaza Serrano", destination: "Plaza Serrano", distance: "3.5 km" },
    { name: "Obelisco de Buenos Aires", destination: "Obelisco", distance: "3.5 km" },
    { name: "Museo Nacional de Bellas Artes", destination: "Museo Nacional de Bellas Artes", distance: "3.9 km" },
    { name: "Plaza de Mayo", destination: "Plaza de Mayo", distance: "4 km" },
    { name: "Bosques de Palermo", destination: "Bosques de Palermo", distance: "5 km" }
  ],
  restaurantes: [
    { name: "McDonald's", destination: "McDonald's Rivadavia 3145", distance: "500 m" },
    { name: "Cafe Martínez", destination: "Cafe Martínez Rivadavia 3394", distance: "200 m" },
    { name: "Carrefour Market", destination: "Carrefour Market Rivadavia 3221", distance: "400 m" }
  ],
  transportes: [
    { name: "Subte Línea A", destination: "Subte Línea A, Loria", distance: "850 m" },
    { name: "Subte Línea H", destination: "Subte Línea H, Once", distance: "220 m" },
    { name: "Estación Once", destination: "Estación Once", distance: "850 m" },
    { name: "YPF", destination: "YPF Rivadavia 3341", distance: "300 m" }
  ]
};

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState("atracciones");
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <>
      <div className="location-info">

        <h3>Aires Express</h3>
        <div className="rating">
          4.0 ⭐⭐⭐⭐☆ · +950 reseñas
        </div>

        <div className="tabs">
          {Object.keys(categories).map(key => (
            <button
              key={key}
              className={`tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        <ul className="places">
          {categories[activeTab].map((place, index) => (
            <li
              key={index}
              className={`place-item ${
                selectedPlace?.name === place.name ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedPlace(place);
                const origin = encodeURIComponent("Aires Express Buenos Aires");
                const destination = encodeURIComponent(
                  place.destination + " Buenos Aires"
                );

                window.open(
                  `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`,
                  "_blank"
                );
              }}
            >
              <div className="place-left">
                <MapPin size={16} className="place-icon" />
                <span className="place-name">{place.name}</span>
              </div>
              <span className="place-distance">{place.distance}</span>
            </li>
          ))}
        </ul>

      </div>

      <div className="location-map">
        <iframe
          src={`https://www.google.com/maps?q=Aires+Express+Buenos+Aires&output=embed`}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
