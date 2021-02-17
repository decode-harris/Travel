
// google maps variable
// let map;

// function initMap() {

//     map = new google.maps.Map(document.getElementById('map'), {
//         // center: { lat: latCode, lng: lngCode },

//         center: { lat: 45.943, lng: 24.966 },
//         zoom: 8,
//     });

// }

// initMap();


latitude = () => {

    // new latitude variable
    let newLat;

    // validate countries
    if (article.id == 'rom') {

        // assign newLat as coordinates
        newLat = coordinates[0].latCode;
    }
}



let coordinates = [

    // country objects
    {
        name: 'Romania',
        latCode: '45.94',
        lngCode: '24.96',
    },
    {
        name: '',
        latCode: '',
        lngCode: '',
    },
    {
        name: '',
        latCode: '',
        lngCode: '',
    },

];