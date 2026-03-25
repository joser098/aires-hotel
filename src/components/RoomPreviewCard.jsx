import { BedDouble, BedSingle,  Users } from "lucide-react";

export default function RoomPreviewCard({
  href = "#",
  title,
  image,
  short_description,
  people,
  singleBeds,
  doubleBeds
}) {
  return (
    <a href={href} className="room-preview-card">
      <img src={image} alt={title} className="room-preview-media" />

      <div className="room-preview-body">
        <h3 className="room-preview-title">{title}</h3>

        {short_description ? (
          <p className="room-preview-description">{short_description}</p>
        ) : null}

        <div className="room-preview-meta">
          <span className="room-preview-meta-item">
            <Users size={16} />
            {people}
          </span>

          {
            singleBeds ? (
              <span className="room-preview-meta-item">
                <BedSingle size={16} />
                {singleBeds}
              </span>
            ) : null
          }
          {
            doubleBeds ? (
              <span className="room-preview-meta-item">
                <BedDouble size={16} />
                {doubleBeds}
              </span>
            ) : null
          }
          {/* <span className="room-preview-meta-item">
            <BedDouble size={16} />
            {beds}
          </span>

          <span className="room-preview-meta-item">
            <BedDouble size={16} />
            {beds}
          </span> */}
        </div>
      </div>
    </a>
  );
}
