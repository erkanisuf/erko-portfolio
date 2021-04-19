import React from "react";
import { motion } from "framer-motion";
import useWindowSize from "./useWindowSize";
const HeaderSVG = () => {
  const [width] = useWindowSize();

  if (width < 1024) {
    return <p>Loading..</p>;
  }
  return (
    <svg
      style={{ transform: "scaleX(-1)", marginLeft: "-200px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="750.114"
      height="550.804"
      data-name="Layer 1"
      viewBox="0 0 773.114 610.804"
    >
      <motion.path
        initial={{ fill: "#e6e6e6" }}
        animate={{ fill: "#221e41" }}
        transition={{ delay: 2, duration: 2 }}
        fill="#e6e6e6"
        d="M309.473 12.711H773.114V232.717H309.473z"
        data-name="Rectangle 62"
      ></motion.path>
      <path
        fill="#fff"
        d="M322.731 31.577H759.857V215.135H322.731z"
        data-name="Rectangle 75"
      ></path>
      <path
        className="topestBar"
        fill="#221e41"
        d="M309.276 0H772.917V19.697H309.276z"
        data-name="Rectangle 80"
      ></path>
      <circle
        cx="323.913"
        cy="11.582"
        r="3.651"
        fill="#fff"
        data-name="Ellipse 90"
      ></circle>
      <circle
        cx="337.77"
        cy="11.582"
        r="3.651"
        fill="#fff"
        data-name="Ellipse 91"
      ></circle>
      <circle
        cx="351.627"
        cy="11.582"
        r="3.651"
        fill="#fff"
        data-name="Ellipse 92"
      ></circle>
      <path
        fill="#f2f2f2"
        d="M584.272 61.279H656.9480000000001V185.434H584.272z"
      ></path>
      <motion.path
        initial={{ y: 0 }}
        animate={{ y: 45 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 5,
          repeatType: "mirror",
        }}
        className="firstDiv"
        fill="#221e41"
        d="M425.64 61.277H572.23V95.452H425.64z"
      ></motion.path>
      <motion.path
        initial={{ y: 0 }}
        animate={{ y: -45 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 5,
          repeatType: "mirror",
        }}
        fill="#f2f2f2"
        d="M425.64 104.969H572.23V141.74H425.64z"
      ></motion.path>
      <path
        fill="#f2f2f2"
        d="M425.64 151.257H572.23V185.43200000000002H425.64z"
      ></path>
      <motion.path
        initial={{ translateX: -213.443, translateY: -144.598 }}
        animate={{
          rotate: [0, -30, 0],
        }}
        transition={{ loop: Infinity, delay: 0.6, duration: 4 }}
        className="backHand"
        fill="#e08d99"
        d="M434.646 511.7a17.867 17.867 0 00-19.79-17.863 17.202 17.202 0 00-2.348.433l-60.464-51.827 3.613-19.476-29.801-9.658-8.986 31.21a18.103 18.103 0 007.68 20.205l74.382 47.045a17.068 17.068 0 00.091 1.751 17.867 17.867 0 0021.691 15.502 17.382 17.382 0 002.105-.608 17.92 17.92 0 0011.827-16.714z"
        transform="translate(-213.443 -144.598)"
      ></motion.path>
      <path
        fill="#3f3d56"
        d="M284.325 571.807h77.958c0 2.241 80.345 4.06 80.345 4.06a20.884 20.884 0 013.426 3.247 20.152 20.152 0 014.71 12.99v3.248a20.305 20.305 0 01-20.298 20.298H284.325a20.315 20.315 0 01-20.298-20.298v-3.247a20.326 20.326 0 0120.298-20.298z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        fill="#3f3d56"
        d="M134.573 470.245H155.68200000000002V606.644H134.573z"
      ></path>
      <path
        fill="#3f3d56"
        d="M429.206 752.939c0 2.554-31.988.988-71.447.988s-71.447 1.566-71.447-.988 31.987-22.806 71.447-22.806 71.447 20.252 71.447 22.806z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        className="backLeg"
        fill="#e08d99"
        d="M196.707 589.916L216.613 589.914 226.084 538.282 196.703 538.284 196.707 589.916z"
      ></path>
      <path
        fill="#2f2e41"
        d="M405.072 753.81l64.19-.002v-.812a24.984 24.984 0 00-24.984-24.984h-.003l-39.204.002z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        fill="#cbcbcb"
        d="M439.924 702.496l39.687-88.997a32.616 32.616 0 00-14.32-41.868l-86.083-46.16-39.281-3.342-36.235-3.293-.26.442c-.335.565-8.126 14.021-2.86 28.776 3.995 11.193 14.385 19.935 30.883 25.984 38.507 14.12 82.99 26.187 100.329 30.72a5.604 5.604 0 013.59 2.857 5.68 5.68 0 01.319 4.545l-36.87 82.837a7.307 7.307 0 006.185 9.79l27.55 2.006q.35.034.698.034a7.302 7.302 0 006.668-4.331z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        className="frontLeg"
        fill="#e08d99"
        d="M183.716 589.916L203.622 589.914 213.094 538.282 183.713 538.284 183.716 589.916z"
      ></path>
      <path
        fill="#2f2e41"
        d="M392.082 753.81l64.19-.002v-.812a24.984 24.984 0 00-24.984-24.984h-.003l-39.204.002z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        fill="#cbcbcb"
        d="M425.31 707.367l39.687-88.996a32.616 32.616 0 00-14.32-41.868l-86.083-46.161L325.313 527l-28.38-2.462.003-.39c-.334.565-8.125 14.022-2.859 28.777 3.995 11.192 6.266 19.934 22.764 25.984 38.507 14.12 82.99 26.187 100.328 30.719a5.604 5.604 0 013.591 2.857 5.68 5.68 0 01.319 4.545l-36.871 82.837a7.307 7.307 0 006.186 9.79l27.55 2.007q.35.033.698.033a7.302 7.302 0 006.668-4.33z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        fill="#2f2e41"
        d="M350.517 526.163c1.903-1.346 29.229 12.99 34.1 1.623-22.733-56.832-7.067-81.374-20.993-113.965a40.581 40.581 0 00-26.9-23.025l-36.13-1.823-.187.09a42.227 42.227 0 00-23.089 44.798c.129 35.469 21.35 62.52 13.93 88.247a8.317 8.317 0 00.786 6.468 7.93 7.93 0 005.06 3.75l47.704-6.364a8.061 8.061 0 006.522-1.262z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <motion.circle
        //   initial={{  }}
        animate={{
          rotate: [0, -30, 0],
        }}
        transition={{ loop: Infinity, delay: 0.1, duration: 5 }}
        className="head"
        cx="99.209"
        cy="190.998"
        r="39.882"
        fill="#e08d99"
      ></motion.circle>
      <motion.path
        className="hair"
        initial={{ translateX: -220.443, translateY: -144.598 }}
        animate={{
          rotate: [0, -20, 0],
        }}
        transition={{ loop: Infinity, delay: 0.8, duration: 3, repeatDelay: 2 }}
        fill="#2f2e41"
        d="M299.948 372.203c2.12.927 6.459-15.958 4.515-19.335-2.89-5.022-2.72-4.986-4.639-8.309s-2.348-7.87.137-10.794 8.236-2.536 9.37 1.13c-.73-6.963 6.157-12.56 12.979-14.132s14.017-.596 20.876-1.996c7.96-1.624 16.243-8.297 13.067-17.051a12.33 12.33 0 00-2.405-3.953c-3.67-4.126-8.803-5.887-13.822-7.59-10.44-3.545-21.167-7.133-32.187-6.742-18.105.643-35.22 13.159-41.32 30.218a42.473 42.473 0 00-1.758 6.536c-3.783 20.337 8.027 40.397 27.208 48.141z"
        transform="translate(-213.443 -144.598)"
      ></motion.path>
      <path
        fill="#3f3d56"
        d="M509.097 436.337l4.574 27.156a1.672 1.672 0 01-.097.898l-35.88 89.654a1.672 1.672 0 01-3.222-.55l-1.52-36.028a1.672 1.672 0 01.121-.7l32.827-80.782a1.672 1.672 0 013.197.352z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        fill="#221e41"
        d="M293.114 293.823L297.46 317.153 265.619 398.964 261.485 372.647 293.114 293.823z"
      ></path>
      <path
        fill="#3f3d56"
        d="M367.247 553.628c.784 3.058 103.64 6.368 104.707 5.443a21.674 21.674 0 002.474-3.827 150.42 150.42 0 002.076-3.856l-1.69-32.53-101.322-10.827s-4.482 27.145-5.89 39.617a29.957 29.957 0 00-.355 5.98z"
        transform="translate(-213.443 -144.598)"
      ></path>
      <path
        opacity="0.1"
        style={{ isolation: "isolate" }}
        d="M248.114 377.702L248.123 405.727 203.309 402.541 205.292 374.657 248.114 377.702z"
      ></path>
      <path
        opacity="0.1"
        style={{ isolation: "isolate" }}
        d="M189.717 382.557L189.988 382.523 187.872 394.437 162.975 392.667 163.825 380.716 189.717 382.557z"
      ></path>
      <path
        d="M367.247 553.628c.784 3.058 103.64 6.368 104.707 5.443a21.674 21.674 0 002.474-3.827l-106.826-7.596a29.957 29.957 0 00-.355 5.98z"
        opacity="0.1"
        transform="translate(-213.443 -144.598)"
        style={{ isolation: "isolate" }}
      ></path>
      <motion.path
        initial={{ translateX: -213.443, translateY: -144.598 }}
        animate={{
          rotate: [0, 5, 0],
        }}
        transition={{ loop: Infinity, delay: 0.6, duration: 3 }}
        className="frontHand"
        fill="#e08d99"
        d="M325.946 505.051l86.764 16.192a17.078 17.078 0 00.734 1.594 17.906 17.906 0 0011.491 8.972 17.72 17.72 0 0014.399-2.608 17.864 17.864 0 00-18.475-30.512 17.168 17.168 0 00-2.02 1.272l-75.361-25.744-3.857-19.43-31.26 2.069 3.24 32.57a17.767 17.767 0 0014.345 15.625z"
        transform="translate(-213.443 -144.598)"
      ></motion.path>
      <path
        fill="#2f2e41"
        d="M307.302 471.383l45.423-14.929-10.596-30.423a18.135 18.135 0 00-20.107-11.923 18.135 18.135 0 00-15.153 18.089z"
        transform="translate(-213.443 -144.598)"
      ></path>

      <motion.path
        initial={{ x: -83.443, y: -180.598 }}
        animate={{ x: -83.443, y: -150.598 }}
        transition={{ duration: 1.5, repeatType: "mirror", repeat: Infinity }}
        fill="rgb(255, 100, 203)"
        d="M743.65 723.895c18.274 9.458 26.398 30.05 26.398 30.05s-21.503 5.257-39.776-4.2-26.399-30.049-26.399-30.049 21.503-5.258 39.777 4.2z"
        transform="translate(-83.443 -144.598)"
      ></motion.path>

      <motion.path
        initial={{ x: -83.443, y: -180.598 }}
        animate={{ x: -83.443, y: -150.598 }}
        transition={{ duration: 1.5, repeatType: "mirror", repeat: Infinity }}
        fill="rgb(255, 100, 203)"
        d="M737.806 730.708c10.905 17.448 32.086 23.88 32.086 23.88s3.501-21.857-7.403-39.306-32.086-23.88-32.086-23.88-3.502 21.857 7.403 39.306z"
        transform="translate(-83.443 -144.598)"
      ></motion.path>
    </svg>
  );
};

export default HeaderSVG;
