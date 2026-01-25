import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./GalleryPage.css";

function GalleryPage({ Token, setToken }) {
  const canvasRef = useRef(null);
  const [gallerySections, setGallerySections] = useState([]); // [{ folder: '2k25', images: [url, ...] }, ...]

  // -------------------------
  // Dynamic import (Vite)
  // -------------------------
  useEffect(() => {
    // This uses Vite's import.meta.glob to eagerly import all image files as URLs.
    // Pattern: adjust if you use a different path.
    const modules = import.meta.glob(
      "/src/assets/gallery/**/*.{jpg,jpeg,png,gif,webp,svg}",
      { eager: true, as: "url" }
    );

    // Group by folder (the parent folder name under /gallery/)
    const groups = {};
    Object.keys(modules).forEach((filePath) => {
      const url = modules[filePath];
      // filePath example: '/src/assets/gallery/2k25/img001.jpg'
      const parts = filePath.split("/");
      const folder = parts[parts.length - 2] || "uncategorized";
      if (!groups[folder]) groups[folder] = [];
      groups[folder].push({ url, filePath });
    });

    // Convert to array, sort sections (descending by folder name so newest year first)
    const sections = Object.keys(groups)
      .sort((a, b) => b.localeCompare(a))
      .map((folder) => {
        // Optionally sort images by filename (lexicographic)
        const imgs = groups[folder].sort((a, b) =>
          a.filePath.localeCompare(b.filePath)
        );
        return {
          folder,
          images: imgs.map((i) => i.url),
        };
      });

    setGallerySections(sections);
  }, []);

  // -------------------------
  // Canvas animation (kept from your version)
  // -------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const gridSize = 80;
    const density = 0.6;
    const pathLength = 6;
    const pathCount = Math.floor(40 * density);
    const dotSpeed = 0.3;
    const lineFlowSpeed = 2;

    let circuits = [];
    let movingDots = [];
    let flowOffset = 0;
    let gridPoints = [];

    function generateGrid() {
      gridPoints = [];
      for (let x = gridSize / 2; x < width; x += gridSize) {
        for (let y = gridSize / 2; y < height; y += gridSize) {
          gridPoints.push({ x, y });
        }
      }
    }

    function initCircuits() {
      circuits = [];
      movingDots = [];
      for (let i = 0; i < pathCount; i++) {
        let start = gridPoints[Math.floor(Math.random() * gridPoints.length)];
        let path = [{ x: start.x, y: start.y }];

        for (let j = 0; j < pathLength; j++) {
          let last = path[path.length - 1];
          let dir = Math.random() > 0.5 ? "x" : "y";
          let step = gridSize * (Math.random() > 0.5 ? 1 : -1);
          let next = { x: last.x, y: last.y };

          dir === "x" ? (next.x += step) : (next.y += step);
          next.x = Math.max(0, Math.min(width, next.x));
          next.y = Math.max(0, Math.min(height, next.y));

          path.push(next);
        }

        circuits.push(path);
        movingDots.push({ path, t: Math.random() });
      }
    }

    function getPointOnPath(path, t) {
      let seg = Math.floor(t * (path.length - 1));
      let localT = t * (path.length - 1) - seg;
      let p1 = path[seg];
      let p2 = path[Math.min(seg + 1, path.length - 1)];

      return {
        x: p1.x + (p2.x - p1.x) * localT,
        y: p1.y + (p2.y - p1.y) * localT,
      };
    }

    let rafId = null;
    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0b0000";
      ctx.fillRect(0, 0, width, height);

      circuits.forEach((path) => {
        ctx.strokeStyle = "rgba(234,16,16,0.65)";
        ctx.setLineDash([10, 20]);
        ctx.lineDashOffset = -flowOffset;
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        path.forEach((p) => ctx.lineTo(p.x, p.y));
        ctx.stroke();
        ctx.setLineDash([]);
      });

      movingDots.forEach((dot) => {
        dot.t += dotSpeed / 200;
        if (dot.t > 1) dot.t = 0;
        const pos = getPointOnPath(dot.path, dot.t);
        ctx.fillStyle = "rgba(255,200,200,0.9)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      flowOffset += lineFlowSpeed;
      rafId = requestAnimationFrame(draw);
    }

    generateGrid();
    initCircuits();
    draw();

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      generateGrid();
      initCircuits();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // -------------------------
  // Render
  // -------------------------
  return (
    <div className="GalleryPage">
      <Navbar Token={Token} setToken={setToken} />

      {/* Canvas as background layer */}
      <canvas className="GalleryBgCanvas" ref={canvasRef} />

      {/* <header className="GalleryHeader">
        <h1 id="macondo-regular" className="pop">
          Gallery
        </h1>
      </header> */}

      <main className="GalleryMain">
        {gallerySections.length === 0 ? (
          <div className="gallery-empty" style={{ color: "white", textAlign: "center", padding: "80px 20px" }}>
            No gallery images found. Make sure your images are placed in <code>src/assets/gallery/&lt;folder&gt;/</code>
          </div>
        ) : (
          gallerySections.map((section) => (
            <section className="gallery-section" key={section.folder}>
              <h2 className="gallery-section-title">revelation-{section.folder}</h2>

              <div className="gallery">
                {section.images.map((src, idx) => (
                  <div className="photo" key={`${section.folder}-${idx}`}>
                    <img src={src} alt={`revelation-${section.folder}-${idx + 1}`} loading="eager" decoding="async" />
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
}

export default GalleryPage;
