import React, { useRef } from "react";
import "./styles.scss";

const Zoom = ({ src }) => {
  const imageRef = useRef(null);

  // const handleMouseEnter = () => {
  //   const size = imageRef.current.getBoundingClientRect();
  //   imageRef.current.style.setProperty("--x", `${size.x}px`);
  //   imageRef.current.style.setProperty("--y", `${size.y}px`);
  //   imageRef.current.style.setProperty("--width", `${size.width}px`);
  //   imageRef.current.style.setProperty("--height", `${size.height}px`);
  // };

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const horizontal = ((e.clientX - left) / width) * 100;
    const vertical = ((e.clientY - top) / height) * 100;

    imageRef.current.style.setProperty("--x", `${horizontal}%`);
    imageRef.current.style.setProperty("--y", `${vertical}%`);
  };

  return (
    <div className="image" onMouseMove={handleMouseMove}>
      <img ref={imageRef} src={src} alt="" className="img" />
    </div>
  );
};

export default Zoom;
