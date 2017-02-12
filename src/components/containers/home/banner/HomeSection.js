import React from 'react';

import './HomeSection.css';

class HomeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: '',
      bannerImg: ''
    }
  }
  componentWillMount() {
    if (window.innerWidth >= 768 ) {
      this.setState({ banner: 'homesection-banner-desktop'});
    } else {
      this.setState({ banner: 'homesection-banner-mobile'});
    }
  }

  renderArticle() {

  }

  render() {
    return (
      <article>
        <div className={this.state.banner}>
          <img className={this.state.bannerImg} alt='jp mamuric'/>
        </div>
      </article>
    );
  }
}

export default HomeSection;
