import React from 'react';

class HardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  hsUrl: 'logosm2.png', link: '', hoverClass: 'image-spin'}
  }
  setHoverClass(){
    if (this.state.hoverClass === 'image-spin') {
      this.setState({hoverClass: ''});
    } else {
      this.setState({hoverClass: 'image-spin'})
    }
  }

  render() {
    const hardskills = [
      {
        name : 'CSS3 & HTML5',
        hsUrl: 'htmlcss.jpg'
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
        name : 'Restful APIs'
      },
      {
        name : 'Responsive'
      },
      {
        name : 'Scalable Apps'
      },
      {
        name : 'and...',
        hsUrl: 'comeatme.gif'
      },
    ];

    return (
      <div className='hs-container box-shadow flex-it'>
        <div>
          <h2 onTouchTap={()=>this.setHoverClass()}>Hard Skills</h2>
          <ul className='hs-ul'>
            {
              hardskills.map ((item, i) => {
                return (
                  <li
                    key={i}
                    className='hs-li'
                    onTouchTap={()=>this.setState({hsUrl: item.hsUrl, link: item.link})} onMouseOver={()=>this.setState({hsUrl: item.hsUrl, link: item.link})} >
                      {item.name}
                  </li>
                );
              })
            }
          </ul>
          <p className='hs-greater'>working
            <br />
            to be
            <br />
            <strong> Greater </strong>
           </p>
        </div>
        <a className='hs-link' href={this.state.link} target='_blank'>
          <img className={`hs-img  ${this.state.hoverClass}`} alt='website logo' src={require(`../../../../assets/skills/${this.state.hsUrl}`)}/>
        </a>
      </div>
    );
  }
}

export default HardList;
