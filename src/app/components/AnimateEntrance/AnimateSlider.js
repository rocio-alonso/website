"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const AnimateSlider = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const springs = useSpring({
    from: {opacity: 0 },
    to: inView ? {opacity: 1 } : {opacity: 0 },
    config: { duration: 1000, easing: easings.easeInOutSine },
  });

  return (
    <animated.div ref={ref} style={{ ...springs, width: "100%", overflow: "hidden" }}>
      {children}
    </animated.div>
  );
};

export default AnimateSlider;
