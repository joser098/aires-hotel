import { BedDouble, Users } from "lucide-react";

export default function RoomPreviewCard({
  href = "#",
  title,
  image,
  description,
  people,
  beds
}) {
  return (
    <a href={href} className="room-preview-card">
      <img src={image} alt={title} className="room-preview-media" />

      <div className="room-preview-body">
        <h3 className="room-preview-title">{title}</h3>

        {description ? (
          <p className="room-preview-description">{description}</p>
        ) : null}

        <div className="room-preview-meta">
          <span className="room-preview-meta-item">
            <Users size={16} />
            {people}
          </span>

          <span className="room-preview-meta-item">
            <BedDouble size={16} />
            {beds}
          </span>
        </div>
      </div>
    </a>
  );
}
