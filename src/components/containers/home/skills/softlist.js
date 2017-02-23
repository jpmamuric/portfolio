import React from 'react';

class SoftList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ssUrl: 'diet.jpg'}
  }

  render() {
    const softskills = [
      { name : 'Love to Analyze' },
      { name : 'Creative' },
      { name : 'Innovative' },
      { name : 'Communication' },
      { name : 'Time Management' },
      { name : 'Proactive' },
      { name : 'Teamwork' },
      { name : 'Open Minded' },
      { name : 'Self Motivating' },
      { name : 'Fast Learner' },
      { name : 'Storyteller' },
      { name : 'and...' , ssUrl: 'giphy.gif'},
    ];

    return (
      <div className='ss-container box-shadow flex-it'>
        <div>
          <h2>Soft Skills</h2>
          <ul className='ss-ul'>
            {
              softskills.map ((item, i) => {
                return (
                  <li key={i} className='hs-li' onMouseOver={()=>this.setState({ssUrl: item.ssUrl})}>{item.name}
                  </li>
                );
              })
            }
          </ul>
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
