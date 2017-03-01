import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class HardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  hsUrl: 'logosm.png', link: '#skill-section', hoverClass: 'image-spin', btnLabel: 'no spin'}
  }
  setHoverClass(){
    if (this.state.hoverClass === 'image-spin') {
      this.setState({hoverClass: '', btnLabel: 'spin'});
    } else {
      this.setState({hoverClass: 'image-spin', btnLabel: 'no spin'});
    }
  }

  render() {
    const hardskills = [
      {
        name : 'CSS3 & HTML5',
        hsUrl: 'css.gif',
        link: '#skill-section'
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
      <div className='hs-container box-shadow flex-it'>
        <div>
          <h2 onTouchTap={ ()=>this.setState({ hsUrl: 'logosm.png'}) }>Hard Skills</h2>
          <ul className='hs-ul'>
            {
              hardskills.map ((item, i) => {
                return (
                  <li
                    key={i}
                    className='hs-li'
                    onTouchTap={()=> this.setState({hsUrl: item.hsUrl, link: item.link, }) }
                    >
                      {item.name}
                  </li>
                );
              })
            }
          </ul>
            <RaisedButton primary={true} className='btn-raised' label={this.state.btnLabel} onTouchTap={()=>this.setHoverClass()} />
          <p className='hs-greater'>working
            <br />
            to be
            <br />
            <strong> Greater </strong>
           </p>
        </div>
        <a
          className='hs-link' href={this.state.link} target='_blank'
          >
          <img className={`hs-img  ${this.state.hoverClass}`} alt='website logo' src={require(`../../../../assets/skills/${this.state.hsUrl}`)}/>
        </a>

      </div>
    );
  }
}

export default HardList;
