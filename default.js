// fullscreen component selector
let fullscreen = document.querySelector('.fullscreen');

// function [ defaultPhotoView ]
defaultPhotoView = () => {

    // display fullscreen element as display none
    fullscreen.style.display = 'none';

}

// init [ defaultPhotoView ] function onload
defaultPhotoView();

// event [ fullscreen ]
fullscreen.addEventListener('click', ()=> {
    
    // init [ defaultPhotoView ] function
    defaultPhotoView();

});