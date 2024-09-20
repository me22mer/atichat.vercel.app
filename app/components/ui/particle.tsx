"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Particle() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: {
              value: 65,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#ffffff"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 1.5 },
              random: true,
              animation: {
                enable: true,
                speed: 0.7,
                minimumValue: 0.5,
                sync: false,
              },
            },
            move: {
              enable: false,
            },
            shadow: {
              enable: true,
              blur: 15,
              color: "#ffffff",
            },
          },
          background: {
            color: "#09090b",
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
