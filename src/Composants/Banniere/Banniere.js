import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import des composants
import { Menu } from "../Menu/Menu";

// Import du CSS
import "./Banniere.css";

// Import des Assets
import { default as list } from "../../Assets/Icons/list.svg";
import { default as facebook } from "../../Assets/Icons/facebook.svg";
import { default as twitter } from "../../Assets/Icons/twitter.svg";
import { default as instagram } from "../../Assets/Icons/instagram.svg";

// Initialisation de gsap
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Banniere() {
  // #region [INITIALISATION]
  const [visibleMenu, setVisibleMenu] = useState(false);
  // #endregion

  // #region [UTIL]
  // Fonction d'apparition du menu
  const animMenu = (elem, delay) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0.5,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay,
        duration: 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  // Fonction d'apparition du titre
  const animTitle = (elem, delay) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0.5,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay,
        duration: 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  // Fonction d'apparition des icones
  const animIcons = (elem, delay) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0.5,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay,
        duration: 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  // #endregion

  // #region [EVENT]
  const handleClickMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  // #endregion

  // region [HOOK]
  useEffect(() => {
    animTitle(".banniere-title", 0.5);
    animIcons(".banniere-icon", 1.5);
    animMenu("#menu", 2.5);
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <section id="banniere" className="d-flex align-items-center">
      {/*  gestion du menu */}
      {visibleMenu ? (
        <Menu visible={() => handleClickMenu()} />
      ) : (
        <div
          id="menu"
          className="fixed-top m-5 d-flex text-light nunito title"
          onClick={() => handleClickMenu()}
        >
          <img className="menu-icon" src={list} />
          Menu
        </div>
      )}
      <div className="container-fluid px-4 px-lg-5 text-center text-light">
        <h1 className="mb-1 display-1 rock-font">Rockify</h1>
        <h2 className="mb-5 display-4 bold rock-font">
          THE rock band of the moment
        </h2>
        <div className="d-none d-lg-block banniere-icons-container">
          <div className="row banniere-icon-container align-items-center">
            <img className="banniere-icon " src={facebook} />
          </div>
          <div className="row banniere-icon-container align-items-center">
            <img className="banniere-icon" src={twitter} />
          </div>
          <div className="row banniere-icon-container align-items-center">
            <img className="banniere-icon" src={instagram} />
          </div>
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Banniere };
