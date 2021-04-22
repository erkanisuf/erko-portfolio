import React, { useState } from "react";
import MyWorkCSS from "./MyWork.module.css";
import DesktopImage from "./DekstopImage/DesktopImage";
import MobileTabletImage from "./MobileTabletImage/MobileTabletImage";
import SelectDevice from "./SelectDevice/SelectDevice";
interface ICards {
  backgroundColor: string;
  backgroundImage: string;
  title: string;
  image: string;
  mobileImage: string;
  oddOrEven: number;
  description: string;
  stack: string[];
  tabletImage: string;
}
const Cards: React.FC<ICards> = ({
  backgroundColor,
  backgroundImage,
  title,
  image,
  oddOrEven,
  description,
  stack,
  mobileImage,
  tabletImage,
}) => {
  const [device, setDevice] = useState<string>("desktop");

  const typeOfImage = () => {
    switch (device) {
      case "desktop":
        return (
          <DesktopImage title={title} image={image} oddOrEven={oddOrEven} />
        );
      case "mobile":
        return (
          <MobileTabletImage
            title={title}
            image={mobileImage}
            oddOrEven={oddOrEven}
          />
        );
      case "tablet":
        return (
          <MobileTabletImage
            title={title}
            image={tabletImage}
            oddOrEven={oddOrEven}
          />
        );
    }
  };
  return (
    <div
      className={MyWorkCSS.cardContainer}
      style={{
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
      }}
    >
      <div className={MyWorkCSS.itemContainer}>
        <div className={MyWorkCSS.cardText}>
          <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
          <div className={MyWorkCSS.description}></div>
          <div className={MyWorkCSS.stackUsed}>
            {stack.map((el, index) => {
              return <div key={index}>{el}</div>;
            })}
          </div>
        </div>
        <div
          className={
            oddOrEven % 2 === 0 ? MyWorkCSS.rightOrder : MyWorkCSS.leftOrder
          }
        >
          {/* Returns Mobile Image Desktop Or Tablet  */}
          {typeOfImage()}
        </div>
      </div>

      <SelectDevice
        oddOrEven={oddOrEven}
        setDevice={setDevice}
        device={device}
      />
    </div>
  );
};

export default Cards;
