// Your code goes here


//MouseOver
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('mouseover', (event) => {
    mainNav.style.transform = "scale(1.3)";
    mainNav.style.transition = "all 0.4s";
});
mainNav.addEventListener('mouseleave', (event) => {
  // console.log(event);
  mainNav.style.transform = "scale(1.0)";
  mainNav.style.transition = "all 0.3s";
});


// KeyDown
const body = document.querySelector('body');
console.log('Body:', body);

body.addEventListener('keydown', function(event){
    console.log(`key down! This is the event: ${event.key}`)
});

// Wheel
body.addEventListener('wheel', () => {
    console.log(`You have used the wheel.`)
});
// drag / drop

// load
window.addEventListener('load', () => {
    alert('Website has loaded');
  });
// focus
window.addEventListener('focus', () => {
    console.log('Website has focused');
  });
// resize
window.addEventListener('resize', () => {
    console.log('Website has resized');
  });
// scroll
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable) {
      alert('You have reached the bottom of the page.');
    }
  });
// select

body.addEventListener(select, function(event){
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(` You have selected: ${selection}`)
});

// dblclick
navAnchors = document.querySelectorAll('.nav-link');
console.log('Nav Items:', navAnchors);
navAnchors.forEach(node => {
    node.addEventListener('dblclick', function(event){
        //stop the nav items from refreshing the page
        event.preventDefault();
        event.target.style.backgroundColor = 'darkblue';
        event.target.style.color = 'white';
        event.target.style.fontSize = '2.1rem';
    });
});