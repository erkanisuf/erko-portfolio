import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GiCircle } from "react-icons/gi";
import { IoMicCircleOutline } from "react-icons/io5";

import { FcLink } from "react-icons/fc";
import CustomCursorCSS from "./CustomCursor.module.css";
const CustomCursor = () => {
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
      case "textaboutme":
        return (
          <motion.div
            initial={{ borderRadius: 0 }}
            animate={{ borderRadius: 100 }}
            transition={{ duration: 0.5 }}
            className={CustomCursorCSS.textCursor}
            style={{
              left: `${mouse.x - 15}px`,
              top: `${mouse.y - 15}px`,
            }}
          ></motion.div>
        );
      case "scrolldownid":
        return <p style={{ color: "white", width: "100px" }}>Scroll down</p>;
    }
  };
  return (
    <div
      className={
        target === "textaboutme"
          ? CustomCursorCSS.cursorText
          : CustomCursorCSS.cursorMain
      }
      style={{
        left: `${mouse.x}px`,
        top: `${mouse.y}px`,
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
