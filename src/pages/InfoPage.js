import React from 'react';

import profileImg from '../resources/img/profile.jpg';

export default function Page(props) {
  const infoData = JSON.parse(props.pageInfo);
  let scrollable;
  let switcher;
  let transition;
  let mainElement;
  return (
    <>
      <section id="Main">
        <div class="center mainCont-out">
            <div class="mainCont-in">
                <div class="logoCont inline">
                    <img class="logo" id="logo" src={profileImg}/>
                </div>
                <div class="inline flex-grow">
                    <h1 id="name" class="black-text">{infoData.sections.main.name}</h1>
                    <h2 id="mainInfo" class="black-text">{infoData.sections.main.mainInfo}</h2>
                </div>
            </div>
            <h3 id="info">{infoData.sections.main.info}</h3>
        </div>
      </section>
      <section id="resume">
        
      </section>
      <section id="qualities">

      </section>
      <section id="projects">

      </section>
    </>
  );
}
