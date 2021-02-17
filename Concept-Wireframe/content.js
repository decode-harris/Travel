// array [ categories ] end
const categories = [
    
    /*
        categories object data

        n0 - n5 [ 6 album data sources ]

        assign data to html [ attached functions ] : assignments();

        // output

            assigns gallery id to object id
            assigns title value to title element
            assigns hidden info to info element on desktop
            assigns x00 - x06 image sources to photo elements

    */

    // [ amsterdam ] information object [ node 0 ]
    {
        // gallery ID
        'id' : 'ams',

        // gallery title
        'title' : 'Amsterdam',

        // gallery tagline
        'tag' : 'capital of the netherlands',

        // destination info
        'info' : 'Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades.',

        'currency' : 'euro (€)',
        'language' : 'dutch, english',
        'region' : 'europe',

        'lat' : '52.367',
        'lng' : '4.904',

        /*
            gallery Image source

            x00 - x11 [ 12 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // ams canals
        'x00' : 'https://i.ibb.co/gzWLHxs/ams-canals.jpg',
        // <img src="https://i.ibb.co/gzWLHxs/ams-canals.jpg" alt="ams-canals" border="0">

        // ams palace
        'x01' : 'https://i.ibb.co/NjHjmPZ/ams-palace.jpg',
        // <img src="https://i.ibb.co/NjHjmPZ/ams-palace.jpg" alt="ams-palace" border="0"></img>

        // ams houses
        'x02' : 'https://i.ibb.co/x7pr9Tk/ams-houserow.jpg',
        // <img src="https://i.ibb.co/x7pr9Tk/ams-houserow.jpg" alt="ams-houserow" border="0">

        // ams clocktower
        'x03' : 'https://i.ibb.co/MPZ5N0v/ams-clocktower.jpg',
        // <img src="https://i.ibb.co/MPZ5N0v/ams-clocktower.jpg" alt="ams-clocktower" border="0">
        
        // ams bakery
        'x04' : 'https://i.ibb.co/VtWMvjp/ams-bakery.jpg',
        // <img src="https://i.ibb.co/VtWMvjp/ams-bakery.jpg" alt="ams-bakery" border="0"></img>

        // ams town square
        'x05' : 'https://i.ibb.co/427mLjj/ams-townsquare.jpg',
        // <img src="https://i.ibb.co/427mLjj/ams-townsquare.jpg" alt="ams-townsquare" border="0"></img>
        
        // ams lolly shop
        'x06' : 'https://i.ibb.co/PNFxpgf/ams-lollyshop.jpg',
        // <img src="https://i.ibb.co/PNFxpgf/ams-lollyshop.jpg" alt="ams-lollyshop" border="0"></img>
        
        // ams palace grounds
        'x07' : 'https://i.ibb.co/rFrXvM8/ams-palacegrounds.jpg',
        // <img src="https://i.ibb.co/rFrXvM8/ams-palacegrounds.jpg" alt="ams-palacegrounds" border="0">
        
        // ams sloterdijk
        'x07' : 'https://i.ibb.co/HrXPMTX/ams-sloterdijk.jpg',
        // <img src="https://i.ibb.co/HrXPMTX/ams-sloterdijk.jpg" alt="ams-sloterdijk" border="0"></img>

        // ams airport
        'x08' : 'https://i.ibb.co/7yRrD2w/ams-airport.jpg',
        // <img src="https://i.ibb.co/7yRrD2w/ams-airport.jpg" alt="ams-airport" border="0">
        
        // ams canals houses
        'x09' : 'https://i.ibb.co/1rhntWf/ams-canalshouses.jpg',
        // <img src="https://i.ibb.co/1rhntWf/ams-canalshouses.jpg" alt="ams-canalshouses" border="0">


        // not included in current view [ mobile ]
        // ams laneway
        'x10' : 'https://i.ibb.co/Xs7QmgJ/ams-laneway.jpg',
        // <img src="https://i.ibb.co/Xs7QmgJ/ams-laneway.jpg" alt="ams-laneway" border="0"></img>

        
        

        // replicant usage
        // 'x0' : '',

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

        'x0_info' : '',
        'x0_info' : '',
        'x0_info' : '',
        'x0_info' : '',
        'x0_info' : '',
        

        // replicant usage
        'x0_info' : '',
    },
    
    // [ czech ] information object [ node 1 ]
    {
        // gallery ID
        'id' : 'cze',
        
        // gallery Title
        'title' : 'Prague',
        
        // destination tagline
        'tag' : 'Capital of the Czech Republic',
        
        // destination info
        'info' : `Known for its Old Town Square, the heart of its historic core, with colorful baroque buildings, Gothic churches.`,
        'currency' : 'czech crown (koruna česká)',
        'language' : 'czech',
        'region' : 'europe',

        /*
            gallery Image source

            x00 - x11 [ 12 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // cze building 
        'x00' : 'https://i.ibb.co/hM9kY1c/cze-building.jpg',
        // <img src="https://i.ibb.co/hM9kY1c/cze-building.jpg" alt="cze-building" border="0"></img>

        // cze town center
        'x01' : 'https://i.ibb.co/bzkJDV4/cze-towncenter.jpg',
        // <img src="https://i.ibb.co/bzkJDV4/cze-towncenter.jpg" alt="cze-towncenter" border="0">

        // cze river
        'x02' : 'https://i.ibb.co/2nC3M8J/cze-river.jpg',
        // <img src="https://i.ibb.co/2nC3M8J/cze-river.jpg" alt="cze-river" border="0"></img>

        // cze city center
        'x03' : 'https://i.ibb.co/qxhhn6H/cze-citycenter.jpg',
        // <img src="https://i.ibb.co/qxhhn6H/cze-citycenter.jpg" alt="cze-citycenter" border="0">

        // cze castle
        'x04' : 'https://i.ibb.co/5FnzR0x/cze-castle.jpg',
        // <img src="https://i.ibb.co/5FnzR0x/cze-castle.jpg" alt="cze-castle" border="0">

        // cze organ
        'x05' : 'https://i.ibb.co/0jSg5nS/cze-organ.jpg',
        // <img src="https://i.ibb.co/0jSg5nS/cze-organ.jpg" alt="cze-organ" border="0"></img>

        // cze spire
        'x06' : 'https://i.ibb.co/j3t4c2y/cze-spire.jpg',
        // <img src="https://i.ibb.co/j3t4c2y/cze-spire.jpg" alt="cze-spire" border="0">

        // cze streets
        'x07' : 'https://i.ibb.co/jGVXn22/cze-streets.jpg',
        // <img src="https://i.ibb.co/jGVXn22/cze-streets.jpg" alt="cze-streets" border="0">

        // cze old town
        'x08' : 'https://i.ibb.co/z5GDyt2/cze-oldtown.jpg',
        // <img src="https://i.ibb.co/z5GDyt2/cze-oldtown.jpg" alt="cze-oldtown" border="0">

        // cze allyway
        'x09' : 'https://i.ibb.co/VwYT0Q3/cze-alleyway.jpg',
        // <img src="https://i.ibb.co/VwYT0Q3/cze-alleyway.jpg" alt="cze-alleyway" border="0">

        // cze wallpainting
        'x10' : 'https://i.ibb.co/CP6prdy/cze-wallpainting.jpg',
        // <img src="https://i.ibb.co/CP6prdy/cze-wallpainting.jpg" alt="cze-wallpainting" border="0">

        // cze stripmall
        'x011' : 'https://i.ibb.co/WndnN24/cze-stripmall.jpg',
        // <img src="https://i.ibb.co/WndnN24/cze-stripmall.jpg" alt="cze-stripmall" border="0"></img>
    
    },

    // [ germany ] information object [ node 2 ]
    {
        // gallery ID
        'id' : 'ger',

        // gallery title
        'title' : 'Munich',

        // destination tagline
        'tag' : 'Bavaria’s capital in Germany',
        
        // destination info
        'info' : 'Munich is home to centuries-old buildings, its annual Oktoberfest celebration and its beer halls.',
        'currency' : 'euro (€)',
        'language' : 'german',
        'region' : 'europe',

        /*
            gallery Image source

            x00 - x11 [ 12 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // ger arch
        'x00' : 'https://i.ibb.co/wSmpfnp/ger-architecture.jpg',
        // <img src="https://i.ibb.co/wSmpfnp/ger-architecture.jpg" alt="ger-architecture" border="0">

        // ger castle
        'x01' : 'https://i.ibb.co/HpVmtjP/ger-castle.jpg',
        // <img src="https://i.ibb.co/HpVmtjP/ger-castle.jpg" alt="ger-castle" border="0">

        // ger snow
        'x02' : 'https://i.ibb.co/NVvjkyy/ger-snow.jpg',
        // <img src="https://i.ibb.co/NVvjkyy/ger-snow.jpg" alt="ger-snow" border="0">
        
        // ger shopfront
        'x03' : 'https://i.ibb.co/g3r298M/ger-shopfront.jpg',
        // <img src="https://i.ibb.co/g3r298M/ger-shopfront.jpg" alt="ger-shopfront" border="0"></img>
        
        // ger pub
        'x04' : 'https://i.ibb.co/JQVyNyR/ger-pub.jpg',
        // <img src="https://i.ibb.co/JQVyNyR/ger-pub.jpg" alt="ger-pub" border="0">

        // ger ranges
        'x05' : 'https://i.ibb.co/mR8YdVv/ger-ranges.jpg',
        // <img src="https://i.ibb.co/mR8YdVv/ger-ranges.jpg" alt="ger-ranges" border="0">

        // ger beer
        'x06' : 'https://i.ibb.co/zFkPzCz/ger-beer.jpg',
        // <img src="https://i.ibb.co/zFkPzCz/ger-beer.jpg" alt="ger-beer" border="0">

        // ger center
        'x07' : 'https://i.ibb.co/myk8zDz/ger-center.jpg',
        // <img src="https://i.ibb.co/myk8zDz/ger-center.jpg" alt="ger-center" border="0">

        // ger pillar
        'x08' : 'https://i.ibb.co/TqfWVrq/ger-pillar.jpg',
        // <img src="https://i.ibb.co/TqfWVrq/ger-pillar.jpg" alt="ger-pillar" border="0">
        
        // ger mainstreet
        'x09' : 'https://i.ibb.co/rcjkjts/ger-mainstreet.jpg',
        // <img src="https://i.ibb.co/rcjkjts/ger-mainstreet.jpg" alt="ger-mainstreet" border="0"></img>


        // not used in this view [ mobile ]
        // ger city
        'x10' : 'https://i.ibb.co/YDkrb7c/ger-city.jpg',
        // <img src="https://i.ibb.co/YDkrb7c/ger-city.jpg" alt="ger-city" border="0"></img>
        // ger maria
        'x11' : 'https://i.ibb.co/4RvRXRF/ger-maria.jpg',
        // <img src="https://i.ibb.co/4RvRXRF/ger-maria.jpg" alt="ger-maria" border="0"></img>
    
    },

    // [ singapore ] information object [ node 3 ]
    {
        // gallery ID
        'id' : 'sin',

        // gallery Title
        'title' : 'Singapore ',

        // destination tag
        'tag' : 'The Republic of Singapore',

        // destination info
        'info' : `Singapore has been Southeast Asia's most modern city for over a century. The city blends together many cultures and religions.`,
        'currency' : 'Singapore dollar (S$)',
        'language' : 'english, Mandarin, Bahasa Malaysia, Tamil',
        'region' : 'asia',

        

        /*
            gallery Image source

            x00 - x11 [ 12 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // sin lake
        'x00' : 'https://i.ibb.co/NLpsCVp/sin-lake.jpg',
        // <img src="https://i.ibb.co/NLpsCVp/sin-lake.jpg" alt="sin-lake" border="0">

        // sin mandalay
        'x01' : 'https://i.ibb.co/020LRyr/sin-mandalay.jpg',
        // <img src="https://i.ibb.co/020LRyr/sin-mandalay.jpg" alt="sin-mandalay" border="0">
        
        // sin bay
        'x02' : 'https://i.ibb.co/0hpVhb2/sin-bay.jpg',
        // <img src="https://i.ibb.co/0hpVhb2/sin-bay.jpg" alt="sin-bay" border="0"></img>

        // sin mandalay view
        'x03' : 'https://i.ibb.co/gPt6K3G/sin-mandalayview.jpg',
        // <img src="https://i.ibb.co/gPt6K3G/sin-mandalayview.jpg" alt="sin-mandalayview" border="0">
        
        // sin waterfall
        'x04' : 'https://i.ibb.co/JRdFXrY/sin-waterfall.jpg',
        // <img src="https://i.ibb.co/JRdFXrY/sin-waterfall.jpg" alt="sin-waterfall" border="0"></img>

        // sin gardens main
        'x05' : 'https://i.ibb.co/0C2FSdd/sin-gardensmain.jpg',
        // <img src="https://i.ibb.co/0C2FSdd/sin-gardensmain.jpg" alt="sin-gardensmain" border="0">
        
        // sin mandalay pool
        'x06' : 'https://i.ibb.co/n0Gk1F7/sin-mandalaypool.jpg',
        // <img src="https://i.ibb.co/n0Gk1F7/sin-mandalaypool.jpg" alt="sin-mandalaypool" border="0">

        // sin streets
        'x07' : 'https://i.ibb.co/GT17XWv/sin-streets.jpg',
        // <img src="https://i.ibb.co/GT17XWv/sin-streets.jpg" alt="sin-streets" border="0">

        // sin path
        'x08' : 'https://i.ibb.co/GVvJyW8/sin-path.jpg',
        // <img src="https://i.ibb.co/GVvJyW8/sin-path.jpg" alt="sin-path" border="0"></img>

        // sin old town
        'x09' : 'https://i.ibb.co/JvHWcCN/sin-oldtown.jpg',
        // <img src="https://i.ibb.co/JvHWcCN/sin-oldtown.jpg" alt="sin-oldtown" border="0">

        // sin scrupture
        'x10' : 'https://i.ibb.co/T1RDbgN/sin-sculpture.jpg',
        // <img src="https://i.ibb.co/T1RDbgN/sin-sculpture.jpg" alt="sin-sculpture" border="0">

        // sin city view
        'x11' : 'https://i.ibb.co/9sR7kFc/sin-cityview.jpg',
        // <img src="https://i.ibb.co/9sR7kFc/sin-cityview.jpg" alt="sin-cityview" border="0"></img>
    
    },

    // [ thailand ] information object [ node 4 ]
    {   
        // gallery ID
        'id' : 'tha',

        // gallery Title
        'title' : 'Phuket',

        // destination tag
        'tag' : 'Biggest Island of Thailand',

        // destination info
        'info' : `A rainforested & mountainous island in the Andaman Sea, has some of Thailand’s most popular beaches.`,
        'currency' : 'Thai baht (B)',
        'language' : 'thai',
        'region' : 'asia',

        /*
            gallery Image source

            x00 - x11 [ 12 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // tha worship
        'x00' : 'https://i.ibb.co/xjZm4RV/thai-worship.jpg',
        // <img src="https://i.ibb.co/xjZm4RV/thai-worship.jpg" alt="thai-worship" border="0"></img>

        // tha temple
        'x01' : 'https://i.ibb.co/NNQc1jj/thai-temple.jpg',
        // <img src="https://i.ibb.co/NNQc1jj/thai-temple.jpg" alt="thai-temple" border="0">

        // thai koh beach
        'x02' : 'https://i.ibb.co/MMy8RbJ/thai-kohbeach.jpg',
        // <img src="https://i.ibb.co/MMy8RbJ/thai-kohbeach.jpg" alt="thai-kohbeach" border="0"></img>

        // tha monkey
        'x03' : 'https://i.ibb.co/gb0M2XS/thai-monkey.jpg',
        // <img src="https://i.ibb.co/gb0M2XS/thai-monkey.jpg" alt="thai-monkey" border="0"></img>

        // tha monastery
        'x04' : 'https://i.ibb.co/J7zfCnp/thai-monastery.jpg',
        // <img src="https://i.ibb.co/J7zfCnp/thai-monastery.jpg" alt="thai-monastery" border="0">

        // thai sunset
        'x05' : 'https://i.ibb.co/ZhH6nYJ/thai-sunset.jpg',
        // <img src="https://i.ibb.co/ZhH6nYJ/thai-sunset.jpg" alt="thai-sunset" border="0"></img>
        
        // tha statue
        'x06' : 'https://i.ibb.co/5WQ7FMR/thai-statue.jpg',
        // <img src="https://i.ibb.co/5WQ7FMR/thai-statue.jpg" alt="thai-statue" border="0"></img>

        // thai koh wallart
        'x07' : 'https://i.ibb.co/kXnLKJ0/thai-kohwallart.jpg',
        // <img src="https://i.ibb.co/kXnLKJ0/thai-kohwallart.jpg" alt="thai-kohwallart" border="0"></img>
        
        // tha beach
        'x08' : 'https://i.ibb.co/jZW8hW3/thai-beach.jpg',
        // <img src="https://i.ibb.co/jZW8hW3/thai-beach.jpg" alt="thai-beach" border="0">
        
        // thai mainstreet 
        'x10' : 'https://i.ibb.co/2nynMjN/thai-mainstreet.jpg',
        // <img src="https://i.ibb.co/2nynMjN/thai-mainstreet.jpg" alt="thai-mainstreet" border="0">

        // tha sidestreet
        'x09' : 'https://i.ibb.co/QkQw50H/thai-sidestreet.jpg',
        // <img src="https://i.ibb.co/QkQw50H/thai-sidestreet.jpg" alt="thai-sidestreet" border="0"></img>

        // thai koh full moon
        'x11' : 'https://i.ibb.co/Bj5VWYG/thai-fullmoon.jpg',
        // <img src="https://i.ibb.co/Bj5VWYG/thai-fullmoon.jpg" alt="thai-fullmoon" border="0"></img>

        
        
    },

    // [ new zealand ] information object [ node 5 ]
    {
        // gallery ID
        'id' : 'nzl',

        // gallery Title
        'title' : 'Queenstown',
        
        // destination tag
        'tag' : 'South Island, New Zealand',

        // destination info
        'info' : `Sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports.`,
        'currency' : 'New Zealand dollar ($)',
        'language' : 'english, maori',
        'region' : 'australia & pacific',

        /*
            gallery Image source

            x00 - x11 [ 12 photo elements ]

            assign image source to photos element
            assign image source to fullscreen element

        */

        // nzl queenslake
        'x00' : 'https://i.ibb.co/bLyYNJg/nzl-queenslake.jpg',
        // <img src="https://i.ibb.co/bLyYNJg/nzl-queenslake.jpg" alt="nzl-queenslake" border="0"></img>

        // nzl remarkables
        'x01' : 'https://i.ibb.co/pjDQ8pC/nzl-remarkables.jpg',
        // <img src="https://i.ibb.co/pjDQ8pC/nzl-remarkables.jpg" alt="nzl-remarkables" border="0"></img>
        
        // nzl cadrona main
        'x02' : 'https://i.ibb.co/g4sMk3G/nzl-cadronamain.jpg',
        // <img src="https://i.ibb.co/g4sMk3G/nzl-cadronamain.jpg" alt="nzl-cadronamain" border="0">

        // nzl remarkables back
        'x03' : 'https://i.ibb.co/KmTYGyy/nzl-remarkablesback.jpg',
        // <img src="https://i.ibb.co/KmTYGyy/nzl-remarkablesback.jpg" alt="nzl-remarkablesback" border="0">

        // nzl wanaka
        'x04' : 'https://i.ibb.co/QNYKyXx/nzl-wanaka.jpg',
        // <img src="https://i.ibb.co/QNYKyXx/nzl-wanaka.jpg" alt="nzl-wanaka" border="0"></img>

        // nzl wanaka food
        'x05' : 'https://i.ibb.co/Nn2QJgN/nzl-wanakafood.jpg',
        // <img src="https://i.ibb.co/Nn2QJgN/nzl-wanakafood.jpg" alt="nzl-wanakafood" border="0">

        // nzl remarkables main
        'x06' : 'https://i.ibb.co/zVj4CSW/nzl-remarkablesmain.jpg',
        // <img src="https://i.ibb.co/zVj4CSW/nzl-remarkablesmain.jpg" alt="nzl-remarkablesmain" border="0">

        // nzl queenstown
        'x07' : 'https://i.ibb.co/SJ9drxF/nlz-queenstown.jpg',
        // <img src="https://i.ibb.co/SJ9drxF/nlz-queenstown.jpg" alt="nlz-queenstown" border="0"></img>

        // nzl cornonet peak
        'x08' : 'https://i.ibb.co/RD1mzTJ/nzl-coronetpeak.jpg',
        // <img src="https://i.ibb.co/RD1mzTJ/nzl-coronetpeak.jpg" alt="nzl-coronetpeak" border="0"></img>
        
        // nzl wanaka lake
        'x09' : 'https://i.ibb.co/xCQvwhK/nlz-wanakalake.jpg',
        // <img src="https://i.ibb.co/xCQvwhK/nlz-wanakalake.jpg" alt="nlz-wanakalake" border="0">

        // nzl cadrona
        'x10' : 'https://i.ibb.co/jT5RZJy/nzl-cadrona.jpg',
        // <img src="https://i.ibb.co/jT5RZJy/nzl-cadrona.jpg" alt="nzl-cadrona" border="0"></img>

        // nzl cadrona back
        'x11' : 'https://i.ibb.co/DQ3js8R/nzl-cadronaback.jpg',
        // <img src="https://i.ibb.co/DQ3js8R/nzl-cadronaback.jpg" alt="nzl-cadronaback" border="0">
    
    },

]; // array [ categories ] end

// test
console.log(categories[0].id);

contentRemoval = () => {

    // component selectors
    const header = document.querySelector('.header');
    const landing = document.querySelector('.landing');
    const overview = document.querySelector('.overview');
    const swipe = document.querySelector('.swipe');
    const info = document.querySelector('.info');

    // remove content elements
    header.style.display = 'none';
    landing.style.display = 'none';
    overview.style.display = 'none';
    swipe.style.display = 'none';
    info.style.display = 'none';

};
// contentRemoval();

// page wrapper selector
const pagewrapper = document.querySelector('.page');
pagewrapper.id = 'homepage';

// main container wrapper
const main = document.querySelector('#main');

// article content elements
const title = document.querySelector('#content-title');
const tagline = document.querySelector('#content-tagline');
const banner = document.querySelector('#content-banner');
const country = document.querySelector('#content-country');
const info = document.querySelector('#content-info');
const currency = document.querySelector('#currency-tag');
const language = document.querySelector('#language-tag');
const region = document.querySelector('#region-tag');


// navigation button variables
const buttonAmsterdam = document.querySelector('#button-amsterdam');
const buttonCzechRepublic = document.querySelector('#button-czechrepublic');
const buttonGermany = document.querySelector('#button-germany');
const buttonNewZealand = document.querySelector('#button-newzealand');
const buttonSingapore = document.querySelector('#button-singapore');
const buttonThailand = document.querySelector('#button-thailand');


// swiper content variables
const swiperWrapper = document.getElementsByClassName('swiper-wrapper');
const swiperImages = document.getElementsByClassName('swiper-slide');

// grid content variables
const gridzero = document.querySelectorAll('#gridzero .grid-images');
const gridone = document.querySelectorAll('#gridone .grid-images');
const gridtwo = document.querySelectorAll('#gridtwo .grid-images');

let countryLat;
let countryLng;

// loop iterator
let i;

// google map variable
// let map;

// function [ initMap ] google maps api call
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: countryLat, lng: countryLng },
//     zoom: 8,
//   });
// }


// function [ assignImageContent ] 
assignImageContent = () => {

    
    // event [ buttonAmsterdam ]
    buttonAmsterdam.addEventListener('click', ()=> {

        // if page is not at start of main, scroll into view
        main.scrollIntoView();

        // apply nav width to default [ 0% ]
        nav.style.width = '0%';

        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';

        // apply categories [ 0 ] values to html article content elements
        pagewrapper.setAttribute('id', 'amsterdamContentID');

        // apply title context to categories [ 0 ] value
        title.innerHTML = categories[0].title;

        // apply tagline context to categories [ 0 ] value
        tagline.innerHTML = categories[0].tag;

        // apply banner source to categories [ 0 ] value
        banner.src = categories[0].x00;

        // apply country context to categories [ 0 ] value
        country.innerHTML = title.innerHTML;

        // apply info context to categories [ 0 ] value
        info.innerHTML = categories[0].info;

        // apply currency context to categories [ 0 ] value
        currency.innerHTML = categories[0].currency;

        // apply language context to categories [ 0 ] value
        language.innerHTML = categories[0].language;

        // apply region context to categories [ 0 ] value
        region.innerHTML = categories[0].region;

        

        // swiper image assignment
        for(i = 0; i < swiperImages.length; i++) {

            //  reassign swiper images to matching content [ amsterdam gallery ]
            swiperImages[0].src = categories[0].x00;
            swiperImages[1].src = categories[0].x01;
            swiperImages[2].src = categories[0].x02;
            swiperImages[3].src = categories[0].x03;
            swiperImages[4].src = categories[0].x04;
            
            // test output [ loop iteration ]
            console.log(swiperImages[i]);
        }
        
        // grid image assignment
        for(i = 0; i < gridzero.length; i++) {

            // assign highlight images to gallery
            gridzero[0].src = categories[0].x01;
            gridzero[1].src = categories[0].x02;
            gridzero[2].src = categories[0].x03;
            
            // test output [ loop iteration ]
            console.log(gridzero[i]);
        }
        for(i = 0; i < gridone.length; i++) {

            // assign highlight images to gallery
            gridone[0].src = categories[0].x04;
            gridone[1].src = categories[0].x05;
            gridone[2].src = categories[0].x06;
            
            // test output [ loop iteration ]
            console.log(gridone[i]);
        }
        for(i = 0; i < gridtwo.length; i++) {

            gridtwo[0].src = categories[0].x07;
            gridtwo[1].src = categories[0].x08;
            gridtwo[2].src = categories[0].x09;
            
            // test output [ loop iteration ]
            console.log(gridtwo[i]);
        }

        countryLat = categories[0].lat;
        countryLng = categories[0].lng;
    
    });
    // event [ buttonCzechRepublic ]
    buttonCzechRepublic.addEventListener('click', ()=> {

        // if page is not at start of main, scroll into view
        main.scrollIntoView();

        // apply nav width to default [ 0% ]
        nav.style.width = '0%';

        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';

        // apply categories [ 1 ] values to html article content elements
        pagewrapper.setAttribute('id', 'czechRepublicContentID');

        // apply title context to categories [ 1 ] value
        title.innerHTML = categories[1].title;

        // apply tagline context to categories [ 1 ] value
        tagline.innerHTML = categories[1].tag;

        // apply banner source to categories [ 1 ] value
        banner.src = categories[1].x00;

        // apply country context to categories [ 1 ] value
        country.innerHTML = title.innerHTML;

        // apply info context to categories [ 1 ] value
        info.innerHTML = categories[1].info;

        // apply currency context to categories [ 1 ] value
        currency.innerHTML = categories[1].currency;

        // apply language context to categories [ 1 ] value
        language.innerHTML = categories[1].language;

        // apply region context to categories [ 1 ] value
        region.innerHTML = categories[1].region;

        // swiper image assignment
        for(i = 0; i < swiperImages.length; i++) {

            //  reassign swiper images to matching content [ amsterdam gallery ]
            swiperImages[0].src = categories[1].x00;
            swiperImages[1].src = categories[1].x01;
            swiperImages[2].src = categories[1].x02;
            swiperImages[3].src = categories[1].x03;
            swiperImages[4].src = categories[1].x04;
            
            // test output [ loop iteration ]
            console.log(swiperImages[i]);
        }
        
        // grid image assignment
        for(i = 0; i < gridzero.length; i++) {

            // assign highlight images to gallery
            gridzero[0].src = categories[1].x01;
            gridzero[1].src = categories[1].x02;
            gridzero[2].src = categories[1].x03;
            
            
            // test output [ loop iteration ]
            console.log(gridzero[i]);
        }
        for(i = 0; i < gridone.length; i++) {

            // assign highlight images to gallery
            gridone[0].src = categories[1].x04;
            gridone[1].src = categories[1].x05;
            gridone[2].src = categories[1].x06;
            
            
            // test output [ loop iteration ]
            console.log(gridone[i]);
        }
        for(i = 0; i < gridtwo.length; i++) {

            gridtwo[0].src = categories[1].x07;
            gridtwo[1].src = categories[1].x08;
            gridtwo[2].src = categories[1].x09;
            
            

            // test output [ loop iteration ]
            console.log(gridtwo[i]);
        }


    });
    // event [ buttonGermany ]
    buttonGermany.addEventListener('click', ()=> {

        // if page is not at start of main, scroll into view
        main.scrollIntoView();

        // reset nav width to default [ 0% ]
        nav.style.width = '0%';

        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';

        // apply categories [ 2 ] values to html article content elements
        pagewrapper.setAttribute('id', 'singaporeContentID');

        // apply title context to categories [ 2 ] value
        title.innerHTML = categories[2].title;

        // apply tagline context to categories [ 2 ] value
        tagline.innerHTML = categories[2].tag;

        // apply banner source to categories [ 2 ] value
        banner.src = categories[2].x00;

        // apply country context to categories [ 2 ] value
        country.innerHTML = title.innerHTML;

        // apply info context to categories [ 2 ] value
        info.innerHTML = categories[2].info;

        // apply currency context to categories [ 2 ] value
        currency.innerHTML = categories[2].currency;

        // apply language context to categories [ 2 ] value
        language.innerHTML = categories[2].language;

        // apply region context to categories [ 2 ] value
        region.innerHTML = categories[2].region;

        // swiper image assignment
        for(i = 0; i < swiperImages.length; i++) {

            //  reassign swiper images to matching content [ amsterdam gallery ]
            swiperImages[0].src = categories[2].x00;
            swiperImages[1].src = categories[2].x01;
            swiperImages[2].src = categories[2].x02;
            swiperImages[3].src = categories[2].x03;
            swiperImages[4].src = categories[2].x04;
            
            // test output [ loop iteration ]
            console.log(swiperImages[i]);
        }
        
        // grid image assignment
        for(i = 0; i < gridzero.length; i++) {

            // assign highlight images to gallery
            gridzero[0].src = categories[2].x01;
            gridzero[1].src = categories[2].x02;
            gridzero[2].src = categories[2].x03;
            
            
            // test output [ loop iteration ]
            console.log(gridzero[i]);
        }
        for(i = 0; i < gridone.length; i++) {

            // assign highlight images to gallery
            gridone[0].src = categories[2].x04;
            gridone[1].src = categories[2].x05;
            gridone[2].src = categories[2].x06;
            
            
            // test output [ loop iteration ]
            console.log(gridone[i]);
        }
        for(i = 0; i < gridtwo.length; i++) {

            gridtwo[0].src = categories[2].x07;
            gridtwo[1].src = categories[2].x08;
            gridtwo[2].src = categories[2].x09;
            
            // test output [ loop iteration ]
            console.log(gridtwo[i]);
        }



    });
    // event [ buttonSingapore ]
    buttonSingapore.addEventListener('click', ()=> {

        // if page is not at start of main, scroll into view
        main.scrollIntoView();

        // reset nav width to default [ 0% ]
        nav.style.width = '0%';

        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';

        // apply categories [ 0 ] values to html article content elements
        pagewrapper.setAttribute('id', 'singaporeContentID');

        // apply title context to categories [ 3 ] value
        title.innerHTML = categories[3].title;

        // apply tagline context to categories [ 3 ] value
        tagline.innerHTML = categories[3].tag;

        // apply banner source to categories [ 3 ] value
        banner.src = categories[3].x00;

        // apply country context to categories [ 3 ] value
        country.innerHTML = title.innerHTML;

        // apply info context to categories [ 3 ] value
        info.innerHTML = categories[3].info;

        // apply currency context to categories [ 3 ] value
        currency.innerHTML = categories[3].currency;

        // apply language context to categories [ 3 ] value
        language.innerHTML = categories[3].language;

        // apply region context to categories [ 3 ] value
        region.innerHTML = categories[3].region;

        // swiper image assignment
        for(i = 0; i < swiperImages.length; i++) {

            //  reassign swiper images to matching content [ amsterdam gallery ]
            swiperImages[0].src = categories[3].x00;
            swiperImages[1].src = categories[3].x01;
            swiperImages[2].src = categories[3].x02;
            swiperImages[3].src = categories[3].x03;
            swiperImages[4].src = categories[3].x04;
            
            // test output [ loop iteration ]
            console.log(swiperImages[i]);
        }
        
        // grid image assignment
        for(i = 0; i < gridzero.length; i++) {

            // assign highlight images to gallery
            gridzero[0].src = categories[3].x01;
            gridzero[1].src = categories[3].x02;
            gridzero[2].src = categories[3].x03;
            
            
            // test output [ loop iteration ]
            console.log(gridzero[i]);
        }
        for(i = 0; i < gridone.length; i++) {

            // assign highlight images to gallery
            gridone[0].src = categories[3].x04;
            gridone[1].src = categories[3].x05;
            gridone[2].src = categories[3].x06;
            
            
            // test output [ loop iteration ]
            console.log(gridone[i]);
        }
        for(i = 0; i < gridtwo.length; i++) {

            gridtwo[0].src = categories[3].x07;
            gridtwo[1].src = categories[3].x08;
            gridtwo[2].src = categories[3].x09;
            
            // test output [ loop iteration ]
            console.log(gridtwo[i]);
        }

    });
    // event [ buttonThailand ]
    buttonThailand.addEventListener('click', ()=> {

        main.scrollIntoView();

        // reset nav width to default [ 0% ]
        nav.style.width = '0%';

        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';

        // apply categories [ 4 ] values to html article content elements
        pagewrapper.setAttribute('id', 'thailandContentID');
        
        // apply title context to categories [ 4 ] value
        title.innerHTML = categories[4].title;

        // apply tagline context to categories [ 4 ] value
        tagline.innerHTML = categories[4].tag;

        // apply banner source to categories [ 4 ] value
        banner.src = categories[4].x00;

        // apply country context to categories [ 4 ] value
        country.innerHTML = title.innerHTML;

        // apply info context to categories [ 4 ] value
        info.innerHTML = categories[4].info;

        // apply currency context to categories [ 4 ] value
        currency.innerHTML = categories[4].currency;

        // apply language context to categories [ 4 ] value
        language.innerHTML = categories[4].language;

        // apply region context to categories [ 4 ] value
        region.innerHTML = categories[4].region;

        // swiper image assignment
        for(i = 0; i < swiperImages.length; i++) {

            //  reassign swiper images to matching content [ thailand gallery ]
            swiperImages[0].src = categories[4].x00;
            swiperImages[1].src = categories[4].x01;
            swiperImages[2].src = categories[4].x02;
            swiperImages[3].src = categories[4].x03;
            swiperImages[4].src = categories[4].x04;
            
            // test output [ loop iteration ]
            console.log(swiperImages[i]);
        }
        
        // grid image assignment
        for(i = 0; i < gridzero.length; i++) {

            // assign highlight images to gallery
            gridzero[0].src = categories[4].x01;
            gridzero[1].src = categories[4].x02;
            gridzero[2].src = categories[4].x03;
            
            // test output [ loop iteration ]
            console.log(gridzero[i]);
        }
        for(i = 0; i < gridone.length; i++) {

            // assign highlight images to gallery
            gridone[0].src = categories[4].x04;
            gridone[1].src = categories[4].x05;
            gridone[2].src = categories[4].x06;
            
            // test output [ loop iteration ]
            console.log(gridone[i]);
        }
        for(i = 0; i < gridtwo.length; i++) {

            gridtwo[0].src = categories[4].x07;
            gridtwo[1].src = categories[4].x08;
            gridtwo[2].src = categories[4].x09;
            
            // test output [ loop iteration ]
            console.log(gridtwo[i]);
        }
    
    });
    // event [ buttonNewZealand ]
    buttonNewZealand.addEventListener('click', ()=> {

        main.scrollIntoView();

        // reset nav width to default [ 0% ]
        nav.style.width = '0%';

        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';

        // apply categories [ 0 ] values to html article content elements
        pagewrapper.setAttribute('id', 'newZealandContentID');
        title.innerHTML = categories[5].title;
        tagline.innerHTML = categories[5].tag;
        banner.src = categories[5].x00;
        country.innerHTML = title.innerHTML;
        info.innerHTML = categories[5].info;

        // apply currency context to categories [ 5 ] value
        currency.innerHTML = categories[5].currency;

        // apply language context to categories [ 5 ] value
        language.innerHTML = categories[5].language;

        // apply region context to categories [ 5 ] value
        region.innerHTML = categories[5].region;

        // swiper image assignment
        for(i = 0; i < swiperImages.length; i++) {

            //  reassign swiper images to matching content [ amsterdam gallery ]
            swiperImages[0].src = categories[5].x00;
            swiperImages[1].src = categories[5].x01;
            swiperImages[2].src = categories[5].x02;
            swiperImages[3].src = categories[5].x03;
            swiperImages[4].src = categories[5].x04;
            
            // test output [ loop iteration ]
            console.log(swiperImages[i]);
        }
        
        // grid image assignment
        for(i = 0; i < gridzero.length; i++) {

            // assign highlight images to gallery
            gridzero[0].src = categories[5].x01;
            gridzero[1].src = categories[5].x02;
            gridzero[2].src = categories[5].x03;
            
            
            // test output [ loop iteration ]
            console.log(gridzero[i]);
        }
        for(i = 0; i < gridone.length; i++) {

            // assign highlight images to gallery
            gridone[0].src = categories[5].x04;
            gridone[1].src = categories[5].x05;
            gridone[2].src = categories[5].x06;
            
            
            // test output [ loop iteration ]
            console.log(gridone[i]);
        }
        for(i = 0; i < gridtwo.length; i++) {

            gridtwo[0].src = categories[5].x07;
            gridtwo[1].src = categories[5].x08;
            gridtwo[2].src = categories[5].x09;
            
            // test output [ loop iteration ]
            console.log(gridtwo[i]);
        }
    
    });
}
// init [ assignImageContent ]
assignImageContent();

// function [ amsterdamContent ] homepage view
amsterdamContent = () => {

    // apply categories [ 0 ] values to html article content elements
    pagewrapper.setAttribute('id', 'amsterdamContentID');
    // apply title context to categories [ 0 ] value
    title.innerHTML = categories[0].title;

    // apply tagline context to categories [ 0 ] value
    tagline.innerHTML = categories[0].tag;

    // apply banner source to categories [ 0 ] value
    banner.src = categories[0].x00;

    // apply country context to categories [ 0 ] value
    country.innerHTML = title.innerHTML;

    // apply info context to categories [ 0 ] value
    info.innerHTML = categories[0].info;

    // apply currency context to categories [ 0 ] value
    currency.innerHTML = categories[0].currency;

    // apply language context to categories [ 0 ] value
    language.innerHTML = categories[0].language;

    // apply region context to categories [ 0 ] value
    region.innerHTML = categories[0].region;

    // swiper image assignment
    for(i = 0; i < swiperImages.length; i++) {

        //  reassign swiper images to matching content [ amsterdam gallery ]
        swiperImages[0].src = categories[0].x00;
        swiperImages[1].src = categories[0].x01;
        swiperImages[2].src = categories[0].x02;
        swiperImages[3].src = categories[0].x03;
        swiperImages[4].src = categories[0].x04;
        
        // test output [ loop iteration ]
        console.log(swiperImages[i]);
    }
    
    // grid image assignment
    for(i = 0; i < gridzero.length; i++) {

        // assign highlight images to gallery
        gridzero[0].src = categories[0].x01;
        gridzero[1].src = categories[0].x02;
        gridzero[2].src = categories[0].x03;
        
        // test output [ loop iteration ]
        console.log(gridzero[i]);
    }
    for(i = 0; i < gridone.length; i++) {

        // assign highlight images to gallery
        gridone[0].src = categories[0].x04;
        gridone[1].src = categories[0].x05;
        gridone[2].src = categories[0].x06;
        
        // test output [ loop iteration ]
        console.log(gridone[i]);
    }
    for(i = 0; i < gridtwo.length; i++) {

        gridtwo[0].src = categories[0].x07;
        gridtwo[1].src = categories[0].x08;
        gridtwo[2].src = categories[0].x09;
        
        // test output [ loop iteration ]
        console.log(gridtwo[i]);
    }
};



