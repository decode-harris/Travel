// nav component selector
const nav = document.querySelector('#nav');
const navbar = document.querySelector('#navbar');

// position variable [ undefined ]
let pos;

// set a min section height for comparison
let sectionHeight = '609px';

// [ scrollPositionProperties ] function
scrollPositionProperties = () => {

    // navbar.style.display = 'none';

    // event [ window ] : scroll position listener
    window.addEventListener('scroll', ()=> {
        
        // if scroll position is less than section height
        if (window.scrollY > sectionHeight ) {

            // get current position
            pos = window.scrollY;
            
            // assign nav position prop to top of header [ native placement ]
            nav.style.top = pos + 'px';

            // assign menu btn background to darkgrey
            menu.style.background = 'rgba(20, 20, 20, 0.822)';

            // test 
            // console.log('[ window IF ] :' + pos + 'px');
        }
        if (nav.style.top < '700px') {

            // get current position
            pos = window.scrollY;

            nav.style.top = pos + 'px';
        }
        if (nav.style.top > '700px') {

            // get current position
            pos = window.scrollY;

            nav.style.top = pos + 'px';

            // assign menu btn background to darkgrey
            menu.style.background = 'rgba(20, 20, 20, 0.822)';
        }
        else {

            // get current position
            pos = window.scrollY;
            
            // nav props
            nav.style.top = pos + 'px';
            nav.style.left = '0';
            nav.style.marginTop = '10vh';

            // navbar props
            // navbar.style.top = '0';
            // navbar.style.left = '0';

            

            // test 
            // console.log('[ window Else ] :' + pos + 'px');
        }
    
    });

}
// init [ scrollPositionProperties ] function
scrollPositionProperties();

// menu button selector
let menu = document.querySelector('#menu');
let icon = document.querySelector('#menu i');

// menu button event
menu.addEventListener('click', ()=> {

    // default hidden element to display none
    hidden.style.display = 'none';
    // default hidden element inner html
    hidden.innerHTML = 'read more';

    if (icon.classList != 'fas fa-times') {
        
        // change icon class list to [ X ] close 
        icon.classList = 'fas fa-times';
    }
    if (nav.style.width != '100%') {

        // change nav width to active [ 100% ] 
        nav.style.width = '100%';
    }
    else {
        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';
        
        // change nav width back to default [ 0% ]
        nav.style.width = '0%';
    
    }
    
});