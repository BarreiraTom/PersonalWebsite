let originalEvent;
let eventTimeout;
const sections= document.getElementsByTagName('section')

window.addEventListener('mousewheel', (event)=> {
    //event.preventDefault();
    //let originalEvent = event.wheelDeltaY;
    if(!originalEvent){
        if (event.wheelDeltaY >= 0) {
            console.log('Scroll up');
            var id = setInterval(frame, 2);
            let pos=0;
            function frame() {
                if(pos<=window.innerHeight)
                  pos++; 
                  elem.style.top = pos + 'px'; 
                  elem.style.left = pos + 'px'; 
              }
        }
        else {
            console.log('Scroll down');
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