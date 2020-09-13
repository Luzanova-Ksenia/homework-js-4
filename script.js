// Clear left block
function clearLeft() {
    const clearAllLeft = document.querySelectorAll('.left')[0];
    const divLeft = clearAllLeft.querySelector('textarea');
    clearAllLeft.removeChild(divLeft);
    const newDivLeft = document.createElement('textarea');
    clearAllLeft.appendChild(newDivLeft);
    newDivLeft.id = 'text';
};

// Clear right block
function clearRight() {
    const clearAllRight = document.querySelectorAll('.right')[0];
    const divRight = clearAllRight.querySelector('span');
    clearAllRight.removeChild(divRight);
    const newDivRight = document.createElement('span');
    clearAllRight.appendChild(newDivRight);
};

// Convertion from HTML text
function convert() {
    const textElement = document.getElementById("text").value;
    console.log(textElement);
    const newElemet = document.querySelectorAll('.right')[0];
    const newDivRight = document.createElement('span');
    newElemet.appendChild(newDivRight);
    newDivRight.innerHTML = textElement
};


// Color change
function chooseColor(value) {
    console.log(value)
    const color = document.querySelectorAll('.right')[0];
    const colorWhat = color.querySelector('span');
    if (value == 'black'){
        colorWhat.classList.remove('blue1', 'red1')
        colorWhat.classList.add('black1')
    }
    else if (value == 'blue'){
        colorWhat.classList.remove('black1', 'red1')
        colorWhat.classList.add('blue1')
    }
    else if (value == 'red'){
        colorWhat.classList.remove('blue1', 'black1')
        colorWhat.classList.add('red1')
    }
};