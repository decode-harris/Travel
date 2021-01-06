
// function [ assignments ]
assignments = () => {

    // main gallery component
    const gallery = document.querySelector('.gallery');
    
    // id variable
    let id;

    // title element selector
    let title = document.querySelector('.title');

    // tag element selector
    let tag = document.querySelector('.tag');

    // article panel selector
    let article = document.querySelector('#article');
    
    // info element selector
    let info = document.querySelector('.info');
    
    // loop iterator
    let i;
    
    // gallery button selectors
    let amsbtn = document.querySelector('#amsbtn');
    let czebtn = document.querySelector('#czebtn');
    let gerbtn = document.querySelector('#gerbtn');
    let sinbtn = document.querySelector('#sinbtn');
    let thabtn = document.querySelector('#thabtn');
    let nzlbtn = document.querySelector('#nzlbtn');

    // new gallerys [ COMING SOON ]
    // let engbtn = document.querySelector('#engbtn');
    // let ausbtn = document.querySelector('#ausbtn');
    

    // gallery photos all selector
    let photos = document.querySelectorAll('.photos');

    // photos description panel
    let photosDescription = document.createElement('p');

    // event [ amsbtn ] : display gallery data
    amsbtn.addEventListener('click', ()=> {

        // assign [ id ] to categories array node [ 0 ] ID
        id = gallery.setAttribute('id', categories[0].id);

        // assign [ title ] to categories array node [ 0 ] title
        title.innerHTML = categories[0].title;

        // assign [ tag ] to categories array node [ 0 ] tag
        tag.innerHTML = categories[0].tag;

        // assign [ info ] data to categories array node [ 0 ] info
        info.innerHTML = categories[0].info;

        // assign article panel to class active
        article.setAttribute('class', 'active');
        
        // append galleryTitle to [ filter ] button container [ REFACTORED CODE ]
        // title.appendChild(galleryTitle);

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

        // assign [ id ] to categories array node [ 1 ] ID
        id = gallery.setAttribute('id', categories[1].id);

        // assign [ title ] to categories array node [ 1 ] title
        title.innerHTML = categories[1].title;

        // assign [ tag ] to categories array node [ 1 ] tag
        tag.innerHTML = categories[1].tag;
        
        // assign [ info ] data to categories array node [ 1 ] info
        info.innerHTML = categories[1].info;

        // append galleryTitle to [ filter ] button container [ REFACTORED CODE ]
        // title.appendChild(galleryTitle);
        

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

        // assign [ id ] to categories array node [ 2 ] ID
        id = gallery.setAttribute('id', categories[2].id);

        // assign [ title ] to categories array node [ 2 ] title
        title.innerHTML = categories[2].title;

        // assign [ tag ] to categories array node [ 2 ] tag
        tag.innerHTML = categories[2].tag;

        // assign [ info ] to categories array node [ 2 ] info
        info.innerHTML = categories[2].info;

        
        // append galleryTitle to [ title ] button container [ REFACTORED CODE ]
        // title.appendChild(galleryTitle);

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

        // assign [ id ] to categories array node [ 3 ] ID
        id = gallery.setAttribute('id', categories[3].id);

        // assign [ title ] to categories array node [ 3 ] title
        title.innerHTML = categories[3].title;

        // assign [ tag ] to categories array node [ 3 ] tag
        tag.innerHTML = categories[3].tag;

        // destination info
        info.innerHTML = categories[3].info;
        
        // append galleryTitle to [ title ] button container [ REFACTORED CODE ]
        // title.appendChild(galleryTitle);

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

        // assign [ id ] to categories array node [ 4 ] ID
        id = gallery.setAttribute('id', categories[4].id);

        // assign [ title ] to categories array node [ 4 ] title
        title.innerHTML = categories[4].title;

        // assign [ tag ] to categories array node [ 4 ] tag
        tag.innerHTML = categories[4].tag;

        // assign [ info ] to categories array node [ 4 ] info
        info.innerHTML = categories[4].info;
        
        // append galleryTitle to [ title ] button container [ REFACTORED CODE ]
        // title.appendChild(galleryTitle);

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

        // assign [ id ] to categories array node [ 5 ] ID
        id = gallery.setAttribute('id', categories[5].id);

        // assign [ title ] to categories array node [ 5 ] title
        title.innerHTML = categories[5].title;

        // assign [ tag ] to categories array node [ 5 ] tag
        tag.innerHTML = categories[5].tag;
        
        // assign [ info ] to categories array node [ 5 ] info
        info.innerHTML = categories[5].info;

        
        // append galleryTitle to [ title ] button container [ REFACTORED CODE ]
        // title.appendChild(galleryTitle);

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