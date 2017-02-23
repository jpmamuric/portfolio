import React from 'react';

class HardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  hsUrl: 'logosm.png', link: ''}
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
        hsUrl: 'redux.png'
      },
      {
        name : 'Angular 2',
        hsUrl: 'angular.png'
      },
      {
        name : 'Wordpress',
        hsUrl: 'wordpress.png'
      },
      {
        name : 'Node.js',
        hsUrl: 'nodejs.png'
      },
      {
        name : 'MongoDB',
        hsUrl: 'mongodb.png'
      },
      {
        name : 'GIT',
        hsUrl: 'git.png'
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
          <h2>Hard Skills</h2>
          <ul className='hs-ul'>
            {
              hardskills.map ((item, i) => {
                return (
                  <li
                    key={i}
                    className='hs-li'
                    onTouchTap={()=>this.setState({hsUrl: item.hsUrl})} onMouseOver={()=>this.setState({hsUrl: item.hsUrl})} >
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
        <img className='hs-img' alt='website logo' src={require(`../../../../assets/skills/${this.state.hsUrl}`)}/>
      </div>
    );
  }
}

export default HardList;
