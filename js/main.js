let list = "";

let xhr = new XMLHttpRequest();
xhr.open("GET", "files/list.txt", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        list = xhr.responseText.split("\r\n");
    }
};
xhr.send();

let resultsDiv = document.getElementById("resultsDiv");
/* for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `${list[i]}`;
    resultsDiv.append(li);
} */

let input = document.getElementsByTagName("input")[0];
let button = document.getElementById("searchButton");

input.addEventListener("input", function (event) {
    let enteredData = this.value;
    let searchArray = [];
    if (enteredData) {
        searchArray = list.filter((data) => {
            return data.toLocaleLowerCase().startsWith(enteredData.toLocaleLowerCase());
        });
        searchArray = searchArray.map((data) => {
            return "<li>" + data + "</li>";
        });
        show(searchArray);
        document.querySelector(".search__results__container").classList.add("active");

        let allList = document.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "setInForm(this)");
        }
    } else {
        document.querySelector(".search__results__container").classList.remove("active");
    }
});

function setInForm(element) {
    let selectData = element.textContent;
    input.value = selectData;
    document.querySelector(".search__results__container").classList.remove("active");
}

function show(searchList) {
    let listData;
    if (searchList.length) {
        listData = searchList.join("");
    } else {
        listData = "<li>" + input.value + "</li>";
    }
    resultsDiv.innerHTML = listData;
}