
// global element selectors
let buttons = document.querySelectorAll('.filter button');
let article = document.querySelector('#article');

// test
console.log(buttons);

// for each [ buttons ]
buttons.forEach(element => {

    // event [ element ]
    element.addEventListener('click', ()=> {

        // test
        console.log(element);

        // init [ defaultElements ] function
        defaultElements();

        // validate element class name
        if (element.className == '') {
            
            // assign clicked element class to active
            element.setAttribute('class', 'active');

            // assign article panel class to active
            article.setAttribute('class', 'active');
            
        }
        else {
            // add current clicked element as active [ fallback ]
            element.removeAttribute('class', 'active');
        }

        // information.setAttribute('active');
        
        // test
        console.log('[ for each ] element [ event ]');

    });

    // test
    console.log('[ for each ] button [ element ]');

    
});

// function [ default elements ]
defaultElements = () => {

    // for loop [ buttons ]
    for (i = 0; i < buttons.length; i++) {

        // assign all buttons in filter panel to empty class
        buttons[i].removeAttribute('class', 'active');

        // assign all buttons in filter panel to empty class [ alternative way ]
        // buttons[i].className = '';

    }
    
    // test
    console.log('[ default elements ] default props ]');

}





