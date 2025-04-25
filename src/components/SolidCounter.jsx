import React, { useRef, useEffect } from 'react';

// React wrapper for the solid-counter Web Component
const SolidCounter = ({ initialValue = 0, interval = 1000 }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    // When the props change, update the Web Component attributes
    if (counterRef.current) {
      counterRef.current.initialValue = initialValue;
      counterRef.current.interval = interval;
    }
  }, [initialValue, interval]);

  return (
    <solid-counter 
      ref={counterRef}
      initialValue={initialValue}
      interval={interval}
    />
  );
};

export default SolidCounter;