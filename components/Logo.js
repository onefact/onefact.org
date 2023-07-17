import React, { useEffect, useRef } from 'react';

export function Logo() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = svgRef.current;

    const centerX = svg.clientWidth / 2;
    const centerY = svg.clientHeight / 2;

    const points = [
      {x: centerX, y: centerY - 50, rotation: 0, path: "M-100,-50L0,50L100,-50Z", fill: "rgba(134, 210, 247, 1.0)", scale: "scale(1, 1)"},
      {x: centerX - 50, y: centerY, rotation: 270, path: "M-100,-50L0,50L100,-50Z", fill: "rgba(254, 100, 205, 1.0)", scale: "scale(1, 1)"},
      {name: "square", x: centerX + 50, y: centerY, rotation: 0, path: "M-50,0L0,-50L50,0L0,50Z", fill: "rgba(231, 231, 2, 1.0)", scale: "scale(1, 1)"},
      {name: "parallelogram", x: centerX - 25, y: centerY + 75, rotation: 0, path: "M-75,25L25,25L75,-25L-25,-25Z", fill: "rgba(58, 255, 123, 1.0)", scale: "scale(-1, 1)"},
      {name: "top_triangle", x: centerX + 75, y: centerY - 50, rotation: 270, path: "M0,-25L50,25L-50,25Z", fill: "rgba(255, 100, 148, 1.0)", scale: "scale(1, 1)"},
      {name: "bottom_triangle", x: centerX, y: centerY + 25, rotation: 0, path: "M0,-25L50,25L-50,25Z", fill: "rgba(167, 189, 253, 1.0)", scale: "scale(1, 1)"},
      {name: "medium_triangle", x: centerX + 50, y: centerY + 50, rotation: 90, path: "M-50,-50L50,-50L50,50Z", fill: "rgba(2, 165, 229, 1.0)", scale: "scale(1, 1)"}
    ];

    const targetPoints = [
      {x: centerX + 25, y: centerY, rotation: 45},
      {x: centerX + 25, y: centerY + 0, rotation: 45},
      {x: centerX - 46, y: centerY + 0, rotation: 45},
      {x: centerX - 125, y: centerY -40, rotation: 90, scale: "scale(-1, 1)"},
      {x: centerX - 59, y: centerY - 130, rotation: 0},
      {x: centerX - 99, y: centerY + 17, rotation: 135},
      {x: centerX - 200, y: centerY - 15, rotation: 90}
    ];

    points.forEach((point, i) => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${point.rotation}) ${point.scale ? point.scale : ''}`);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", point.path);
      path.setAttribute("fill", point.fill);
      g.appendChild(path);
      svg.appendChild(g);
      points[i].element = g;
    });

    const animate = () => {
      let done = true;
      points.forEach((point, i) => {
        const dx = targetPoints[i].x - point.x;
        const dy = targetPoints[i].y - point.y;
        const dr = targetPoints[i].rotation - point.rotation;

        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1 || Math.abs(dr) > 0.1) {
          done = false;
          point.x += dx * 0.01;
          point.y += dy * 0.01;
          point.rotation += dr * 0.01;
          point.element.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${point.rotation}) ${point.scale}`);
        }
      });

      if (!done) {
        requestAnimationFrame(animate);
      }
    }

    setTimeout(animate, 1000);

  }, []);

  return (
    <svg ref={svgRef} id="off-logo" width="500" height="500" style={{ border: "0px solid #d3d3d3" }} className="logo-svg"></svg>
  );
}