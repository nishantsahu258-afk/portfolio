import { useEffect, useRef } from 'react';
import { initRippleCanvas } from '../../js/ripple';

export default function RippleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = initRippleCanvas(canvasRef.current);
    return cleanup;
  }, []);

  return <canvas ref={canvasRef} id="rippleCanvas" className="absolute inset-0 w-full h-full z-0" />;
}
