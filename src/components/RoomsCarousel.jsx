import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RoomPreviewCard from "./RoomPreviewCard.jsx";
import { rooms } from "../data/rooms.js";

export default function RoomsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapPoints, setSnapPoints] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false
  });

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onReInit = () => {
      setSnapPoints(emblaApi.scrollSnapList());
      onSelect();
    };

    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  return (
    <section className="rooms-carousel">
      <div className="carousel-mobile-hint" aria-hidden="true">
        <ChevronLeft size={16} />
        <span>Desliza para ver mas</span>
        <ChevronRight size={16} />
      </div>

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
                  short_description={room.short_description}
                  people={room.guests}
                  singleBeds={room.singleBeds}
                  doubleBeds={room.doubleBeds}
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

      {snapPoints.length > 1 && (
        <div className="carousel-dots" aria-label="Navegacion del carrusel">
          {snapPoints.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`carousel-dot ${index === selectedIndex ? "active" : ""}`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir a la habitacion ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
