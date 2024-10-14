import { React } from 'react';
import { gsap } from 'gsap';  // Import GSAP
import './style.css';

const MainLoading = () => {
  let pumpLevels = [25, 40, 50, 0];
  let tankLevels = [30, 60, 110, -20];
  let counter = 0;
  let isAnimating = false;

  function pumpHeart() {
    if (isAnimating) {
      return;
    }

    isAnimating = true;
    // forward
    gsap.to('.heart', {
      translateZ: pumpLevels[counter],
      duration: 0.5
    });

    gsap.to('.curve', {
      bottom: tankLevels[counter],
      transformOrigin: 'bottom',
      scaleY: 1,
      duration: 0.5
    });

    gsap.to('.tank', {
      height: counter === 3 ? 0 : tankLevels[counter],
      duration: 0.5
    });

    // reverse
    gsap.to('.curve', {
      delay: 0.6,
      bottom: tankLevels[counter],
      transformOrigin: 'bottom',
      scaleY: 0.5,
      duration: 0.5
    });

    gsap.to('.heart', {
      delay: 0.6,
      translateZ: 0,
      duration: 0.25,
      onComplete: function () {
        isAnimating = false;
      }
    });

    if (++counter > 3) counter = 0;
  }

  setInterval(() => pumpHeart(), 2000);

  return (
    <>
      <div className="container">
        <div className="heart-wrap">
          <div onClick={pumpHeart} className="heart"> {/* Fix: onClick should pass reference, not call the function */}
            <div className="tank" />
            <svg
              className="curve"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g>
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(254, 113, 113, 0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={1}
                  fill="rgba(254, 113, 113, 0.3)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={2}
                  fill="rgba(254, 113, 113, 1)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <svg>
        <clipPath id="myPath" clipPathUnits="objectBoundingBox">
          <path d="M0.373,0.967 S0.616,0.866,0.768,0.644 S0.912,0.107,0.739,0 S0.373,0.108,0.373,0.108 S0.166,-0.113,0,-0.002 S-0.159,0.432,-0.021,0.644 S0.373,0.967,0.373,0.967" />
        </clipPath>
      </svg>
    </>
  );
};

export default MainLoading;
