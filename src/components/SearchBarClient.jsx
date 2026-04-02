import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/style.css";
import { Calendar, Users, BedDouble, Search } from "lucide-react";

const baseRoomTypes = [
  { slug: "single", name: "Single", desc: "Cama Individual" },
  { slug: "doble-twin", name: "Doble Twin", desc: "Camas Individuales" },
  { slug: "doble-matrimonial", name: "Matrimonial", desc: "Cama Matrimonial" },
  { slug: "triple-twin", name: "Triple Twin", desc: "Camas Individuales" },
  { slug: "triple-matrimonial", name: "Triple Matrimonial", desc: "Cama Matrimonial + Individual" },
  { slug: "cuadruple", name: "Cuádruple", desc: "Matrimonial + 2 individuales" },
  { slug: "monoambiente", name: "Monoambiente", desc: "Monoambiente equipado" }
];

const createRoomTypes = (initialRoomSlug) => {
  const selectedSlug = initialRoomSlug || "single";

  return baseRoomTypes.map((room) => ({
    ...room,
    count: room.slug === selectedSlug ? 1 : 0
  }));
};

export default function SearchBarClient({
  initialRoomSlug = "",
  initialAdults = 2
}) {
  const [open, setOpen] = useState(null);
  const [range, setRange] = useState();
  const [adults, setAdults] = useState(Math.max(1, initialAdults));
  const [children, setChildren] = useState(0);
  const [roomTypes, setRoomTypes] = useState(() => createRoomTypes(initialRoomSlug));
  const phone = "5491140480054";

  useEffect(() => {
    setAdults(Math.max(1, initialAdults));
    setChildren(0);
    setRoomTypes(createRoomTypes(initialRoomSlug));
    setOpen(null);
    setRange(undefined);
  }, [initialAdults, initialRoomSlug]);

  const handleSearch = () => {
    const selectedRooms = roomTypes
    .filter(r => r.count > 0)
    .map(r => `${r.count} ${r.name}`)
    .join(", ");

    const message = `
      Hola, quiero consultar disponibilidad:

      Check-in: ${range?.from ? range.from.toLocaleDateString() : "-"}
      Check-out: ${range?.to ? range.to.toLocaleDateString() : "-"}
      Adultos: ${adults}
      Niños: ${children}
      Habitaciones: ${selectedRooms || "-"}
          `;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  const getRoomSummary = () => {
    const selected = roomTypes.filter(r => r.count > 0);

    if (selected.length === 0) return "Cantidad";

    return selected
      .map(r => `${r.count} ${r.name}`)
      .join(", ");
  };


  return (
    <div className="search-bar">

      {/* FECHAS */}
      <div
        className="search-field"
        onClick={() => setOpen(open === "dates" ? null : "dates")}
      >
        <Calendar className="icon" color="#777" />
        <div className="search-field-content">
          <span className="label">Fechas</span>
          <span className="value">
            {range?.from
              ? `${range.from.toLocaleDateString()} - ${
                  range?.to ? range.to.toLocaleDateString() : ""
                }`
              : "Check in - Check out"}
          </span>

          {open === "dates" && (
            <div 
              className="overlay-box calendar"
              onClick={(e) => e.stopPropagation()}>
              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                max={50}
                disabled={{ before: new Date() }}
                numberOfMonths={1}
                locale={es}
              />
            </div>
          )}
        </div>
      </div>
      {/* PERSONAS */}
      <div
        className="search-field"
        onClick={() => setOpen(open === "people" ? null : "people")}
      >
        <Users className="icon" color="#777" />
        <div className="search-field-content">
          <span className="label">Personas</span>
          <span className="value">
            {adults} Adultos · {children} Niños
          </span>

          {open === "people" && (
            <div 
              className="overlay-box people"
              onClick={(e) => e.stopPropagation()}>
              <div className="row">
                <span>Adultos</span>
                <div className="counter">
                  <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>

              <div className="row">
                <span>Niños</span>
                <div className="counter">
                  <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                  <span>{children}</span>
                  <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>

              <button className="apply" onClick={() => setOpen(null)}>
                Aplicar
              </button>
            </div>
          )}

        </div>
      </div>

      {/* HABITACIONES */}
      <div
        className="search-field"
        onClick={() => setOpen(open === "rooms" ? null : "rooms")}
      >
        <BedDouble className="icon" color="#777"/>
        <div className="search-field-content">
          <span className="label">Habitaciones</span>
          <span className="value">{getRoomSummary()}</span>

        {open === "rooms" && (
          <div
            className="overlay-box rooms"
            onClick={(e) => e.stopPropagation()}
          >
            {roomTypes.map((room, index) => (
              <div className="room-row" key={room.name}>
                <div>
                  <strong>{room.name}</strong>
                  <div className="room-desc">{room.desc}</div>
                </div>

                <div className="counter">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const updated = [...roomTypes];
                      updated[index].count = Math.max(0, updated[index].count - 1);
                      setRoomTypes(updated);
                    }}
                  >
                    -
                  </button>

                  <span>{room.count}</span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const updated = [...roomTypes];
                      updated[index].count += 1;
                      setRoomTypes(updated);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <button className="apply" onClick={() => setOpen(null)}>
              Aplicar
            </button>
          </div>
        )}
        </div>
      </div>

      {/* BOTÓN BUSCAR */}
      <button className="search-button" onClick={handleSearch}>
        <Search className="icon"/>
      </button>
    </div>
  );
}
