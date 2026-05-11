import Main from "./main_page";
import About from "./About_me";
import { BrowserRouter, Routes } from "react-router";
import Projects from "./Projects";
import AnimatedRoutes from "./animated_Routes";
import LightPillar from './Light_Piller.jsx';
import LineWaves from './Line_waves.jsx';
function App(){

  return (
    <>
      {/* <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <LightPillar
          topColor="#3F42B0"
          bottomColor="#3F42B0"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.001}
          pillarWidth={20}
          pillarHeight={1}
          noiseIntensity={0.1}
          pillarRotation={-25}
          interactive={false }
          mixBlendMode="screen"
          quality="high"
        />
      </div> */}

    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
    <LineWaves
      speed={0.07}
      innerLineCount={20}
      outerLineCount={80}
      warpIntensity={3}
      rotation={-45}
      edgeFadeWidth={0.01}
      colorCycleSpeed={10}
      brightness={0.5}
      color1="#0008EB" //0008EB
      color2="#174896" //174896
      color3="#b61111" //b61111
      color4="#FFFFFF" //
      enableMouseInteraction
      mouseInfluence={1}

    />

    </div>


       <div style={{ position: 'relative', zIndex: 0, background: 'transparent' }}>
        <AnimatedRoutes />
      </div>
    </>
  );
}

export default App;
