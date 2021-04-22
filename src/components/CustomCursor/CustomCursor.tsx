import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import CustomCursorCSS from "./CustomCursor.module.css";
const CustomCursor = () => {
  const [mouse, setMouse] = useState<any>({ x: 0, y: 0 });

  const mouseMove = (e: any) => {
    const { pageX: x, pageY: y } = e;
    setMouse({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => mouseMove(e));

    return () => {
      window.removeEventListener("mousemove", (e) => mouseMove(e));
    };
  }, []);

  return (
    <div
      className={CustomCursorCSS.cursorMain}
      style={{
        left: `${mouse.x + 20}px`,
        top: `${mouse.y + 32}px`,
      }}
    >
      <motion.div
        animate={{
          rotate: 180,
        }}
        transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
      >
        {" "}
        <FaLeaf />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
