import React    from 'react';
import { Link } from 'react-router';
import MyAppBar from '../MyAppBar';

import Drawer   from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import './HomeNav.css';

class HomeNavComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      greeting: '',
      fortune: 'What is your fortune?',
      time: null
    };
  };

  componentWillMount() {
    const Today = new Date();
    const Time = Today.getHours();
    var message;

    if ( Time >= 18 ) {
      message = 'Good Evening';
    } else if ( Time >= 12) {
        message = 'Good Afternoon';
    } else if ( Time >= 0 ) {
        message = 'Good Morning';
    } else {
        message = 'Welcome';
    }
    this.setState({ greeting: message });
    this.setState({ time: Time })
  }

  handleLeftTouchTap() {
    this.setState({ open: !this.state.open})
  };

  handleImgTouchTap(){
    var randomNum = Math.floor((Math.random() * 6) + 1);
    var yourFortune;

    switch (randomNum) {
      case 1:
        yourFortune = 'You will meet someone amazing';
        break;
      case 2:
        yourFortune = 'You will make a lot of money';
        break;
      case 3:
        yourFortune = 'You will find joy in simplicity';
        break;
      case 4:
        yourFortune = 'You will discover an amazing new food';
        break;
      case 5:
        yourFortune = 'You will get a lot of sleep soon';
        break;
      case 6:
        yourFortune = 'Yesterday is history. Tomorrow is a mystery, but today is a gift! that is why we call it the present.';
        break;
      default:
        yourFortune = 'What is your fortune today?'
    }

    this.setState({ fortune: yourFortune });
  }

  handleClose() {
    this.setState({open: false})
  };

  render() {
    return (
      <header>
        <div>
          <MyAppBar
            title={this.state.greeting}
            className='home-nav'
            style={{backgroundColor: '#41969c'}} onLeftIconButtonTouchTap={()=>this.handleLeftTouchTap()}
            iconElementRight={
              <img
                onTouchTap={()=>this.handleImgTouchTap()}
                alt='jp mamuric'
                className='home-icon App-logo'
                src={require('../../../assets/skills/logosm.png')}
              />
            }
          />
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
              <img
                className='logo' src={require('../../../assets/logo.png')}
                alt='jp mamuric'
                />
              <Link to='/'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>Home
                </MenuItem>
              </Link>
              <Link  to='/resume'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>Resume
                </MenuItem>
              </Link>
              <Link  to='/contact'>
                <MenuItem onTouchTap={this.handleClose.bind(this)}>Contact
                </MenuItem>
              </Link>
          </Drawer>
        </div>
        <div className={'slideDown fortune'}>{this.state.fortune}</div>
      </header>
    );
  }
}

export default HomeNavComponent;
