import React, {useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import du CSS
import "./Menu.css";

// Initialisation de gsap
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Menu(props) {
  const { visible } = props;

  // #region [UTIL]
  // Fonction pour faire apparaitre le menu deroulé
  const animOpenMenu = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0.5,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0,
        duration: 0.6,
      }
    );
  };
  // #endregion

    // region [HOOK]
    useEffect(() => {
      animOpenMenu(".menu");
    }, []);
    // #endregion

  // #region [INTERFACE]
  return (
    <div className="menu" onClick={visible}>
      <div>a</div>
    </div>
  );
  // #endregion
}

export { Menu };
