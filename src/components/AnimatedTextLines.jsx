import { useRef } from "react";

const AnimatedTextLines = ({text, className}) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const containerRef = useRef(null);
    const lineRefs = useRef([]);
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span key={index} ref={(el) => (lineRefs.current[index] = el)} className="block leading-relaxed tracking-wide text-pretty" >{line}</span>
      ))}
    </div>
  )
}

export default AnimatedTextLines