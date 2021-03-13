import React from 'react';

import './CardProfile.css'

import profileImg from '../../resources/img/profile.jpg';

export default function Page(props) {
  return (
    <div id="mainCard">
      <div id="leftSide">
        <div id="profileImg">
          <img src={profileImg}/>
        </div>
      </div><div id="rightSide">
        <div id="mainInfo">
          <span id="profileName">João Tomás Barreira</span><br/>
          <br/>
          <span id="profileInfo">Master's Degree Student in Computer Engineering Student</span><br/>
          <span id="profileSecInfo">Branch of Graphic Systems and Multimedia</span>
        </div>
      </div>
    </div>
  );
}
