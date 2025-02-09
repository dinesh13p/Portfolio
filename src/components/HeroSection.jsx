import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import profileImage from './DineshProfile.jpg';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!canvas || !ctx) {
      console.error("Canvas or context is not found!");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let circles = [];

    for (let i = 0; i < 50; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
      });
    }

    let animationFrameId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(221, 7, 7, 0.79)";
        ctx.fill();
        circle.x += circle.dx;
        circle.y += circle.dy;

        if (circle.x < 0 || circle.x > canvas.width) circle.dx *= -1;
        if (circle.y < 0 || circle.y > canvas.height) circle.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <div className="content">
        <h1>
          Hi <span className="wave">👋🏼</span> I'm Dinesh Poudel
        </h1>
        <p>A student from Nepal.</p>
      </div>
      <div className="profileimage">
        <img src={profileImage} alt="Dinesh Poudel" />
      </div>
    </section>
  );
};

export default HeroSection;