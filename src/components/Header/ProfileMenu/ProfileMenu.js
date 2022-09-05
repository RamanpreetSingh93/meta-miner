import React from 'react';

import "./ProfileMenu.css";

const ProfileMenu = () => {
  return (
    <div class="dropdown">
      <img src="/static/acc_img.png" alt="Acc Logo" width="50" height="50" />
      <div class="dropdown-content">
        <a href='www.google.com'>Sign Out </a>
      </div>
    </div>
  );
};

export default ProfileMenu;