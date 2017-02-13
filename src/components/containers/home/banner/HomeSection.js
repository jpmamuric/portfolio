import React from 'react';

import Popover from 'material-ui/Popover';
import './HomeSection.css';

class HomeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: '',
      bannerChat: '',
      open: false
    }
  }
  componentWillMount() {
    if (window.innerWidth >= 768 ) {
      this.setState({ banner: 'homesection-banner-desktop'});
    } else {
      this.setState({ banner: 'homesection-banner-mobile'});
    }
  }

  handleTouchTap(e){
    e.preventDefault();
    if (window.innerWidth >= 580 ) {
        this.setState({ banner: 'homesection-banner-desktop'});
      } else {
        this.setState({ banner: 'homesection-banner-mobile-blur'});
      }

    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
  }

  handleClose(){
    if (window.innerWidth >= 768 ) {
        this.setState({ banner: 'homesection-banner-desktop'});
      } else {
        this.setState({ banner: 'homesection-banner-mobile'});
      }
    this.setState({ open: false });
  }

  render() {

    return (
      <article>
        <div className='banner-container'>
          <div className='hello'>Hello</div>
          <div
            className={this.state.banner}
            onTouchTap={this.handleTouchTap.bind(this)}
            >
          </div>
        </div>
        <Popover
          className='popover'
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleClose.bind(this)}
          anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
          targetOrigin={{horizontal: 'left', vertical: 'center'}}
          >
         <div
            onTouchTap={this.handleClose.bind(this)}
            className='popover-message'>Hello! welcome to my component interactive based system.
         </div>

        </Popover>

      </article>
    );
  }
}

export default HomeSection;
