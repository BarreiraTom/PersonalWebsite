let originalEvent;
let eventTimeout;
const sectionsPage= [...document.getElementsByTagName('section')];

window.addEventListener('mousewheel', (event)=> {
    //event.preventDefault();
    //let originalEvent = event.wheelDeltaY;
    if(!originalEvent){
        if (event.wheelDeltaY >= 0) {
            console.log('Scroll up');
            if (sectionsPage[0].offsetTop<0) {
                sectionsPage.forEach(sect=> {
                    sect.style.top= `${sect.offsetTop + window.innerHeight}px`;
                })
            }
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
            if (sectionsPage[sectionsPage.length-1].offsetTop>0) {
                sectionsPage.forEach(sect=> {
                    // debugger
                    sect.style.top= `${sect.offsetTop - window.innerHeight}px`
                })
            }
        }
    }
    event.wheelDeltaY=0;

    if(eventTimeout){
        clearTimeout(eventTimeout)
    }
    originalEvent = event.wheelDeltaY;
    //console.log(eventTimeout)
    eventTimeout= setTimeout(()=>{
       originalEvent=undefined;
    },500)
});