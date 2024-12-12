"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import styles from "@/app/components/Card/Card.module.css";

const AnimateEntrance = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const springs = useSpring({
    from: { transform: "translateY(3em)", opacity: 0 },
    to: inView ? { transform: "translateY(0px)", opacity: 1 } : {},
    config: { duration: 1000, easing: easings.easeInOutSine },
  });

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};

export default AnimateEntrance;
