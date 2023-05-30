// Get references to DOM elements
const body = document.querySelector('body'),
    hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second'),
    modeSwitch = document.querySelector('.mode_switch');

    //check if the dark mode is already in local storage
    if(localStorage.getItem('mode') === 'Switch to Dark Mode'){

        body.classList.add('dark');
        modeSwitch.textContent = 'Switch to Dark Mode';
    }

//add a click event to change the theme color
modeSwitch.addEventListener('click', function () {

    //toggle dark class on the body when it's clicked
    body.classList.toggle('dark');

    //check if the 'dark' class is enabled
    const isDark = body.classList.contains('dark');
    //switch button  text
    modeSwitch.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

    //insert the theme into the local storage
    localStorage.setItem('mode', isDark ? "Switch to Dark Mode" : "Switch to Light Mode");
});

const updateTime = function (){
    //Get the current time and convert seconds to degrees
    let currentTime = new Date();
    secondsToDeg = (currentTime.getSeconds() / 60) * 360;
    minutesToDeg = (currentTime.getMinutes() / 60) * 360;
    hoursToDeg = (currentTime.getHours() / 12) * 360;
    
    //Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secondsToDeg}deg`;
    minuteHand.style.transform = `rotate(${minutesToDeg}deg`;
    hourHand.style.transform = `rotate(${hoursToDeg}deg`;
}

setInterval(
    updateTime, // execute this IMMEDIATELY
    1000  // execute whatever is returned from updateTime in intervals of 1 seconds
);

//call updateTime function on page load
updateTime();