import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import des composants
import { Banniere } from "../Composants/Banniere/Banniere";
import { Introduction } from "../Composants/Introduction/Introduction";
import { Features } from "../Composants/Features/Features";

// Import du CSS
import "../App.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Accueil() {
  // #region [UTIL]
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        lazy: false,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  // #endregion

  // #region [HOOK]
  // Au chargement de l'app, on affiche les parties en fonction du scrollTrigger
  useEffect(() => {
    slideInTop("#introduction");
    //slideInTop("#features");
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <div className="app">
      <Banniere />
      <Introduction />
      <Features />
    </div>
  );
  // #endregion
}

export { Accueil };
