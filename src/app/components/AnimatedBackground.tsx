import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      
      if (width > 0 && height > 0) {
        canvas.width = width;
        canvas.height = height;
        
        if (containerRef.current) {
          containerRef.current.style.height = `${height}px`;
        }
      }
    };

    updateCanvasSize();

    const drawGradientMesh = () => {
      if (canvas.width === 0 || canvas.height === 0) {
        animationFrameId = requestAnimationFrame(drawGradientMesh);
        return;
      }

      time += 0.003; // Reduced animation speed for better performance

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create dynamic gradient
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      gradient.addColorStop(0, `hsla(${220 + Math.sin(time) * 10}, 70%, 95%, 0.3)`);
      gradient.addColorStop(0.5, `hsla(${200 + Math.cos(time) * 10}, 65%, 93%, 0.2)`);
      gradient.addColorStop(1, `hsla(${240 + Math.sin(time * 1.5) * 10}, 75%, 97%, 0.3)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Skip expensive grain texture for better performance
      // Use CSS filter instead for grain effect

      animationFrameId = requestAnimationFrame(drawGradientMesh);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    setTimeout(() => {
      updateCanvasSize();
      drawGradientMesh();
    }, 100);

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateCanvasSize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-0 min-h-screen"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full opacity-40"
        style={{ filter: 'contrast(1.1) brightness(1.05)' }}
      />
    </div>
  );
}