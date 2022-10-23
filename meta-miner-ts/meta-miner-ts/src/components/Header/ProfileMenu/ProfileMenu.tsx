import React from 'react';

import "./ProfileMenu.scss";

const ProfileMenu: React.FunctionComponent = () => {
  return (
    <div className="dropdown">
      <img src="/static/acc_img.png" alt="Acc Logo" width="50" height="50" />
      <div className="dropdown-content">
        <a href='www.google.com'>Sign Out </a>
      </div>
    </div>
  );
};

export default ProfileMenu;