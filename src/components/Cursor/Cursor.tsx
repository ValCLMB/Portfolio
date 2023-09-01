import "./Cursor.css";
import { useRef, useEffect } from "react";

export const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.onpointermove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      ref.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: "forwards" }
      );
    };

    document.body.onclick = () => {
      ref.current?.classList.add("scale");
      setTimeout(() => {
        ref.current?.classList.remove("scale");
      }, 100);
    };
  }, [ref]);

  return (
    <>
      <div className="cursor-container">
        <div ref={ref} className="cursor"></div>
      </div>
      <div className="blur"></div>
    </>
  );
};
