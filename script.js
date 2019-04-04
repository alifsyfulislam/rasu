element1 = document.querySelector('.element_1');
element2 = document.querySelector('.element_2');
element3 = document.querySelector('.element_3');
element4 = document.querySelector('.element_4');
setTimeout(changeSlide, 1500);
setTimeout(changeSlide2, 4000);
setTimeout(changeSlide3, 7000);

function changeSlide() {
    element1.classList ? element1.classList.add('fadeOut') : element1.className += ' fadeOut';
    element2.className = element2.className.replace('hidden', 'fadeIn'); //remove shake class
}

function changeSlide2() {
    element2.className = element2.className.replace('fadeIn', 'fadeOut');
    element3.className = element3.className.replace('hidden', 'fadeIn'); //remove shake class
}


function changeSlide3() {
    element3.className = element3.className.replace('fadeIn', 'fadeOut');
    element4.className = element4.className.replace('hidden', 'fadeIn'); //remove shake class
    console.log("hi");
}