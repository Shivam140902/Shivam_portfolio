import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ❌ Disable on mobile
    if (window.innerWidth < 768) return;

    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const mouseMoveHandler = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    const loop = () => {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;

        gsap.to(cursor, {
          x: cursorPos.x,
          y: cursorPos.y,
          duration: 0.1,
        });
      }
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    const elements = document.querySelectorAll("[data-cursor]");

    elements.forEach((item) => {
      const element = item as HTMLElement;

      const mouseOver = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }

        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      };

      const mouseOut = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      };

      element.addEventListener("mouseover", mouseOver);
      element.addEventListener("mouseout", mouseOut);

      // Cleanup
      return () => {
        element.removeEventListener("mouseover", mouseOver);
        element.removeEventListener("mouseout", mouseOut);
      };
    });

    // Global cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;