import React from 'react'
import Particles from 'react-tsparticles'
import './homeParticles.css'


function HomeParticles() {

    const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
    console.log(container.canvas);
    console.log(container.canvas);
    };


  return (
    <div>
        <Particles 
        canvaClassName ="stuff"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: {
                enable: true,
                zIndex: -1
            },
          background: {
            color: {
              value: "#212529",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              // onHover: {
              //   enable: true,
              //   mode: "repulse",
              // },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#14CC4C",
            },
            links: {
              color: "#75FF33",
              distance: 150,
              enable: true,
              opacity: 0.5,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
        }}
      />   

    </div>
  )
}

export default HomeParticles