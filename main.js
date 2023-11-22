const buttons = document.querySelectorAll(".clickbutton")
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');
const catImage = document.getElementById('catImage');
const dogImage = document.getElementById('dogImage');


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.id === "bothButton") {
            defaultView();
        } else {
            if (button.id === "leftButton") {
                expandColumn('left');
            } else if (button.id === "rightButton") {
                expandColumn('right');
            } 
        }
    });
});

function defaultView() {
    leftColumn.style.width = "50%";
    rightColumn.style.width = "50%";
    leftColumn.style.display = "flex";
    rightColumn.style.display = "flex";
    catImage.style.display = "block";
    dogImage.style.display = "block";
    catImage.style.width = "91%";
    dogImage.style.width = "91%";
};

function expandColumn(column) {
    if (column === 'left') {
        leftColumn.style.width = "95%";
        rightColumn.style.width = "5%";
        catImage.style.display = "block";
        dogImage.style.display = "none";
        catImage.style.width = "600px";
        
    } else if (column === 'right') {
        rightColumn.style.width = "95%";
        leftColumn.style.width = "5%";
        dogImage.style.display = "block";
        catImage.style.display = "none";
        dogImage.style.width = "600px";
    }
}