import Enzyme, { shallow } from "enzyme";
import "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation";
import SocialLinks, { openNewTab } from "../components/Header/SocialLinks";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import BurgerMenuNav from "../components/BurgerMenu/BurgerMenuNav";
import AboutMe from "../components/AboutMe/AboutMe";
import Title from "../components/Title/Title";
import MyWork from "../components/MyWork/MyWork";
import Cards from "../components/MyWork/Cards";
import Footer from "../components/Footer/Footer";
Enzyme.configure({ adapter: new Adapter() });

describe("Component renders", () => {
  it("render <App /> withouth crash", () => {
    shallow(<App />);
  });

  it("render <Header /> and its content", () => {
    const wrapper = shallow(<Header />);
    const btnLetsTalk = wrapper.find(`[data-testid="btnletstalk"]`);
    expect(wrapper.contains("Erkan Isuf")).toEqual(true);
    expect(wrapper.contains("Front end developer")).toEqual(true);
    //Main button tests in the div if does it work and moves the page to id #contactme
    expect(btnLetsTalk).toHaveLength(1);
    btnLetsTalk.simulate("click");
    expect(window.location.href).toEqual("http://localhost/#contactme");
    wrapper.find(`[data-testid="backtotop"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#");
  });

  it("render <Navigation /> and its content", () => {
    const clickHref = (e: any) => {
      window.location.href = e;
    };
    const wrapper = shallow(
      <Navigation
        activeLink={(e: any) => {
          clickHref(e);
        }}
        active={"testactive"}
      />
    );

    expect(wrapper.contains("My work")).toEqual(true);
    expect(wrapper.contains("My skills")).toEqual(true);
    expect(wrapper.contains("About Me")).toEqual(true);
    expect(wrapper.contains("Contact me")).toEqual(true);
    // Tests if onCLick event works and if navigation works
    wrapper.find(`[data-testid="myworkhref"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#mywork");
    wrapper.find(`[data-testid="myskillshref"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#myskills");
    wrapper.find(`[data-testid="aboutmehref"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#aboutme");
    wrapper.find(`[data-testid="contactmehref"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#contactme");
  });

  it("renders <SocialLinks /> check if links work", () => {
    const wrapper = shallow(<SocialLinks inView={true} entry={""} />);
    // use Global , doesnt work with window.open
    global.open = jest.fn();

    wrapper.find(`[data-for="myphone"]`).simulate("click");
    wrapper.find(`[data-for="resume"]`).simulate("click");
    wrapper.find(`[data-for="gmail"]`).simulate("click");
    wrapper.find(`[data-for="linkedin"]`).simulate("click");
    wrapper.find(`[data-for="github"]`).simulate("click");
    expect(global.open).toBeCalled();
  });
  it("mobile test <Burger /> ", () => {
    const wrapper = shallow(<BurgerMenu active={""} activeLink={""} />);
  });
  it("mobile test < BurgerMenuNav/> ", () => {
    const wrapper = shallow(
      <BurgerMenuNav
        toggle={true}
        active={""}
        activeLink={() => {}}
        setToggle={() => {}}
      />
    );
    expect(wrapper.contains("My work")).toEqual(true);
    expect(wrapper.contains("My skills")).toEqual(true);
    expect(wrapper.contains("About Me")).toEqual(true);
    expect(wrapper.contains("Contact me")).toEqual(true);
    // check if onClick event works  of social links
    wrapper.find(`[data-testid="mobilemywork"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#mywork");
    wrapper.find(`[data-testid="mobilemyskills"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#myskills");
    wrapper.find(`[data-testid="mobileaboutme"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#aboutme");
    wrapper.find(`[data-testid="mobilecontactme"]`).simulate("click");
    expect(window.location.href).toEqual("http://localhost/#contactme");
  });

  it("component <AboutMe /> ", () => {
    // the p tags text
    const text =
      "I am Erko and I am a passionate front-end developer. I love to use new technologies to build amazing products and solve different issues with the help of tech. I enjoy mostly the front end, however I also got experience with back-end technologies. Would love hear from you job opportunities, projects or a volunteer work. Lets create amazing products together!";
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.contains(text)).toEqual(true);
    //title text
    expect(wrapper.contains("Frontend")).toEqual(true);
    expect(wrapper.contains("Backend")).toEqual(true);
    expect(wrapper.contains("Database")).toEqual(true);
    expect(wrapper.contains("Tests")).toEqual(true);
    //Stack text
    expect(wrapper.contains("React")).toEqual(true);
    expect(wrapper.contains("Typescript")).toEqual(true);
    expect(wrapper.contains(" HTML")).toEqual(true);
    expect(wrapper.contains(" CSS")).toEqual(true);
    //
    expect(wrapper.contains("NodeJS")).toEqual(true);
    expect(wrapper.contains(".NetCore")).toEqual(true);
    expect(wrapper.contains("Postgresql")).toEqual(true);
    expect(wrapper.contains("Mongo")).toEqual(true);
    expect(wrapper.contains("Jest")).toEqual(true);
  });
  it("component <Title /> ", () => {
    const wrapper = shallow(
      <Title smalltext="smalltext" bigtext="bigtext" alignItems="center" />
    );
    //texts html
    expect(wrapper.contains("smalltext")).toEqual(true);
    expect(wrapper.contains("bigtext")).toEqual(true);
  });

  it("component <MyWork /> ", () => {
    const wrapper = shallow(<MyWork />);
  });
  it("component  <Cards /> ", () => {
    //fake object
    const data = {
      title: "Personal Trainer",
      image: "",
      mobileImage: "",
      tabletImage: "",
      github: "",
      livepreview: "",
      description: "App to book and keep schedule of customers",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23245225' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%232a602b' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23306d32' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23367c38' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%233c8a3f' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%2366a163' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%238cb889' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23b2d0af' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23d8e7d6' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffffff' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundColor: "#C846FB",
      stack: ["React", "Node", "SQL"],
    };
    const wrapper = shallow(<Cards {...data} oddOrEven={2} />);
    //htmls texts
    expect(wrapper.contains("Personal Trainer")).toEqual(true);
    expect(
      wrapper.contains("App to book and keep schedule of customers")
    ).toEqual(true);
    expect(wrapper.contains("React")).toEqual(true);
  });

  it("component <Footer/> ", () => {
    const wrapper = shallow(<Footer />);
    // texts
    expect(wrapper.contains("Contact Me")).toEqual(true);
    expect(wrapper.contains("+358 50 30 40 519")).toEqual(true);
    expect(wrapper.contains("erkanisuf@gmail.com")).toEqual(true);
    expect(wrapper.contains("Helsinki, Finland")).toEqual(true);
    expect(wrapper.contains("My work")).toEqual(true);
    const { getByTestId } = render(<Footer />);
    // Tests of Ahref links if work .
    expect(getByTestId("footermywork")).toHaveAttribute("href", "#mywork");
    expect(getByTestId("footermyskills")).toHaveAttribute("href", "#myskills");
    expect(getByTestId("footeraboutme")).toHaveAttribute("href", "#aboutme");
    expect(getByTestId("footercontactme")).toHaveAttribute(
      "href",
      "#contactme"
    );
  });
});
