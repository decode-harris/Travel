// form input variables
let destination, destination_name, destination_time;
let accommodation, accommodation_time, accommodation_cost;
let transportation, transportation_cost, transportation_type;
let calculation, calculation_name, calculation_time;

// destination variables
destination = document.querySelector('#destination'); // destination
destination_name = document.querySelector('#destination-name'); // destination name
destination_type = document.querySelector('#destination-type'); // destination time

// // accomodation variables
accommodation = document.querySelector('#accommodation'); // accomm name
accommodation_time = document.querySelector('#accommodation-time'); // accomm time
accommodation_cost = document.querySelector('#accommodation-cost'); // accomm 

transportation = document.querySelector('#transportation'); // transportation name
transportation_type = document.querySelector('#transportation-type'); // transportation name
transportation_cost = document.querySelector('#transportation-cost'); // transportation name

// data validation variables
let des, des_name, des_type;
let acc, acc_time, acc_cost;
let tsp, tsp_type, tsp_cost;

// des element selectors
des = document.querySelector('#des');
des_name = document.querySelector('#des-name');
des_type = document.querySelector('#des-type');

// acc element selectors
acc = document.querySelector('#acc');
acc_name = document.querySelector('#acc-time');
acc_type = document.querySelector('#acc-cost');

// tsp element selectors
tsp = document.querySelector('#tsp');
tsp_type = document.querySelector('#tsp-type');
tsp_cost = document.querySelector('#tsp-cost');

// des element selectors
calculation_des = document.querySelector('#calculation-des');
calculation_des_name = document.querySelector('#calculation-des-name');
calculation_des_type = document.querySelector('#calculation-des-type');

// acc element selectors
calculation_acc = document.querySelector('#calculation-acc');
calculation_acc_name = document.querySelector('#calculation-acc-time');
calculation_acc_type = document.querySelector('#calculation-acc-cost');

// tsp element selectors
calculation_tsp = document.querySelector('#calculation-tsp');
calculation_tsp_type = document.querySelector('#calculation-tsp-type');
calculation_tsp_cost = document.querySelector('#calculation-tsp-cost');

// button variables
const buttons = document.querySelector('.buttons');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const view = document.querySelector('#view');
const add = document.querySelector('#add');

// event [ add ] button
add.addEventListener('click', ()=> {

    scrollTo(top, 0);

    form.style.display = 'flex';

    showTab(0);
    clearForm(0,1,2);

});

// function [ clearForm ]
clearForm = (currentTab) => {

    let counter = document.querySelector('.counter');
    counter.style.display = 'flex';

    let steps = document.getElementsByClassName("steps");

    

    // This function deals with validation of the form fields
    var x, y, i;
    x = document.getElementsByClassName("tabs");
    y = x[currentTab].getElementsByTagName("input");

    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      
        // If a field is empty...
      if (y[i].value != '') {
        
        y[i].value = '';

        view.style.display = 'none';
        next.style.display = 'flex';

        let added = document.querySelector('.added');
        added.style.display = 'none';
        
      }
    
      currentTab = 0;
      showTab(currentTab);
    }

    for (i = 0; i < steps.length; i++) {

        steps[i].className = 'steps';
        console.log('steps as : ' + steps[i]);
    }
    

}

view.style.display = 'none';

// current form tab
let currentTab = 0;
// init [ showTab ] function 
showTab(currentTab);

// function [ showTab ]
function showTab(n) {

    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tabs");

    x[n].style.display = "flex";

    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prev").style.display = "none";
        buttons.style.justifyContent = 'flex-end';

        scrollTo(top, 0);
    }
    else {
        document.getElementById("prev").style.display = "inline";
        buttons.style.justifyContent = 'space-between';
    }

    if (n == (x.length - 1)) {
        document.getElementById("next").innerHTML = "Submit";
        document.getElementById("view").style.display = "inline";

        view.style.display = 'none';
        prev.style.display = 'none';

        buttons.style.justifyContent = 'center';
        buttons.style.alignItems = 'center'

        des.innerHTML = destination.value;
        des_name.innerHTML = destination_name.value;
        des_type.innerHTML = destination_type.value;    

        // assign accommodation values to accommodation overview
        acc.innerHTML = accommodation.value;
        acc_name.innerHTML = accommodation_time.value;
        acc_type.innerHTML = accommodation_cost.value;
        
        // assign transport values to transport overview
        tsp.innerHTML = transportation.value;
        tsp_type.innerHTML = transportation_type.value;
        tsp_cost.innerHTML = transportation_cost.value;


    }
    else {
        document.getElementById("next").innerHTML = "Next";
    }

    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}




function nextPrev(n) {
    
    var x = document.getElementsByClassName('tabs');

    // exit the function if any field in the current tab is invalid
    if (n == 1 && !validateForm()) return false;

    // hide the current tab
    x[currentTab].style.display = 'none';

    // increase or decrease the current tab by 1
    currentTab = currentTab + n;

    if (currentTab >= x.length) {

        // submit the form
        document.querySelector('.form').submit();

        // apply a helper style for added list
        let added = document.createElement('div');
        added.innerHTML = 'list added';
        added.setAttribute('class', 'added');
        
        // append the helper to the form view
        form.appendChild(added);
        
        // display [ view ] btn as block element
        view.style.display = 'block';

        // remove [ next ] btn from view
        next.style.display = 'none';

        // select & remove the counter element for this stage of form
        let counter = document.querySelector('.counter');
        counter.style.display = 'none';
        
        // let viewing = document.createElement('a');
        // viewing.innerHTML = 'view';
        // viewing.setAttribute('href', '#list');

        // form.appendChild(viewing);

        // init [ setFormData ] function
        setFormData();

        return false;
    }

    // otherwide, display the correct tab
    showTab(currentTab);

}

function validateForm() {
    
    
    // This function deals with validation of the form fields
    var y, i, valid = true;

    var x = document.getElementsByClassName('tabs');
    y = x[currentTab].getElementsByTagName("input");

    

    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      
        // If a field is empty...
      if (y[i].value == "") {
        
        // add an "invalid" class to the field:
        y[i].className += " invalid";

        // set page focus to invalid element
        y[i].focus();

        // test invalid input element
        y[i].style.background = 'darkslategrey';

        // and set the current valid status to false:
        valid = false;
      }
    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {

        document.getElementsByClassName("steps")[currentTab].className += " finish";
    
    }
    
    return valid; // return the valid status
  }
  
function fixStepIndicator(n) {

    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("steps");

    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    //... and adds the "active" class to the current step:
    x[n].className += " active";
}


let formData = [];


saveFormData = () => {

    let entry = {
        'destination' : destination.value,
        'destination-name' : destination_name.value,
        'destination-type' : destination_type.value,

        'accommodation' : accommodation.value,
        'accommodation-time' : accommodation_time,
        'accommodation-cost' : accommodation_cost,

        'transportation' : transportation.value,
        'transportation-type' : transportation_type.value,
        'transportation-cost' : transportation_cost.value,
    }

    formData.push(entry);

    

    console.log(formData);

}


setFormData = () => {
    console.log('des as : ' + destination.value);

    // assign destination values to destination overview

    calculation_des.innerHTML = destination.value;
    calculation_des_name.innerHTML = destination_name.value;
    calculation_des_type.innerHTML = destination_type.value;    

    // assign accommodation values to accommodation overview
    calculation_acc.innerHTML = accommodation.value;
    calculation_acc_name.innerHTML = accommodation_time.value;
    calculation_acc_type.innerHTML = accommodation_cost.value;
    
    // assign transport values to transport overview
    calculation_tsp.innerHTML = transportation.value;
    calculation_tsp_type.innerHTML = transportation_type.value;
    calculation_tsp_cost.innerHTML = transportation_cost.value;

    let planner = document.querySelectorAll('.planner li');

    for (let i = 0; i < planner.length; i++) {

        planner[0].style.background = 'darkblue';
        planner[0].style.border = '2px solid #FFF';
        planner[0].style.color = '#FFF';
        planner[i].style.fontSize = '1.5rem';
        planner[i].style.background = 'white';
        planner[i].style.color = 'darkblue';
        planner[i].style.border = '2px solid darkblue';

        console.log('planner elements : ' + planner[i]);
    }


    // test
    console.log('fn : setFormData()');

}


// destination_article = document.querySelector('#destination-article');
// accommodation_article = document.querySelector('#accommodation-article');

// accommodation_article.style.display = 'none';


// next.addEventListener('click', (e)=> {

//     // prevent form submit
//     // e.preventDefault();

//     // assign destination values to destination overview
//     des.innerHTML = destination.value;
//     des_name.innerHTML = destination_name.value;
//     des_type.innerHTML = destination_type.value;    

//     // assign accommodation values to accommodation overview
//     acc.innerHTML = accommodation.value;
//     acc_name.innerHTML = accommodation_time.value;
//     acc_type.innerHTML = accommodation_cost.value;
    
//     // assign transport values to transport overview
//     tsp.innerHTML = transportation.value;
//     tsp_type.innerHTML = transportation_type.value;
//     tsp_cost.innerHTML = transportation_cost.value;


// });


/*
    create counter for article pages

    page [0,1,2]

    track page array

    attach next & prev buttons to page

*/

// let article = 0;

// for(let i = 0; i < 3; i++) {

//     i++;

//     console.log(i++);
// }



// // transport variables
// transport = document.querySelector('.transport'); // transport name
// transport_type = document.querySelector('.transport-type'); // transport type
// transport_cost = document.querySelector('.transport-cost'); // transport total

// selector [ form ]
const form = document.querySelector('form');

// // event [ form ]
next.addEventListener('click', (e)=> {

    // prevent form submit
    e.preventDefault();

    // getFormData();

    destination.style.background = '#FFF';
    destination_name.style.background = '#FFF';
    destination_type.style.background = '#FFF';


    // console.log(formData)
});





// function [ validation ]
validation = () => {

    if (destination == '') {

        destination.focus();
        destination.style.background = 'lightgrey';

        console.log('fn : getFormData() + if st x00');    

    }
    if (destination_name == '') {

        destination_name.focus();
        destination_name.style.background = 'lightgrey';

        // test
        console.log('fn : getFormData() + if time()');

    }
    if (destination_time === '' || destination_time == null) {

        destination_time.focus();
        destination_time.style.background = 'lightgrey';

        // test
        console.log('fn : getFormData() + if time()');

    }
    else {

        setFormData();
    
    }

}

