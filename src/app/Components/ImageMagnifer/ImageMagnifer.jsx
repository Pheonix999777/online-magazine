import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./styles.scss";

const ImageMagnifier = ({ src }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const prevPosition = useRef({ x: 0, y: 0 });
  const [zoomed, setZoomed] = useState(false);

  const handleZoomToggle = (e) => {
    if (zoomed) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setZoomed(false);
    } else {
      setScale(3.5);
      setZoomed(true);
      isDragging.current = true;
      prevPosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - prevPosition.current.x;
      const deltaY = e.clientY - prevPosition.current.y;
      prevPosition.current = { x: e.clientX, y: e.clientY };
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }));
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "300px",
        height: "300px",
      }}
    >
      <Image
        ref={imageRef}
        src={src}
        alt=""
        width={300}
        height={300}
        style={{
          cursor: zoomed
            ? isDragging.current
              ? "grabbing"
              : "grab"
            : "zoom-in",
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.2s",
        }}
        draggable={false}
        onMouseDown={handleZoomToggle}
      />
    </div>
  );
};

export default ImageMagnifier;
