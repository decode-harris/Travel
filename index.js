
// fullscreen container selector [ modal props ]
let fullscreen = document.querySelector('.fullscreen');

// fullscreenImage variable
let fullscreenImage = document.createElement('img');

// function [ createGalleryImage ]
createGalleryImage = () => {
    
    // assign class & ID to [ fullscreenImage ]
    fullscreenImage.setAttribute('class', 'fullscreenImage');
    fullscreenImage.setAttribute('id', 'category_number');

    // append fullscreenImage to fullscreen container
    fullscreen.appendChild(fullscreenImage)

    // // validate if image has been created
    // if (fullscreenImage.id == 'category_number') {
        
        
    //     // test
    //     console.log('image is already in use');
    // }
    // else {

        
    // }

    // test
    console.log('full screen image test ' + fullscreenImage);

}










// let photos = document.querySelectorAll('.photos');

// photos.forEach(photos => {
    
//     photos.addEventListener('click', ()=> {

//     });
// });





// let gallery = document.querySelector('.gallery');

// gallery.addEventListener('click', (event)=> {

//     if (event.target.tagName != 'DIV') {

//         // test
//         console.log('return');

//         return
//     }

//     else {
//         // let clicktarget = event.target;
//         // clicktarget.toggleAttribute('class', 'fullscreen');

//         fullscreen.style.display = 'flex';
//         gallery.appendChild(fullscreen);

//         // test
//         console.log('full screen class applied');

//     }
    

// });


// let fullscreen = document.querySelector('.fullscreen');
// // default props [ hidden element ]
// fullscreen.style.display = 'none';
// // clicktarget close event
// fullscreen.addEventListener('click', ()=> {

//     fullscreen.style.display = 'none';

//     // test
//     console.log('full screen closed');
// });
// // let i;

// // for (i = 0; i < photos.length; i++) {

// //     // test
// //     console.log(photos[i]);
    
// // }


// // fullscreenPhotoFunction
// fullscreenPhotoFunction = () => {

//     /*
//         rules
//         1. select all photo elements
//         2. add event listener to all photo elements
//         3. event will enable widescreen class on photo element
//         4. widescreen class will overlay the gallery view
//     */

// }