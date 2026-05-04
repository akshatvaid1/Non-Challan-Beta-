'use client';

import { useState, useEffect } from 'react';

const MESSAGES = [
  "This is a Beta Website!",
  "Built for your comfort",
  "Developed by Akshat Vaid"
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % MESSAGES.length);
        setAnimate(true);
      }, 300); // animation gap matching transition

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-banner" style={{ background: "linear-gradient(90deg, #000000, #111111)" }}>
      <span 
        id="banner-text"
        className={animate ? "fade-in" : "fade-out"}
      >
        {MESSAGES[index]}
      </span>
    </div>
  );
}
