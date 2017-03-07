import React from 'react';

import './ProjectSection.css'
const ProjectSection = () => {
    var webProjects = [
      {
        imgUrl: "pmg.png",
        alt: 'image of pampamga master grill app'
      },
      {
        imgUrl: "apps.png",
        alt: 'pictures of personal project'
      },
      {
        imgUrl: "bou.png",
        alt: 'Bond of Unity website'
      },
      {
        imgUrl: "mow.png",
        alt: 'youtube like website myownwellness'
      },

      {
        imgUrl: "reduxstagram.png",
        alt: 'wes bos reduxstagram project'
      },
      {
        imgUrl: "ecommerce.png",
        alt: 'custom angular project image'
      }
    ];

    var mobileProjects = [
      {
        imgUrl: "manager.png",
        alt: 'react-native redux manager app'
      },
      {
        imgUrl: "react-spotify.png",
        alt: 'custom spotify react app'
      }
    ];
    return (
      <div id='projects'>
        <h1 style={{ alignSelf: 'center'}}>Personal Projects </h1>
        <p>(Links Coming Soon!)</p>
        <section className='project-section-container flex-it' id='project-section'>
          <div className='web-container flex-it'>
            { webProjects.map( (project, i) => {
              const { imgUrl, alt } = project;
              return (
                <img key={i} className='project box-shadow ' src={require(`../../../../assets/projects/${imgUrl}`)} alt={alt} />
              );
            })}
          </div>
          <div className='mobile-container flex-it'>
            { mobileProjects.map((project, i )=> {
              const { imgUrl, alt } = project;
              return (
                <img key={i} className='mobile box-shadow ' src={require(`../../../../assets/projects/${imgUrl}`)} alt={alt} />
              );
            })}
          </div>
        </section>
      </div>
    );
}

export default ProjectSection;
