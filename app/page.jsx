"use client";
import About from "@ext/components/About";
import Education from "@ext/components/Education/Education";
import Experiences from "@ext/components/Experiences/Experiences";
import Footer from "@ext/components/Footer";
import Projects from "@ext/components/Projects/Projects";
import Skills from "@ext/components/Skills/Skills";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(7,5,25)]">
        <Snowfall
          // Changes the snowflake color
          color="rgba(255,255,255, 0.2)"
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
          snowflakeCount={150}
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
