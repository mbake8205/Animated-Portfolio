import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
      I build scalablem, high-performance solutions
      from prototype to production`;
  const imgRef = useRef(null);
  const aboutText = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  When I’m not shipping:
⚡️ Open-sourcing my latest experiment (or hacking on yours)
🧗 Rock climbing (problem-solving with real stakes)
🎸 Strumming chords while CI pipelines pass (multitasking at its finest)`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    const img = imgRef.current;

    gsap.set(img, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });

    gsap.to(img, {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
      },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4x">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose,  Build to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div
        className="flex flex-col items-center justify-between
      gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row
      md:text-2xl lg:text-3xl text-white/60 grayscale opacity-80"
      >
        <img
          ref={imgRef}
          src="images/me.jpg"
          alt="me"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
