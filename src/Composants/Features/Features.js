import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import du CSS
import "./Features.css";

// Import des Assets
import guitar from "../../Assets/features-guitar.jpg";
import drum from "../../Assets/features-drum.jpg";
import sound from "../../Assets/features-sound.jpg";
import audio from "../../Assets/features-audio.jpg";
import vocal from "../../Assets/features-vocal.jpg";
import more from "../../Assets/features-more.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Features() {
  // #region [UTIL]
  // Fonction pour faire apparaitre les features
  const animFeature = (elem, delay, duration) => {
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
    animFeature(".feature", 0.6, 1);
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <section id="features">
      <h1 className="rock-font display-4 text-light text-center feature">Our features</h1>
      <div className="container">
        <div className="row text-center text-light align-items-center">
          <div className="col-lg-6 col-xl-4 nunito p-5 feature">
            <img className="features-img" alt="a woman with drum" src={drum} />
            <div className="bg-dark p-3">
              <h1 className="rock-font">Drum kit</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 nunito p-5 feature">
            <img className="features-img" alt="guitar" src={guitar} />
            <div className="bg-dark p-3">
              <h1 className="rock-font">Guitar session</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 nunito p-5 feature">
            <img className="features-img" alt="a mixing table" src={sound} />
            <div className="bg-dark p-3">
              <h1 className="rock-font">Sound engineering</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-xl-4  nunito p-5 feature">
            <img className="features-img" alt="a mixing table" src={audio} />
            <div className="bg-dark p-3">
              <h1 className="rock-font">Audio mixing</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4  nunito p-5 feature">
            <img className="features-img" alt="a woman who sings" src={vocal} />
            <div className="bg-dark p-3">
              <h1 className="rock-font">Vocal class</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4  nunito p-5 feature">
            <img className="features-img" alt="guitars" src={more} />
            <div className="bg-dark p-3">
              <h1 className="rock-font">...and more</h1>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
                aliquam.
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
