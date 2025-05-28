import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>OKBA ABDULLAH</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I’m passionate about turning innovative ideas into real, functional
            solutions that people can actually use and benefit from. I strive to
            take on projects that push my limits as a developer and allow me to
            grow both personally and professionally.
            <br />
            <br />
            I'm skilled in <b>Java</b>, with hands-on experience in{" "}
            <b>Python</b> and working on web-based projects using{" "}
            <b>Spring Boot</b>.<br />
            I’m currently diving deeper into <b>React</b> and plan to expand my
            knowledge with <b>Next.js</b>, <b>TypeScript</b>, and{" "}
            <b>Cloud technologies</b> soon.
            <br />
            <br />
            Oh, and I’m definitely a <b>coffee</b> person too{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
