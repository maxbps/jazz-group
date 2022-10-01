import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import des composants
import { Banniere } from "./Composants/Banniere/Banniere";
import { Introduction } from "./Composants/Introduction/Introduction";

// Import du CSS
import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  // #region [UTIL]
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
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
    slideInTop("#banniere")
    slideInTop("#introduction")
  }, [])
  // #endregion

  // #region [INTERFACE]
  return (
    <div className="app">
      <Banniere />
      <Introduction />
    </div>
  );
  // #endregion
}

export default App;
