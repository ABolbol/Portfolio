import React from 'react';
import ProjectBox from './ProjectBox';
import RogfreeImage from '../images/RogfreeImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RogfreeImage} projectName="BooksReview" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="MediaBazaar" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Roosh" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="FlexTicket" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="EventPlatform" />
      </div>

    </div>
  )
}

export default Projects