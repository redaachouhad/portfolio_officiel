"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import About from "../About";
import Education from "../Education/Education";
import Experiences from "../Experiences/Experiences";
import Footer from "../Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import imageUrl from "./../../public/images/snow_image.svg";
function PrincipalePage() {
  const [image, setImage] = useState();
  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = new Image();
        img.src = imageUrl;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        setImage(img);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [imageUrl]);
  return (
    <>
      <div className="bg-[rgb(7,5,25)]">
        <Snowfall
          // Changes the snowflake color
          color="rgba(255,255,255, 0.3)"
          // Applied to the canvas element
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            color: "rgba(255,255,255, 0.1)",
            zIndex: "1",
          }}
          snowflakeCount={50}
          images={[image]}
        />
        <About />
        <Education />
        <Skills />
        <Experiences />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default PrincipalePage;
