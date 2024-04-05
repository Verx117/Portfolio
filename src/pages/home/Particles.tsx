import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState, useEffect } from "react";

const About = () => {
  const [areParticlesLoaded, setAreParticlesLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });

        setAreParticlesLoaded(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {areParticlesLoaded && (
        <Particles
          options={{
            fullScreen: {
              enable: false,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 3,
                  opacity: 10,
                  speed: 3,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              move: {
                enable: true,
                outModes: "bounce" as const,
                random: false,
                speed: 0.1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 175,
              },
              opacity: {
                value: { min: 0, max: 0.48927153781200905 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
          }}
          className="absolute size-full"
        />
      )}
    </>
  );
};

export default About;
