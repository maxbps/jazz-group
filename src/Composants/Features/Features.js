import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import du CSS
import "./Features.css";

// Import des Assets
import { default as play } from "../../Assets/Icons/play-circle.svg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Features() {
  // #region [UTIL]
  // Fonction pour faire apparaitre les features
  const animFeature = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
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
    animFeature(".feature", 0.6, 1);
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <section id="features">
      <div className="container">
        <div className="row text-center text-light align-items-center">
          <div className="col-lg-4 nunito p-5 feature">
            <div className="bg-dark p-3">
              <h1 className="mt-5 display-4">Jazzify</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam. In ornare sapien sed condimentum volutpat.
              </p>
            </div>
          </div>
          <div className="col-lg-4 nunito p-5 feature">
            <div className="bg-dark p-3">
              <h1 className="mt-5 display-4">Jazzify</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam. In ornare sapien sed condimentum volutpat.
              </p>
            </div>
          </div>
          <div className="col-lg-4 nunito p-5 feature">
            <div className="bg-dark p-3">
              <h1 className="mt-5 display-4">Jazzify</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam. In ornare sapien sed condimentum volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Features };
