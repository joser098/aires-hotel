import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RoomPreviewCard from "./RoomPreviewCard.jsx";
import { rooms } from "../data/rooms.js";

export default function RoomsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false
  });

  return (
    <section className="rooms-section container">
      <h2 className="section-title">Habitaciones</h2>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn left"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {rooms.map((room) => (
              <div className="embla__slide" key={room.slug}>
                <RoomPreviewCard
                  href={`/habitaciones/${room.slug}`}
                  title={room.title}
                  image={room.heroImage}
                  description={room.description[0]}
                  people={`${room.guests} ${room.guests === 1 ? "persona" : "personas"}`}
                  beds={room.beds}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn right"
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
