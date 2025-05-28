import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    BooksReviewDesc : "",
    BooksReviewGithub : "https://github.com/oAbdull/BooksReview",

    MediaBazaarDesc : "",
    MediaBazaarGithub : "https://github.com/oAbdull/MediaBazaar",

    RooshDesc:"",
    RooshGithub:"",
    RooshWebsite:"https://github.com/oAbdull/S3-Roosh",
    
    FlexTicketDesc:"",
    FlexTicketGithub:"https://github.com/oAbdull/FlexTicket",

    EventPlatformDesc:"",
    EventPlatformGithub:"https://github.com/oAbdull/EventPlatform"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox