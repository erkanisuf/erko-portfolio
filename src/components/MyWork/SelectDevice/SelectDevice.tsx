import React from "react";
import { AiOutlineMobile, AiOutlineTablet } from "react-icons/ai";
import { IoLaptopOutline } from "react-icons/io5";

import GitHubAndLink from "../GitHubAndLink";
import SelectDeviceCSS from "./SelectDevice.module.css";
interface ISelectDevice {
  oddOrEven: number;
  setDevice: any;
  device: string;
  github: string;
  livepreview: string;
}
const SelectDevice: React.FC<ISelectDevice> = ({
  oddOrEven,
  setDevice,
  device,
  github,
  livepreview,
}) => {
  return (
    <div
      className={
        oddOrEven % 2 === 0
          ? SelectDeviceCSS.deviceRight
          : SelectDeviceCSS.deviceLeft
      }
    >
      <div>
        <AiOutlineMobile
          onClick={() => setDevice("mobile")}
          style={{ color: device === "mobile" ? "white" : "" }}
          data-tip
          data-for="mobile"
        />
        <AiOutlineTablet
          onClick={() => setDevice("tablet")}
          style={{ color: device === "tablet" ? "white" : "" }}
          data-tip
          data-for="tablet"
        />
        <IoLaptopOutline
          onClick={() => setDevice("desktop")}
          style={{ color: device === "desktop" ? "white" : "" }}
          data-tip
          data-for="desktop"
        />
      </div>
      <GitHubAndLink github={github} livepreview={livepreview} />
    </div>
  );
};

export default SelectDevice;
