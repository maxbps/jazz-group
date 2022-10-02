import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import du CSS
import "./Introduction.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Introduction() {
  // #region [INTERFACE]
  return (
    <section id="introduction">
      <div className="container-fluid px-4 px-lg-5 text-center text-light">
        <div className="col-6">
          <h1 className="mt-5 display-1 nunito banniere-title">Jazzify</h1>
          <h2 className="display-4 banniere-title">
            Ecoute les meilleurs artistes du moment
          </h2>
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Introduction };
