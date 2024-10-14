import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './style.css'; // Assuming your styles are in this file

const Tabbar = () => {
  const homeRef = useRef(null);
  const trendRef = useRef(null);
  const cartRef = useRef(null);
  const meRef = useRef(null);
  
  const homeTextRef = useRef(null);
  const trendTextRef = useRef(null);
  const cartTextRef = useRef(null);
  const meTextRef = useRef(null);

  const animations = useRef({});

  useEffect(() => {
    // Initialize all animations
    animations.current = {
      anim1: lottie.loadAnimation({
        container: homeRef.current,
        path: 'https://raw.githubusercontent.com/Pudge1996/Lottie/master/home.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
      }),
      anim2: lottie.loadAnimation({
        container: trendRef.current,
        path: 'https://raw.githubusercontent.com/Pudge1996/Lottie/master/trend.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
      }),
      anim3: lottie.loadAnimation({
        container: cartRef.current,
        path: 'https://raw.githubusercontent.com/Pudge1996/Lottie/master/cart.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
      }),
      anim4: lottie.loadAnimation({
        container: meRef.current,
        path: 'https://raw.githubusercontent.com/Pudge1996/Lottie/master/me.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
      }),
    };

    // Cleanup animations on unmount
    return () => {
      Object.values(animations.current).forEach((anim) => anim.destroy());
    };
  }, []);

  const handleClick = (activeAnim, activeText) => {
    animations.current.anim1.goToAndStop(0);
    animations.current.anim2.goToAndStop(0);
    animations.current.anim3.goToAndStop(0);
    animations.current.anim4.goToAndStop(0);

    activeAnim.playSegments([25, 56], true);

    homeTextRef.current.classList.remove('labelactive');
    trendTextRef.current.classList.remove('labelactive');
    cartTextRef.current.classList.remove('labelactive');
    meTextRef.current.classList.remove('labelactive');

    activeText.classList.add('labelactive');
  };

  return (
    <div className="content" >
      <div className="Tabbar">
        <div className="box box1" onClick={() => handleClick(animations.current.anim1, homeTextRef.current)}>
          <div className="icon" ref={homeRef}></div>
          <div className="label" ref={homeTextRef} id="homeText">Home</div>
        </div>
        <div className="box box2" onClick={() => handleClick(animations.current.anim2, trendTextRef.current)}>
          <div className="icon" ref={trendRef}></div>
          <div className="label" ref={trendTextRef} id="trendText">Trend</div>
        </div>
        <div className="box box3" onClick={() => handleClick(animations.current.anim3, cartTextRef.current)}>
          <div className="icon" ref={cartRef}></div>
          <div className="label" ref={cartTextRef} id="cartText">Cart</div>
        </div>
        <div className="box box4" onClick={() => handleClick(animations.current.anim4, meTextRef.current)}>
          <div className="icon" ref={meRef}></div>
          <div className="label" ref={meTextRef} id="meText">Me</div>
        </div>
      </div>
    </div>
  );
};

export default Tabbar;
