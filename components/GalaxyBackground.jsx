"use client";
import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width, height;
        let stars = [];
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        const handleMouseMove = (e) => {
            targetMouseX = (e.clientX - width / 2) * 0.05;
            targetMouseY = (e.clientY - height / 2) * 0.05;
        };

        window.addEventListener("mousemove", handleMouseMove);

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initStars();
        }

        function initStars() {
            stars = Array.from({ length: 400 }, () => ({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * 2,
                radius: Math.random() * 1.5 + 0.1,
                speed: Math.random() * 0.2 + 0.05,
                color: Math.random() > 0.8 ? '#d0b3ff' : Math.random() > 0.6 ? '#38bdf8' : '#ffffff',
                alpha: Math.random()
            }));
        }

        function draw() {
            // Smooth mouse interpolation
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            ctx.clearRect(0, 0, width, height);

            // Draw deep space background with nebula gradients
            const gradient = ctx.createRadialGradient(
                width / 2 + mouseX * 2, height / 2 + mouseY * 2, 0,
                width / 2, height / 2, width * 0.8
            );
            gradient.addColorStop(0, "rgba(11, 15, 42, 1)");
            gradient.addColorStop(0.5, "rgba(8, 11, 30, 1)");
            gradient.addColorStop(1, "rgba(3, 5, 20, 1)");
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw stars with parallax
            stars.forEach((star) => {
                const px = width / 2 + star.x + (mouseX * star.z);
                const py = height / 2 + star.y + (mouseY * star.z);

                // Wrap around logic
                if (px < 0) star.x += width;
                if (px > width) star.x -= width;
                if (py < 0) star.y += height;
                if (py > height) star.y -= height;

                ctx.beginPath();
                ctx.arc(px, py, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = star.alpha;
                ctx.fill();

                // Twinkle effect
                star.alpha += (Math.random() - 0.5) * 0.05;
                if(star.alpha < 0.1) star.alpha = 0.1;
                if(star.alpha > 1) star.alpha = 1;

                // Slow upward drift
                star.y -= star.speed;
            });
            ctx.globalAlpha = 1; // reset alpha

            requestAnimationFrame(draw);
        }

        resize();
        draw();

        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas 
            className="fixed top-0 left-0 w-full h-full -z-10 bg-space-900 pointer-events-none" 
            ref={canvasRef} 
        />
    );
}