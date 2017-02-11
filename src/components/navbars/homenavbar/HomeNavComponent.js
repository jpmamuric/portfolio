import React from 'react';
import { Link } from 'react-router';
import MyAppBar from '../MyAppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import './HomeNav.css';


class HomeNavComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  };

  handleTouchTap() {
    this.setState({ open: !this.state.open})
  };

  handleClose() {
    this.setState({open: false})
  };

  render() {
    return (
      <div>
        <MyAppBar
          title='JP Mamuric'
          style={{backgroundColor: 'rgba(126, 128, 215, 1)'}} onLeftIconButtonTouchTap={()=>this.handleTouchTap()}
          iconElementRight={
            <img
              alt='jp mamuric'
              className='home-icon'
              src={require('../../../assets/logosm.png')}
            />
          }/>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <Link to='/'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>Home
            </MenuItem>
          </Link>
          <Link  to='/resume'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>Resume
            </MenuItem>
          </Link>
          </Drawer>
      </div>
    );
  }
}

export default HomeNavComponent;
