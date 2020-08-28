import React from 'react';

import profileImg from '../resources/img/profile.jpg';

export default function Page(props) {
  const infoData = JSON.parse(props.pageInfo);

  const durantionAnim = infoData.durantionAnim;

  let originalEvent;
  let eventTimeout;

  document.getElementById('root').style.backgroundImage = 'linear-gradient(to top left, lightgray, white, var(--white-color))'

  window.addEventListener('mousewheel', (event)=> {

    const sectionsPage = [...document.getElementsByTagName('section')]; 
    const currentSect = sectionsPage.indexOf(document.getElementsByClassName("secActive")[0]);
    console.log(currentSect);

    if(!originalEvent){
        if (event.wheelDeltaY >= 0) {
            console.log('Scroll up');

            if (currentSect>0){

              sectionsPage.map((sect, index)=>{
                if (sect.className=='secActive'){
                  let topHeight= sectionsPage[0].offsetTop;
                  // debugger
                  sect.animate([
                    // keyframes
                    { top: `${topHeight}px`, opacity: '1'}, 
                    { opacity: '0'},
                    { top: `${topHeight+window.innerHeight+1}px`, opacity: '0'}
                  ], { 
                    // timing options
                    duration: durantionAnim,
                    iterations: 1,
                    easing: "ease-in"
                  });
                  sect.style.top = `${topHeight+window.innerHeight+1}px`;
                } else {
                  let topHeight= sectionsPage[0].offsetTop;
                  // debugger
                  sect.animate([
                    // keyframes
                    { top: `${topHeight}px`, opacity: '0'}, 
                    { opacity: '0'},
                    { top: `${topHeight+window.innerHeight+1}px`, opacity: '1'}
                  ], { 
                    // timing options
                    duration: durantionAnim,
                    iterations: 1,
                    easing: "ease-out"
                  });
                  sect.style.top = `${topHeight+window.innerHeight+1}px`;
                }
                // let topHeight= sectionsPage[0].offsetTop;
                // // debugger
                // sect.animate([
                //   // keyframes
                //   { top: `${topHeight}px`}, 
                //   { top: `${topHeight+window.innerHeight+1}px`}
                // ], { 
                //   // timing options
                //   duration: durantionAnim,
                //   iterations: 1,
                //   easing: "ease-in-out"
                // });
                // sect.style.top = `${topHeight+window.innerHeight+1}px`;
              })

              sectionsPage[currentSect].className = '';
              sectionsPage[currentSect-1].className = 'secActive';
            }
              
            // if (sectionsPage[0].offsetTop<0) {
            //     sectionsPage.forEach(sect=> {
            //         sect.style.top= `${sect.offsetTop + window.innerHeight}px`;
            //     })
            // }
            // var id = setInterval(frame, 2);
            // let pos=0;
            // function frame() {
            //     if(pos<=window.innerHeight)
            //       pos++; 
            //       elem.style.top = pos + 'px'; 
            //       elem.style.left = pos + 'px'; 
            // }
        }
        else {
            console.log('Scroll down');
            
            if (currentSect<sectionsPage.length-1){

              sectionsPage.map((sect, index)=>{
                if (sect.className=='secActive'){
                  let topHeight= sectionsPage[0].offsetTop;
                  // debugger
                  sect.animate([
                    // keyframes
                    { top: `${topHeight}px`, opacity: '1'}, 
                    { opacity: '0'},
                    { top: `${topHeight-window.innerHeight-1}px`, opacity: '0'}
                  ], { 
                    // timing options
                    duration: durantionAnim,
                    iterations: 1,
                    easing: "ease-in"
                  });
                  sect.style.top = `${topHeight-window.innerHeight-1}px`;
                } else {
                  let topHeight= sectionsPage[0].offsetTop;
                  // debugger
                  sect.animate([
                    // keyframes
                    { top: `${topHeight}px`, opacity: '0'}, 
                    { opacity: '0'},
                    { top: `${topHeight-window.innerHeight-1}px`, opacity: '1'}
                  ], { 
                    // timing options
                    duration: durantionAnim,
                    iterations: 1,
                    easing: "ease-out"
                  });
                  sect.style.top = `${topHeight-window.innerHeight-1}px`;
                }
                // let topHeight= sectionsPage[0].offsetTop;
                // // debugger
                // sect.animate([
                //   // keyframes
                //   { top: `${topHeight}px`}, 
                //   { top: `${topHeight-window.innerHeight-1}px`}
                // ], { 
                //   // timing options
                //   duration: durantionAnim,
                //   iterations: 1,
                //   easing: "ease-in-out"
                // });
                // sect.style.top = `${topHeight-window.innerHeight-1}px`;
              })
              
              sectionsPage[currentSect].className = '';
              sectionsPage[currentSect+1].className = 'secActive';
            }
              
            // if (sectionsPage[sectionsPage.length-1].offsetTop>0) {
            //     sectionsPage.forEach(sect=> {
            //         // debugger
            //         sect.style.top= `${sect.offsetTop - window.innerHeight}px`
            //     })
            // }
        }
    }
    // event.wheelDeltaY=0;

    if(eventTimeout){
        clearTimeout(eventTimeout)
    }
    originalEvent = event.wheelDeltaY;
    console.log(originalEvent)
    eventTimeout= setTimeout(()=>{
        originalEvent=undefined;
    },durantionAnim)
  });

  return (
    <>
      <section id="Main" className="secActive">
        <div className="center mainCont-out">
            <div className="mainCont-in">
                <div className="logoCont inline">
                    <img className="logo" id="logo" src={profileImg}/>
                </div>
                <div className="inline flex-grow">
                    <h1 id="name" className="black-text">{infoData.sections.main.name}</h1>
                    <h2 id="mainInfo" className="black-text">{infoData.sections.main.mainInfo}</h2>
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
