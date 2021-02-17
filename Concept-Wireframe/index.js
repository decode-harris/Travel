// let content = document.querySelectorAll('.content');


// // for loop [ content ]
// for (let i = 0; i < content.length; i++) {
    
    
//     let min = 1;
//     let max = 255;
//     let rgb;
    

//     // function [ rgb values ]
//     rgb = Math.trunc( (Math.random() * (max - min) + min) );

    

//     content[i].style.background = `rgb${rgb, rgb, rgb}`;
    


    

    
    
// }



// hidden text selector
let hidden = document.querySelector('.text-hidden');
hidden.style.display = 'none';
// read more button selector
let more = document.querySelector('#more');

// event [ more ]
more.addEventListener('click', ()=> {

    if (hidden.style.display != 'flex') {
        
        // assign button inner html to active
        more.innerHTML = 'read less';

        // assign hidden element to display flex
        hidden.style.display = 'flex';
        hidden.style.flexDirection = 'column';

        // test assignment styles on element
        // hidden.style.background = 'yellow';
        // hidden.style.padding = 'var(--sm)';

        // test
        console.log('hidden elements active : ' + hidden);
    }
    else {

        // return button inner html to default
        more.innerHTML = 'read more';

        // default hidden element to display none
        hidden.style.display = 'none';
    }

});









// const API_KEY = 'AIzaSyCAKiQcmxa78MkZL4oTcMvTa43CNaOX8es';





