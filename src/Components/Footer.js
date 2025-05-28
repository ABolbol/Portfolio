import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by  Okba Abdullah</h4>
      <h4>Copyright &copy; 2025 O.K.B.A</h4>
      <div className='footerLinks'>
        <a href="https://github.com/oAbdull" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/okba-abdullah-578b04209/?originalSubdomain=nl" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:okbaabdullah92@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer