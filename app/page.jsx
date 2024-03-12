"use client";
import About from "@ext/components/About";
import Education from "@ext/components/Education";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <div className="flex flex-col">
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
          zIndex: 1,
          color: "rgba(255,255,255, 0.1)",
        }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={150}
      />
      <About />
      <Education />
    </div>
  );
}
