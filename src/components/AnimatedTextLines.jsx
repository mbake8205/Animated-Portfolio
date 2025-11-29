import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className }) => {
  const safeText = text || "";
  const lines = safeText.split("\n").filter((line) => line.trim() !== "");
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  });
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          className="block leading-relaxed tracking-wide text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
