import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Okba Abdullah</b> and I’m originally from Syria,
            currently based in the Netherlands. I'm a{" "}
            <b>Java and Python developer</b> with a strong interest in backend
            systems and web technologies. <br />
            <br />
            I’ve gained experience as a <b>software developer</b> working on
            various academic and personal projects, and I enjoy building
            efficient and practical solutions. I’m currently expanding my skills
            in <b>React</b>, <b>Next.js</b>, and <b>cloud technologies</b>.
            <br />
            <br />I am <b>open</b> to collaboration opportunities, internships,
            or roles where I can learn, grow, and contribute to meaningful work.
            Feel free to connect with me — links are in the footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C#" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
