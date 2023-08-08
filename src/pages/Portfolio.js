import React from 'react';
import gamers from '../components/images/Gamers_Hub.PNG'
import horiseon from '../components/images/horiseon-thumbnail.png'
import travelb from '../components/images/Travel_Blurb.PNG'
import travelj from '../components/images/Travel_Journal.PNG'




const Portfolio = () => {
  const projects = [
    {
      title: 'Work:',
      link: 'https://antigravityrunner.github.io/Horiseon-Challange-1/',
      imgSrc: horiseon,
      imgAlt: 'Picture of Horiseon image of three people standing at table',
      description: 'Horiseon Semantic HTML Practice'
    },
    {
      title: 'Group Project: Travel Blurb',
      link: 'https://benbryant98.github.io/travel-blurb/',
      imgSrc: travelb,
      imgAlt: 'Picture of group project of Travel Blurb',
      description: 'Travel Blurb was a group project that used HTML, CCS and Javascript.'
    },
    {
      title: 'Group Project: Travel Journal',
      link: 'https://travel-journal.herokuapp.com/',
      imgSrc: travelj,
      imgAlt: 'Picture of group project of Travel Journal',
      description: `Travel Journal was a group project that used HTML, CCS, Handlebars and Javascript, 
                    Tailwind CSS, Glide.js, Feather Icons, Multer - npm, Sequelize, Express.js, 
                    Node.js, Mysql, Handlebars, Session-Sequelize, Bcrypt.`
    },
    {
      title: 'Group Project: Gamer\'s Hub',
      link: 'https://the-gamers-hub-145e411c6374.herokuapp.com/',
      imgSrc: gamers,
      imgAlt: 'Picture of group project of Gamer\'s Hub',
      description: `Gamer's Hub was a group project that used HTML, CSS, Javascript, React, 
                    Bootstrap, GraphQL, Inquirer, MongoDB, Mongoose, Node.JS, Express.JS Apollo client.`
    }
  ];

  
  return (
    <div>
      {projects.map((project, index) => (
        <section key={index} id="work" className="box">
          <h4 className="boxHeader">{project.title}</h4>
          <a href={project.link}>
            <img
              src={project.imgSrc}
              className="selfieImg"
              alt={project.imgAlt}
            />
          </a>
          <h5>{project.description}</h5>
        </section>
      ))}
    </div>
  );
}

export default Portfolio;