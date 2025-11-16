function Map() {
  return (
    <iframe
      src="https://www.google.com/maps?q=32.709694,51.643000&hl=fa&z=15&output=embed"
      width="100%"
      height="400"
      style={{ borderRadius: "1rem",filter: "invert(90%) hue-rotate(180deg)"}}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  );
}

export default Map;
