const root = document.querySelector(".root");
let lastElements = document.querySelectorAll("ul > li:last-child");
let elementsLi = document.querySelectorAll("li > ul > li");

elementsLi.forEach(elem => elem.textContent = "someText");

lastElements.forEach(elem => elem.classList.add("last"));

function setFirstItemClassName(lvl, elem) {

    lvl--;

    if(elem.children && lvl > 0) {
        let children = [...elem.children];
        children.forEach(elem => setFirstItemClassName(lvl, elem));
    } else {
        elem.firstElementChild.classList.add("first-item");
    }
}

setFirstItemClassName(3, root);


// setTimeout(() => {
//     let elemLast = [...document.getElementsByClassName("last")];
//     elemLast.forEach(elem => elem.style.backgroundColor = "#0f0");

//     let elemFirst = [...document.getElementsByClassName("first-item")];
//     elemFirst.forEach(elem => elem.style.backgroundColor = "#f00");
// }, 2000)