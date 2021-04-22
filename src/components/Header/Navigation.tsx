import React from "react";
import HeaderCSS from "./Header.module.css";
interface INavigation {
  activeLink: any;
  active: string;
}
const Navigation: React.FC<INavigation> = ({ active, activeLink }) => {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <a
              href="#a"
              className={active === "#a" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#a")}
            >
              {" "}
              My work
            </a>
          </li>
          <li>
            <a
              href="#myskills"
              className={active === "#myskills" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#s")}
            >
              My skills
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              className={active === "#aboutme" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#s")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#d"
              className={active === "#d" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#d")}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
