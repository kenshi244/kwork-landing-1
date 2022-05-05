let buttons = document.getElementsByClassName("main__block__more");
let ulElements = document.getElementsByClassName("main__block__ul");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        console.log(ulElements[i]);
    });
}






















