import React from 'react';
import AppBar from 'material-ui/AppBar';

const MyAppBar = ({onLeftIconButtonTouchTap, title, style,iconClassNameRight, iconElementRight,iconElementLeft, className }) => {
  return (
    <div>
      <AppBar
        style={style}
        title={title}
        onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
        iconClassNameRight={iconClassNameRight}
        iconElementRight={iconElementRight}
        className={className}
      />
    </div>
  );
}

export default MyAppBar
