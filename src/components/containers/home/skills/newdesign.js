import React from 'react';

const NewList = () => {
  const hardskills = [
    {
      name : 'CSS3 & HTML5',
      hsUrl: 'css.gif',
      link: ''
    },
    {
      name : 'React',
      hsUrl: 'react.png',
      link: 'https://facebook.github.io/react/'
    },
    {
      name : 'Redux',
      hsUrl: 'redux.png',
      link: 'http://redux.js.org/'
    },
    {
      name : 'Angular 2',
      hsUrl: 'angular.png',
      link: 'https://angularjs.org/'
    },
    {
      name : 'Wordpress',
      hsUrl: 'wordpress.png',
      link: 'https://wordpress.org/'
    },
    {
      name : 'Node.js',
      hsUrl: 'nodejs.png',
      link: 'https://nodejs.org/en/about/'
    },
    {
      name : 'MongoDB',
      hsUrl: 'mongodb.png',
      link: 'https://www.mongodb.com/'
    },
    {
      name : 'GIT',
      hsUrl: 'git.png',
      link: 'https://git-scm.com/'
    },
    {
      name : 'Restful APIs',
      hsUrl: 'api.jpg',
      link: 'http://www.restapitutorial.com/'
    },
    {
      name : 'Responsive',
      hsUrl: 'responsive2.gif',
      link: 'https://developer.mozilla.org/en-US/Apps/Progressive/Responsive'
    },
    {
      name : 'Scalable Apps',
      hsUrl: 'developers.gif',
      link: ''
    },
    {
      name : 'and...',
      hsUrl: 'comeatme.gif',
      link: ''
    },
  ];

  return (
    <div className=''>
      <div className='nd-container flex-it'>
        {
          hardskills.map ((item, i) => {
            return (
              <div
                key={i}
                className='box-shadow nd-item flex-it'
                >
                <a
                  className='' href={item.link} target='_blank'
                  >
                  <img className='nd-img' alt='website logo' src={require(`../../../../assets/skills/${item.hsUrl}`)}/>
                </a>
                <div className='nd-item-title'>
                  {item.name}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default NewList;

// <h2 onTouchTap={ ()=>this.setState({ hsUrl: 'logosm.png'}) }>Hard Skills</h2>
// <RaisedButton primary={true} className='btn-raised' label={this.state.btnLabel} onTouchTap={()=>this.setHoverClass()} />
//
// <p className='hs-greater'>working
//   <br />
//   to be
//   <br />
//   <strong> Greater </strong>
//  </p>
