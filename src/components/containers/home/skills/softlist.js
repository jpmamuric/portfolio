import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class SoftList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ssUrl: 'diet.jpg'}
  }

  render() {
    const softskills = [
      {
        name : 'Love to Analyze',
        ssUrl: 'analyze.gif'
      },
      {
        name : 'Creative',
        ssUrl: 'creative.gif'
      },
      {
        name : 'Innovative',
        ssUrl: 'innovative.gif'
      },
      {
        name : 'Communication',
        ssUrl: 'communication.gif'
      },
      {
        name : 'Time Management',
        ssUrl: 'time.gif'
       },
      {
        name : 'Proactive',
        ssUrl: 'proactive.gif'
      },
      {
        name : 'Teamwork',
        ssUrl: 'teamwork.gif'
      },
      {
        name : 'Open Minded',
        ssUrl: 'open2.gif'
      },
      {
        name : 'Self Motivating',
        ssUrl: 'selfmotivating.gif'
      },
      {
        name : 'Fast Learner',
        ssUrl: 'fastlearner.gif'

      },
      {
        name : 'Storyteller',
        ssUrl: 'storytime.gif'
      },
      {
        name : 'and...' ,
        ssUrl: 'giphy.gif'
      },
    ];

    return (
      <div className='ss-container box-shadow flex-it'>
        <div>
          <h2>Soft Skills</h2>

          <ul className='ss-ul'>
            {
              softskills.map ((item, i) => {
                return (
                  <li key={i} className='hs-li' onTouchTap={()=>this.setState({ssUrl: item.ssUrl})}>{item.name}
                  </li>
                );
              })
            }
          </ul>
          <RaisedButton label='learn more' />
          <p className='ss-stronger'>working
            <br />
            to be
            <br />
            <strong> Stronger </strong>
           </p>
        </div>
        <img className='ss-img' alt='birds funny comic' src={require(`../../../../assets/skills/${this.state.ssUrl}`)}/>
      </div>
    );
  }
}

export default SoftList;
