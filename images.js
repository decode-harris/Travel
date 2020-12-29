// array [ categories ] end
const categories = [
    
    /*
        categories object data

        n0 - n5 [ 6 album data sources ]

        assign gallery id to object id
        assign title inner html to object title

    */

    // [ amsterdam ] information object [ node 0 ]
    {
        // gallery ID
        'id' : 'ams',

        // gallery Title
        'title' : 'Amsterdam, Netherlands',

        /*
            gallery Image source

            x00 - x06 [ 7 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // ams canals
        'x00' : 'https://i.ibb.co/gzWLHxs/ams-canals.jpg',
        // <img src="https://i.ibb.co/gzWLHxs/ams-canals.jpg" alt="ams-canals" border="0">

        // ams lolly shop
        'x01' : 'https://i.ibb.co/PNFxpgf/ams-lollyshop.jpg',
        // <img src="https://i.ibb.co/PNFxpgf/ams-lollyshop.jpg" alt="ams-lollyshop" border="0"></img>

        // ams bakery
        'x02' : 'https://i.ibb.co/VtWMvjp/ams-bakery.jpg',
        // <img src="https://i.ibb.co/VtWMvjp/ams-bakery.jpg" alt="ams-bakery" border="0"></img>

        // ams palace
        'x03' : 'https://i.ibb.co/NjHjmPZ/ams-palace.jpg',
        // <img src="https://i.ibb.co/NjHjmPZ/ams-palace.jpg" alt="ams-palace" border="0"></img>

        // ams town square
        'x04' : 'https://i.ibb.co/427mLjj/ams-townsquare.jpg',
        // <img src="https://i.ibb.co/427mLjj/ams-townsquare.jpg" alt="ams-townsquare" border="0"></img>
        
        // ams sloterdijk
        'x05' : 'https://i.ibb.co/HrXPMTX/ams-sloterdijk.jpg',
        // <img src="https://i.ibb.co/HrXPMTX/ams-sloterdijk.jpg" alt="ams-sloterdijk" border="0"></img>

        // ams laneway
        'x06' : 'https://i.ibb.co/Xs7QmgJ/ams-laneway.jpg',
        // <img src="https://i.ibb.co/Xs7QmgJ/ams-laneway.jpg" alt="ams-laneway" border="0"></img>

        /*
            gallery image information

            x00_info - x06_info [ 7 description elements ]

            assign image description to photos panel
            assign image description to fullscreen element

        */

        // ams canals info
        'x00_info' : 'the canals',

        // ams lolly info
        'x01_info' : 'jamim lollyshop',

        // ams bakery info
        'x02_info' : 'speciality bakery',

        // ams palace info
        'x03_info' : 'grand palace',

        // ams town center info
        'x04_info' : 'town center',

        // ams sloterdijk
        'x05_info' : 'sloterdijk',

        // ams laneways
        'x06_info' : 'the laneways',
        
    },
    
    // [ czech ] information object [ node 1 ]
    {
        // gallery ID
        'id' : 'cze',

        // gallery Title
        'title' : 'Prague, Czech Republic',

        /*
            gallery Image source

            x00 - x06 [ 7 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // cze old town
        'x00' : 'https://i.ibb.co/z5GDyt2/cze-oldtown.jpg',
        // <img src="https://i.ibb.co/z5GDyt2/cze-oldtown.jpg" alt="cze-oldtown" border="0">
        
        // cze town center
        'x01' : 'https://i.ibb.co/bzkJDV4/cze-towncenter.jpg',
        // <img src="https://i.ibb.co/bzkJDV4/cze-towncenter.jpg" alt="cze-towncenter" border="0"></img>

        // cze spire
        'x02' : 'https://i.ibb.co/j3t4c2y/cze-spire.jpg',
        // <img src="https://i.ibb.co/j3t4c2y/cze-spire.jpg" alt="cze-spire" border="0"></img>

        // cze river
        'x03' : 'https://i.ibb.co/2nC3M8J/cze-river.jpg',
        // <img src="https://i.ibb.co/2nC3M8J/cze-river.jpg" alt="cze-river" border="0"></img>

        // cze castle
        'x04' : 'https://i.ibb.co/5FnzR0x/cze-castle.jpg',
        // <img src="https://i.ibb.co/5FnzR0x/cze-castle.jpg" alt="cze-castle" border="0"></img>

        // cze city center
        'x05' : 'https://i.ibb.co/qxhhn6H/cze-citycenter.jpg',
        // <img src="https://i.ibb.co/qxhhn6H/cze-citycenter.jpg" alt="cze-citycenter" border="0"></img>

        // cze organ
        'x06' : 'https://i.ibb.co/0jSg5nS/cze-organ.jpg',
        // <img src="https://i.ibb.co/0jSg5nS/cze-organ.jpg" alt="cze-organ" border="0"></img>
    
    },

    // [ germany ] information object [ node 2 ]
    {
        // gallery ID
        'id' : 'ger',

        // gallery Title
        'title' : 'Munich, Germany',

        /*
            gallery Image source

            x00 - x06 [ 7 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // ger beer
        'x00' : 'https://i.ibb.co/zFkPzCz/ger-beer.jpg',
        // <img src="https://i.ibb.co/zFkPzCz/ger-beer.jpg" alt="ger-beer" border="0">
        
        // ger pub
        'x01' : 'https://i.ibb.co/JQVyNyR/ger-pub.jpg',
        // <img src="https://i.ibb.co/JQVyNyR/ger-pub.jpg" alt="ger-pub" border="0">
        
        // ger center
        'x02' : 'https://i.ibb.co/myk8zDz/ger-center.jpg',
        // <img src="https://i.ibb.co/myk8zDz/ger-center.jpg" alt="ger-center" border="0">
        
        // ger castle
        'x03' : 'https://i.ibb.co/HpVmtjP/ger-castle.jpg',
        // <img src="https://i.ibb.co/HpVmtjP/ger-castle.jpg" alt="ger-castle" border="0">

        // ger city
        'x04' : 'https://i.ibb.co/YDkrb7c/ger-city.jpg',
        // <img src="https://i.ibb.co/YDkrb7c/ger-city.jpg" alt="ger-city" border="0"></img>
        
        // ger arch
        'x05' : 'https://i.ibb.co/wSmpfnp/ger-architecture.jpg',
        // <img src="https://i.ibb.co/wSmpfnp/ger-architecture.jpg" alt="ger-architecture" border="0">
        
        // ger snow
        'x06' : 'https://i.ibb.co/NVvjkyy/ger-snow.jpg',
        // <img src="https://i.ibb.co/NVvjkyy/ger-snow.jpg" alt="ger-snow" border="0">

        
    },

    // [ singapore ] information object [ node 3 ]
    {
        // gallery ID
        'id' : 'sin',

        // gallery Title
        'title' : 'Singapore City, Singapore',

        /*
            gallery Image source

            x00 - x06 [ 7 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // sin lake
        'x00' : 'https://i.ibb.co/NLpsCVp/sin-lake.jpg',
        // <img src="https://i.ibb.co/NLpsCVp/sin-lake.jpg" alt="sin-lake" border="0">

        // sin city view
        'x01' : 'https://i.ibb.co/9sR7kFc/sin-cityview.jpg',
        // <img src="https://i.ibb.co/9sR7kFc/sin-cityview.jpg" alt="sin-cityview" border="0"></img>
        
        // sin waterfall
        'x02' : 'https://i.ibb.co/JRdFXrY/sin-waterfall.jpg',
        // <img src="https://i.ibb.co/JRdFXrY/sin-waterfall.jpg" alt="sin-waterfall" border="0"></img>
        
        // sin bay
        'x03' : 'https://i.ibb.co/0hpVhb2/sin-bay.jpg',
        // <img src="https://i.ibb.co/0hpVhb2/sin-bay.jpg" alt="sin-bay" border="0"></img>

        // sin path
        'x04' : 'https://i.ibb.co/GVvJyW8/sin-path.jpg',
        // <img src="https://i.ibb.co/GVvJyW8/sin-path.jpg" alt="sin-path" border="0"></img>

        // sin old town
        'x05' : 'https://i.ibb.co/JvHWcCN/sin-oldtown.jpg',
        // <img src="https://i.ibb.co/JvHWcCN/sin-oldtown.jpg" alt="sin-oldtown" border="0">

        // sin towers
        'x06' : 'https://i.ibb.co/020LRyr/sin-towers.jpg',
        // <img src="https://i.ibb.co/020LRyr/sin-towers.jpg" alt="sin-towers" border="0"></img>

    
    },

    // [ thailand ] information object [ node 4 ]
    {   
        // gallery ID
        'id' : 'tha',

        // gallery Title
        'title' : 'Phuket, Thailand',

        /*
            gallery Image source

            x00 - x06 [ 7 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // tha beach
        'x00' : 'https://i.ibb.co/jZW8hW3/thai-beach.jpg',
        // <img src="https://i.ibb.co/jZW8hW3/thai-beach.jpg" alt="thai-beach" border="0">
        
        // tha temple
        'x01' : 'https://i.ibb.co/NNQc1jj/thai-temple.jpg',
        // <img src="https://i.ibb.co/NNQc1jj/thai-temple.jpg" alt="thai-temple" border="0">

        // tha statue
        'x02' : 'https://i.ibb.co/5WQ7FMR/thai-statue.jpg',
        // <img src="https://i.ibb.co/5WQ7FMR/thai-statue.jpg" alt="thai-statue" border="0" />
        
        // tha street
        'x03' : 'https://i.ibb.co/QkQw50H/thai-street.jpg',
        // <img src="https://i.ibb.co/QkQw50H/thai-street.jpg" alt="thai-street" border="0">

        // tha monastery
        'x04' : 'https://i.ibb.co/3T05zNR/thai-monastery.jpg',
        // <img src="https://i.ibb.co/3T05zNR/thai-monastery.jpg" alt="thai-monastery" border="0">

        // tha monkey
        'x05' : 'https://i.ibb.co/gb0M2XS/thai-monkey.jpg',
        // <img src="https://i.ibb.co/gb0M2XS/thai-monkey.jpg" alt="thai-monkey" border="0"></img>

        // tha worship
        'x06' : 'https://i.ibb.co/xjZm4RV/thai-worship.jpg',
        // <img src="https://i.ibb.co/xjZm4RV/thai-worship.jpg" alt="thai-worship" border="0"></img>

    },

    // [ new zealand ] information object [ node 5 ]
    {
        // gallery ID
        'id' : 'nzl',

        // gallery Title
        'title' : 'Queenstown, New Zealand',

        /*
            gallery Image source

            x00 - x06 [ 7 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // nzl wanaka lake
        'x00' : 'https://i.ibb.co/xCQvwhK/nlz-wanakalake.jpg',
        // <img src="https://i.ibb.co/xCQvwhK/nlz-wanakalake.jpg" alt="nlz-wanakalake" border="0">

        // nzl wanaka
        'x01' : 'https://i.ibb.co/QNYKyXx/nzl-wanaka.jpg',
        // <img src="https://i.ibb.co/QNYKyXx/nzl-wanaka.jpg" alt="nzl-wanaka" border="0"></img>
        
        // nzl cadrona
        'x02' : 'https://i.ibb.co/jT5RZJy/nzl-cadrona.jpg',
        // <img src="https://i.ibb.co/jT5RZJy/nzl-cadrona.jpg" alt="nzl-cadrona" border="0"></img>

        // nzl queenslake
        'x03' : 'https://i.ibb.co/bLyYNJg/nzl-queenslake.jpg',
        // <img src="https://i.ibb.co/bLyYNJg/nzl-queenslake.jpg" alt="nzl-queenslake" border="0"></img>

        // nzl remarkables
        'x04' : 'https://i.ibb.co/pjDQ8pC/nzl-remarkables.jpg',
        // <img src="https://i.ibb.co/pjDQ8pC/nzl-remarkables.jpg" alt="nzl-remarkables" border="0"></img>

        // nzl cornonet peak
        'x05' : 'https://i.ibb.co/RD1mzTJ/nzl-coronetpeak.jpg',
        // <img src="https://i.ibb.co/RD1mzTJ/nzl-coronetpeak.jpg" alt="nzl-coronetpeak" border="0"></img>

        // nzl queenstown
        'x06' : 'https://i.ibb.co/SJ9drxF/nlz-queenstown.jpg',
        // <img src="https://i.ibb.co/SJ9drxF/nlz-queenstown.jpg" alt="nlz-queenstown" border="0"></img>

    },

]; // array [ categories ] end

// test
console.log(categories[0].id);

// function [ assignments ]
assignments = () => {

    // main gallery component
    const gallery = document.querySelector('.gallery');
    
    // galleryCategory variable
    let galleryCategory;

    // title container selector
    let title = document.querySelector('.title');

    // gallery title creator
    let galleryTitle = document.createElement('h2');

    // loop iterator
    let i;
    
    // gallery button selectors
    let amsbtn = document.querySelector('#amsbtn');
    let czebtn = document.querySelector('#czebtn');
    let gerbtn = document.querySelector('#gerbtn');
    let sinbtn = document.querySelector('#sinbtn');
    let thabtn = document.querySelector('#thabtn');
    let nzlbtn = document.querySelector('#nzlbtn');
    

    // gallery photos all selector
    let photos = document.querySelectorAll('.photos');

    // photos description panel
    let photosDescription = document.createElement('p');

    // event [ amsbtn ] : display gallery data
    amsbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 0 ] ID
        galleryCategory = gallery.setAttribute('id', categories[0].id);

        // assign [ galleryTitle] to categoryies array node [ 0 ] title
        galleryTitle.innerHTML = categories[0].title;

        // append galleryTitle to [ filter ] button container
        title.appendChild(galleryTitle);

        // photos loop
        for (i = 0; i < photos.length; i++) {

            photos[i].appendChild(photosDescription);

            // assign a background image to the gallery photo components
            photos[0].style.backgroundImage = 'url(' + categories[0].x00 + ')';
            photos[1].style.backgroundImage = 'url(' + categories[0].x01 + ')';
            photos[2].style.backgroundImage = 'url(' + categories[0].x02 + ')';
            photos[3].style.backgroundImage = 'url(' + categories[0].x03 + ')';
            photos[4].style.backgroundImage = 'url(' + categories[0].x04 + ')';
            photos[5].style.backgroundImage = 'url(' + categories[0].x05 + ')';
            photos[6].style.backgroundImage = 'url(' + categories[0].x06 + ')';

            // photos[0].photosDescription.innerHTML = '(' + categories[0].x00_info + ')';
            
            // test
            console.log('amsterdam gallery [ assigned ]');
        }

    });

    // event [ czebtn ] : display gallery data
    czebtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 1 ] ID
        galleryCategory = gallery.setAttribute('id', categories[1].id);

        // assign [ galleryTitle] to categoryies array node [ 1 ] title
        galleryTitle.innerHTML = categories[1].title;
        
        // append galleryTitle to [ title ] button container
        title.appendChild(galleryTitle);

        // photos loop
        for (i = 0; i < photos.length; i++) {
            
            // assign a background image to the gallery photo components
            photos[0].style.backgroundImage = 'url(' + categories[1].x00 + ')';
            photos[1].style.backgroundImage = 'url(' + categories[1].x01 + ')';
            photos[2].style.backgroundImage = 'url(' + categories[1].x02 + ')';
            photos[3].style.backgroundImage = 'url(' + categories[1].x03 + ')';
            photos[4].style.backgroundImage = 'url(' + categories[1].x04 + ')';
            photos[5].style.backgroundImage = 'url(' + categories[1].x05 + ')';
            photos[6].style.backgroundImage = 'url(' + categories[1].x06 + ')';


            // test
            console.log('czech gallery [ assigned ]');
        }

    });

    gerbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 2 ] ID
        galleryCategory = gallery.setAttribute('id', categories[2].id);

        // assign [ galleryTitle] to categoryies array node [ 2 ] title
        galleryTitle.innerHTML = categories[2].title;
        
        // append galleryTitle to [ title ] button container
        title.appendChild(galleryTitle);

        // photos loop
        for (i = 0; i < photos.length; i++) {
            
            // assign a background image to the gallery photo components
            photos[0].style.backgroundImage = 'url(' + categories[2].x00 + ')';
            photos[1].style.backgroundImage = 'url(' + categories[2].x01 + ')';
            photos[2].style.backgroundImage = 'url(' + categories[2].x02 + ')';
            photos[3].style.backgroundImage = 'url(' + categories[2].x03 + ')';
            photos[4].style.backgroundImage = 'url(' + categories[2].x04 + ')';
            photos[5].style.backgroundImage = 'url(' + categories[2].x05 + ')';
            photos[6].style.backgroundImage = 'url(' + categories[2].x06 + ')';

            // test
            console.log('germany gallery [ assigned ]');
        }
    
    });

    sinbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 3 ] ID
        galleryCategory = gallery.setAttribute('id', categories[3].id);

        // assign [ galleryTitle] to categoryies array node [ 3 ] title
        galleryTitle.innerHTML = categories[3].title;
        
        // append galleryTitle to [ title ] button container
        title.appendChild(galleryTitle);

        // photos loop
        for (i = 0; i < photos.length; i++) {
            
            // assign a background image to the gallery photo components
            photos[0].style.backgroundImage = 'url(' + categories[3].x00 + ')';
            photos[1].style.backgroundImage = 'url(' + categories[3].x01 + ')';
            photos[2].style.backgroundImage = 'url(' + categories[3].x02 + ')';
            photos[3].style.backgroundImage = 'url(' + categories[3].x03 + ')';
            photos[4].style.backgroundImage = 'url(' + categories[3].x04 + ')';
            photos[5].style.backgroundImage = 'url(' + categories[3].x05 + ')';
            photos[6].style.backgroundImage = 'url(' + categories[3].x06 + ')';

            // test
            console.log('singapore gallery [ assigned ]');
        }

    });

    thabtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 4 ] ID
        galleryCategory = gallery.setAttribute('id', categories[4].id);

        // assign [ galleryTitle] to categoryies array node [ 4 ] title
        galleryTitle.innerHTML = categories[4].title;
        
        // append galleryTitle to [ title ] button container
        title.appendChild(galleryTitle);

        // photos loop
        for (i = 0; i < photos.length; i++) {
            
            // assign a background image to the gallery photo components
            photos[0].style.backgroundImage = 'url(' + categories[4].x00 + ')';
            photos[1].style.backgroundImage = 'url(' + categories[4].x01 + ')';
            photos[2].style.backgroundImage = 'url(' + categories[4].x02 + ')';
            photos[3].style.backgroundImage = 'url(' + categories[4].x03 + ')';
            photos[4].style.backgroundImage = 'url(' + categories[4].x04 + ')';
            photos[5].style.backgroundImage = 'url(' + categories[4].x05 + ')';
            photos[6].style.backgroundImage = 'url(' + categories[4].x06 + ')';
            
            // test
            console.log('thailand gallery [ assigned ]');
        }

    });

    nzlbtn.addEventListener('click', ()=> {

        // assign [ galleryCategory ] to categories array node [ 5 ] ID
        galleryCategory = gallery.setAttribute('id', categories[5].id);

        // assign [ galleryTitle] to categoryies array node [ 5 ] title
        galleryTitle.innerHTML = categories[5].title;
        
        // append galleryTitle to [ title ] button container
        title.appendChild(galleryTitle);

        // photos loop
        for (i = 0; i < photos.length; i++) {
            
            // assign a background image to the gallery photo components
            photos[0].style.backgroundImage = 'url(' + categories[5].x00 + ')';
            photos[1].style.backgroundImage = 'url(' + categories[5].x01 + ')';
            photos[2].style.backgroundImage = 'url(' + categories[5].x02 + ')';
            photos[3].style.backgroundImage = 'url(' + categories[5].x03 + ')';
            photos[4].style.backgroundImage = 'url(' + categories[5].x04 + ')';
            photos[5].style.backgroundImage = 'url(' + categories[5].x05 + ')';
            photos[6].style.backgroundImage = 'url(' + categories[5].x06 + ')';
            
            // test
            console.log('newzealand gallery [ assigned ]');
        }

        // test
        console.log(gallery.id);

    });

} // function [ assignments ] end

// init assignments
assignments();