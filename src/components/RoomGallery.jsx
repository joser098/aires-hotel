import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function RoomGallery({ images = [], title = "Habitacion" }) {
  const galleryImages = images.length > 0 ? images : ["/images/rooms/room.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? galleryImages.length - 1 : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === galleryImages.length - 1 ? 0 : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryImages.length, isOpen]);

  const goToPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setSelectedIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  const openAt = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const featured = galleryImages[0];
  const secondary = galleryImages.slice(1, 3);
  const strip = galleryImages.slice(3);

  return (
    <>
      <div className="room-gallery">
        <div className="gallery-grid">
          <button
            type="button"
            className="gallery-tile gallery-main"
            onClick={() => openAt(0)}
          >
            <img src={featured} alt={`${title} principal`} />
          </button>

          <div className="gallery-side">
            {secondary.map((image, index) => (
              <button
                type="button"
                className="gallery-tile"
                key={`${image}-${index}`}
                onClick={() => openAt(index + 1)}
              >
                <img src={image} alt={`${title} vista ${index + 2}`} />
              </button>
            ))}
          </div>
        </div>

        {strip.length > 0 && (
          <div className="gallery-strip">
            {strip.map((image, index) => (
              <button
                type="button"
                className="gallery-thumb"
                key={`${image}-thumb-${index}`}
                onClick={() => openAt(index + 3)}
              >
                <img src={image} alt={`${title} miniatura ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="gallery-overlay" onClick={() => setIsOpen(false)}>
          <div className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar galeria"
            >
              <span>Cerrar</span>
              <X size={16} strokeWidth={2.2} />
            </button>

            <div className="gallery-stage">
              <button
                type="button"
                className="gallery-arrow left"
                onClick={goToPrevious}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} strokeWidth={2.25} />
              </button>

              <img
                key={selectedIndex}
                src={galleryImages[selectedIndex]}
                alt={`${title} imagen ${selectedIndex + 1}`}
                className="gallery-preview"
              />

              <button
                type="button"
                className="gallery-arrow right"
                onClick={goToNext}
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} strokeWidth={2.25} />
              </button>
            </div>

            <div className="gallery-filmstrip">
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  key={`${image}-film-${index}`}
                  className={`film-thumb ${index === selectedIndex ? "active" : ""}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img src={image} alt={`${title} seleccion ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
