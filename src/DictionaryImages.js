import React from "react";

export default function DictionaryImages({ images }) {
  if (!images || !images.photos || images.photos.length === 0) return null;

  return (
    <div className="photo-gallery">
      <h3>photos</h3>
      <div className="images-grid">
        {images.photos.map((photo, index) => (
          <img key={index} src={photo.src.landscape} alt={photo.alt} />
        ))}
      </div>
    </div>
  );
}
