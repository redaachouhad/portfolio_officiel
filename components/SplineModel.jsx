// components/SplineModel.js
"use client";
import { Application } from "@splinetool/runtime";
import { useEffect } from "react";

const SplineModel = () => {
  useEffect(() => {
    let app;

    const initializeSpline = async () => {
      const canvas = document.getElementById("canvas3d");
      app = new Application(canvas);

      // Set canvas dimensions
      canvas.width = 20;
      canvas.height = 20;

      // Load your Spline model
      await app.load(
        "https://prod.spline.design/Y0-ZKZgaLofweQYl/scene.splinecode"
      );
    };

    initializeSpline();

    // Clean up the app when the component unmounts
    return () => {
      if (app) {
        app.dispose(); // Proper method to clean up Spline instance
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <canvas id="canvas3d" />;
};

export default SplineModel;
