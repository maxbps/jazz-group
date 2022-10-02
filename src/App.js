import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import des composants
import { Accueil } from "./Pages/Accueil";
import { Introduction } from "./Composants/Introduction/Introduction";

// Import du CSS
import "./App.css";

function App() {
  // #region [INTERFACE]
  return (
    <div className="app">
      <Accueil />
    </div>
  );
  // #endregion
}

export default App;
