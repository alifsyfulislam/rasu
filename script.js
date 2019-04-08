element1 = document.querySelector('.element_1');
element2 = document.querySelector('.element_2');
element3 = document.querySelector('.element_3');
element4 = document.querySelector('.element_4');
setTimeout(changeSlide, 3e3);
setTimeout(changeSlide2, 6e3);
setTimeout(changeSlide3, 9e3);

function changeSlide() {
    element1.classList ? element1.classList.add('fadeOut') : element1.className += ' fadeOut';
    element2.className = element2.className.replace('hidden', 'fadeIn');
}

function changeSlide2() {
    element2.className = element2.className.replace('fadeIn', 'fadeOut');
    element3.className = element3.className.replace('hidden', 'fadeIn');
}


function changeSlide3() {
    element3.className = element3.className.replace('fadeIn', 'fadeOut');
    element4.className = element4.className.replace('hidden', 'fadeIn');
    console.log("hi");
}