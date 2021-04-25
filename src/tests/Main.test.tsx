import Enzyme, { shallow } from "enzyme";
import "react-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { getByText, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation";
import SocialLinks from "../components/Header/SocialLinks";
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
    //Btn test
    expect(btnLetsTalk).toHaveLength(1);
    btnLetsTalk.simulate("click");
    expect(window.location.href).toEqual("http://localhost/#contact");
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
  });
});
