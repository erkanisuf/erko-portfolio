import { motion } from "framer-motion";
import React from "react";
import logo from "../../staticImages/erkologo.png";
import HeaderCSS from "./Header.module.css";
import { Link } from "react-scroll";
interface INavigation {
  activeLink: any;
  active: string;
}
const Navigation: React.FC<INavigation> = ({ active, activeLink }) => {
  return (
    <header>
      <div>
        <motion.img
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          whileHover={{ rotate: -360 }}
          transition={{ duration: 2 }}
          src={logo}
          alt="erkanisuflogo"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              data-testid="myworkhref"
              href="#mywork"
              to="mywork"
              smooth={true}
              className={active === "#mywork" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#mywork")}
            >
              {" "}
              My work
            </Link>
          </li>
          <li>
            <Link
              data-testid="myskillshref"
              href="#myskills"
              to="myskills"
              smooth={true}
              className={active === "#myskills" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#myskills")}
            >
              My skills
            </Link>
          </li>
          <li>
            <Link
              data-testid="aboutmehref"
              href="#aboutme"
              to="aboutme"
              smooth={true}
              className={active === "#aboutme" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#aboutme")}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              data-testid="contactmehref"
              href="#contactme"
              to="contactme"
              smooth={true}
              className={active === "#contactme" ? HeaderCSS.active : ""}
              onClick={() => activeLink("#contactme")}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
