// nav component selector
const nav = document.querySelector('#nav');
const navbar = document.querySelector('#navbar');

// position variable [ undefined ]
let pos;

// set a min section height for comparison
let sectionHeight = '100vh';

// [ scrollPositionProperties ] function
scrollPositionProperties = () => {

    // navbar.style.display = 'none';

    // event [ window ] : scroll position listener
    window.addEventListener('scroll', ()=> {
        
        // if scroll position is less than section height
        if (window.scrollY < sectionHeight) {
            
            // get current position
            pos = window.scrollY;
            
            // assign nav position prop to top of header [ native placement ]
            nav.style.top = '0';
            
            // test 
            // console.log('[ window IF ] :' + pos + 'px');
        }
        else {

            // get current position
            pos = window.scrollY;

            // menu button props

            nav.style.top = pos + 'px';
            nav.style.left = '0';
            nav.style.marginTop = '10vh';

            navbar.style.top = '0';
            navbar.style.left = '0';
            
            // nav component props
            
            
            // nav.style.marginTop = '10vh';

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

// function [ navigationDefaults ]
navigationDefaults = () => {

    // get current position
    pos = window.scrollY;

    
    if (window.scrollY < sectionHeight) {

        
        

        console.log('navbar if ' + pos +  'px');
        
        // navbar.style.top = pos + 'px';
    }
    else {
        navbar.style.display = 'flex';
        // navbar.style.display = 'none';
    }
    
    


    

}

// init [ navigationDefaults ] function
// navigationDefaults();