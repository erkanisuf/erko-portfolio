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
              data-testid="myworkhref"
              href="#mywork"
              className={active === "#mywork" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#mywork")}
            >
              {" "}
              My work
            </a>
          </li>
          <li>
            <a
              data-testid="myskillshref"
              href="#myskills"
              className={active === "#myskills" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#myskills")}
            >
              My skills
            </a>
          </li>
          <li>
            <a
              data-testid="aboutmehref"
              href="#aboutme"
              className={active === "#aboutme" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#aboutme")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              data-testid="contactmehref"
              href="#contactme"
              className={active === "#contactme" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#contactme")}
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
