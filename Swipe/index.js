const container = document.querySelector('.container'), boxes = container.children.length;

container.style.setProperty('--n', boxes);


unify = (e) => {

    return e.changedTouches ? e.changedTouches[0] : e;

}

let x0 = null;

let i = 0;

// function [ lock ]
lock = (e) => {

    // assign [ x coords value ] as event / clientX
    x0 = unify(e).clientX;

    // test [ x coords value ]
    console.log(x0);
}
// function [ move ]
move = (e) => {
    if (x0 || x0 === 0) {
        let dx = unify(e).clientX - x0, s = Math.sin(dx);

        if ((i > 0 || s < 0) && (i  < boxes - 1 || s > 0))
            
            container.style.setProperty('--i', i -= s);

            x0 = null;
    }
}




container.addEventListener('mousedown', lock, false);
container.addEventListener('touchstart', lock, false);

container.addEventListener('mouseup', move, false);
container.addEventListener('touchend', move, false);