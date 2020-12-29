/*
    [ categories ] gallery information array
*/

const categories = [
    
    // category information objects
    {
        // html attribute assignments
        'id' : 'ams',
        'title' : 'Amsterdam, Netherlands',

        // gallery photo element background image source assignments
        

        // ams canals
        'x00' : 'https://i.ibb.co/gzWLHxs/IMG20200201143953.jpg',

        // ams lolly shop
        'x01' : 'https://i.ibb.co/PNFxpgf/IMG20200129111201.jpg',

        // ams alleyway
        'x02' : 'https://i.ibb.co/Xs7QmgJ/IMG20200129102421.jpg',

        // ams bakery
        'x03' : 'https://i.ibb.co/VtWMvjp/IMG20200202120106.jpg',

        // ams town square
        'x04' : 'https://i.ibb.co/427mLjj/IMG20200201142543.jpg',


        // ams palace
        'x05' : 'https://i.ibb.co/NjHjmPZ/IMG20200201140604.jpg',

        // ams sloterdijk
        'x06' : 'https://i.ibb.co/HrXPMTX/IMG20200131115227.jpg',

    
    },
    {
        "id" : "cze",
        'title' : 'Prague, Czech Republic',
    },
    {
        "id" : "sin",
        'title' : 'Singapore City, Singapore',
    },
    {
        "id" : "nzl",
        'title' : 'Queenstown, New Zealand',
    },
    {
        "id" : "ger",
        'title' : 'Munich, Germany',
    },
    {
        "id" : "tha",
        'title' : 'Phuket, Thailand',
    }
    
];

// test
console.log(categories[0].id);





// function [ assignments ]
assignments = () => {

    // main gallery component
    const gallery = document.querySelector('.gallery');
    
    // galleryCategory variable
    let galleryCategory;

    // filter button container selector
    let filter = document.querySelector('.filter');

    // gallery title creator
    let galleryTitle = document.createElement('h2');

    // loop iterator
    let i;
    
    // gallery button selectors
    let amsbtn = document.querySelector('#amsbtn');
    let czebtn = document.querySelector('#czebtn');
    let sinbtn = document.querySelector('#sinbtn');
    let nzlbtn = document.querySelector('#nzlbtn');
    let gerbtn = document.querySelector('#gerbtn');
    let thabtn = document.querySelector('#thabtn');

    // gallery photos all selector
    let photos = document.querySelectorAll('.photos');

    // event [ amsbtn ] : display gallery data
    amsbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 0 ] ID
        galleryCategory = gallery.setAttribute('id', categories[0].id);

        // assign [ galleryTitle] to categoryies array node [ 0 ] title
        galleryTitle.innerHTML = categories[0].title;

        // append galleryTitle to [ filter ] button container
        filter.appendChild(galleryTitle);

        // photos loop
        for (i = 0; i < photos.length; i++) {
            
            photos[0].style.backgroundImage = 'url(' + categories[0].x00 + ')';
            photos[1].style.backgroundImage = 'url(' + categories[0].x01 + ')';
            photos[2].style.backgroundImage = 'url(' + categories[0].x02 + ')';
            photos[3].style.backgroundImage = 'url(' + categories[0].x03 + ')';
            photos[4].style.backgroundImage = 'url(' + categories[0].x04 + ')';
            photos[5].style.backgroundImage = 'url(' + categories[0].x05 + ')';
            photos[6].style.backgroundImage = 'url(' + categories[0].x06 + ')';


            // test
            console.log('[ IMAGES.JS ] : photos for loop');
        }

    });

    // event [ czebtn ] : display gallery data
    czebtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 1 ] ID
        galleryCategory = gallery.setAttribute('id', categories[1].id);

        // assign [ galleryTitle] to categoryies array node [ 1 ] title
        galleryTitle.innerHTML = categories[1].title;
        
        // append galleryTitle to [ filter ] button container
        filter.appendChild(galleryTitle);

    });

    sinbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 2 ] ID
        galleryCategory = gallery.setAttribute('id', categories[2].id);

        // assign [ galleryTitle] to categoryies array node [ 2 ] title
        galleryTitle.innerHTML = categories[2].title;
        
        // append galleryTitle to [ filter ] button container
        filter.appendChild(galleryTitle);



    });

    nzlbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 3 ] ID
        galleryCategory = gallery.setAttribute('id', categories[3].id);

        // assign [ galleryTitle] to categoryies array node [ 3 ] title
        galleryTitle.innerHTML = categories[3].title;
        
        // append galleryTitle to [ filter ] button container
        filter.appendChild(galleryTitle);

    });

    gerbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 4 ] ID
        galleryCategory = gallery.setAttribute('id', categories[4].id);

        // assign [ galleryTitle] to categoryies array node [ 4 ] title
        galleryTitle.innerHTML = categories[4].title;
        
        // append galleryTitle to [ filter ] button container
        filter.appendChild(galleryTitle);

    });

    thabtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 5 ] ID
        galleryCategory = gallery.setAttribute('id', categories[5].id);

        // assign [ galleryTitle] to categoryies array node [ 5 ] title
        galleryTitle.innerHTML = categories[5].title;
        
        // append galleryTitle to [ filter ] button container
        filter.appendChild(galleryTitle);

        // test
        console.log(gallery.id);

    });


    

  

}

// init assignments
assignments();