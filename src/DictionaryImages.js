import React from "react";
import "./DictionaryImages.css";

export default function DictionaryImages({ images }) {
  if (!images || !images.photos || images.photos.length === 0) return null;

  return (
    <div className="photo-gallery">
      <h3>photos</h3>
      <div className="images-grid">
        {images.photos.map((photo, index) => (
          <a href={photo.url} target="_blank" rel="noreferrer">
            <img
              key={index}
              src={photo.src.landscape}
              alt={photo.alt}
              className="img-fluid"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
