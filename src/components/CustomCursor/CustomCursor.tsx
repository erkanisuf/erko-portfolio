import React, { useEffect, useState } from "react";

import { IoMicCircleOutline } from "react-icons/io5";
import useWindowSize from "../SVG/useWindowSize";

import CustomCursorCSS from "./CustomCursor.module.css";
const CustomCursor = () => {
  const [width] = useWindowSize();
  const [mouse, setMouse] = useState<any>({ x: 0, y: 0 });
  const [target, setTarget] = useState<string>("");
  const mouseMove = (e: any) => {
    const { pageX: x, pageY: y } = e;
    setMouse({ x, y });
    if (e.target.id) {
      setTarget(e.target.id);
    } else {
      setTarget("");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => mouseMove(e));

    return () => {
      window.removeEventListener("mousemove", (e) => mouseMove(e));
    };
  }, []);

  //changes cursor style depending on what id container it has under the cursor
  const cursrosType = () => {
    switch (target) {
      case "letstalk":
        return (
          <div>
            <IoMicCircleOutline
              style={{ color: "rgba(255, 255, 255, 0.986)", fontSize: "25px" }}
            />
          </div>
        );

      case "scrolldownid":
        return (
          <p
            style={{
              color: "rgb(255, 100, 203",
              width: "100px",
              position: "absolute",
              top: -100,
              left: -25,
            }}
          >
            Scroll down
          </p>
        );
    }
  };

  // for mobile doesnt render cursor  just in case if bugs happens
  if (width < 1200) {
    return <></>;
  } else
    return (
      <div
        className={
          target === "textaboutme"
            ? CustomCursorCSS.cursorText
            : CustomCursorCSS.cursorMain
        }
        style={{
          left: `${mouse.x}px`,
          top: `${mouse.y + 30}px`,
          border:
            target !== "textaboutme" && target !== "letstalk"
              ? "2px solid rgb(255, 100, 203)"
              : "none",
        }}
      >
        {cursrosType()}
      </div>
    );
};

export default CustomCursor;
