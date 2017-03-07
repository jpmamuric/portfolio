import React from 'react';
import { Link } from 'react-router';
import MyAppBar from '../MyAppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class ResumeNavComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
  };

  handleTouchTap() {
    this.setState({ open: !this.state.open})
  };

  handleClose() {
    this.setState({open: false})
  };

  render() {
    return (
      <header>
        <div>
          <MyAppBar title='Resume' onLeftIconButtonTouchTap={()=>this.handleTouchTap()} />
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
            <img
              className='logo'
              style={{ width: 280 }} src={require('../../../assets/logo2.png')}
              alt='jp mamuric'/>
            <Link to='/'>
              <MenuItem onTouchTap={this.handleClose}>Home
              </MenuItem>
            </Link>
            <Link  to='/resume'>
              <MenuItem onTouchTap={this.handleClose}>Resume
              </MenuItem>
            </Link>
            </Drawer>
        </div>
      </header>
    );
  }
}

export default ResumeNavComponent;
