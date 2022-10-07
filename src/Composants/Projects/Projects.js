import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import du CSS
import "./Projects.css";

// Import des Assets
import guitar from "../../Assets/features-guitar.jpg";
import drum from "../../Assets/features-drum.jpg";
import sound from "../../Assets/features-sound.jpg";
import audio from "../../Assets/features-audio.jpg";
import vocal from "../../Assets/features-vocal.jpg";
import more from "../../Assets/features-more.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Projects() {
  // #region [UTIL]
  // Fonction pour faire apparaitre les projects
  const animProject = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: delay,
        duration: duration,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  // #endregion

  // region [HOOK]
  useEffect(() => {
    animProject(".project", 0.6, 1);
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <section id="projects">
      <h1 className="rock-font display-4 text-light text-center mb-5">Our projects</h1>
      <div className="container">
        <div className="row text-center text-light align-items-center projects-row">
          <div className="col-lg-6 col-xl-4 nunito project">
            <img className="projects-img" alt="a woman with drum" src={drum} />
          </div>
          <div className="col-lg-6 col-xl-4 nunito project">
            <img className="projects-img" alt="guitar" src={guitar} />
          </div>
          <div className="col-lg-6 col-xl-4 nunito project">
            <img className="projects-img" alt="a mixing table" src={sound} />
          </div>

          <div className="col-lg-6 col-xl-4  nunito project">
            <img className="projects-img" alt="a mixing table" src={audio} />
          </div>
          <div className="col-lg-6 col-xl-4  nunito project">
            <img className="projects-img" alt="a woman who sings" src={vocal} />
          </div>
          <div className="col-lg-6 col-xl-4  nunito project">
            <img className="projects-img" alt="guitars" src={more} />
          </div>
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Projects };
