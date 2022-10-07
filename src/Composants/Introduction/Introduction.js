import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import du CSS
import "./Introduction.css";

// Import des Assets
import vynil from "../../Assets/vynilwbg.png";
import { default as play } from "../../Assets/Icons/play-circle.svg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Introduction() {
  // #region [UTIL]
  // Fonction d'apparition des elements
  const animAppear = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  // Fonction pour faire tourner le vynil
  const animVynil = (elem) => {
    gsap.fromTo(
      elem,
      {
        rotation: 0,
      },
      {
        rotation: 360,
        delay: 0,
        duration: 3,
        repeat: true,
        ease: "none",
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
    animAppear("#introduction-text");
    animAppear("#introduction-vynil");
    animVynil(".introduction-vynil-img");
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <section id="introduction">
      <div className="container">
        <div className="row text-center text-light align-items-center">
          <div id="introduction-text" className="col-lg-6 nunito">
            <h1 className="mt-5 display-4 rock-font">At the beginning...</h1>
            <p className="text-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              maximus molestie pulvinar. Sed lacinia nisl vitae nisi cursus
              aliquam. In ornare sapien sed condimentum volutpat.
            </p>
            <p className="text-normal">
              Integer ac libero quis sem ullamcorper tristique. Suspendisse at
              malesuada augue. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.
            </p>
            <p className="text-normal">
              In consequat dui vel nunc gravida mollis. Sed non nulla eget odio
              eleifend mattis nec a felis. Donec sit amet turpis id libero
              fermentum pellentesque semper in dolor. Vivamus in nibh nec risus
              ultrices laoreet eget at arcu.
            </p>
          </div>
          <div id="introduction-vynil" className="col-lg-6 d-none d-lg-block">
            <img
              alt="image de vynil"
              className="introduction-vynil-img"
              src={vynil}
            />
          </div>
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Introduction };
