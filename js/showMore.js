var blockUlElements = document.getElementsByClassName("main__block__ul");
var blockButtons = document.getElementsByClassName("main__block__more");
var selector;
for (let i = 0; i < blockButtons.length; i++) {
    blockButtons[i].addEventListener("click", () => {
        blockUlElements[i].innerHTML = "";
        for (let j = 0; j < lists[i].length; j++) {
            blockUlElements[i].innerHTML += `<li><p onclick="setInBitrix(this)">${lists[i][j]}</p></li>`;
        }
        selector = blockUlElements[i].closest(".main__block__header").closest(".main__block").querySelector(".main__block__footer").querySelector(".main__block__more");
        selector.innerHTML = `<h4 class="main__block__h4">свернуть список</h4>
                                    <div class="main__block__more__down-arrow">
                                        <i class="arrow arrow-up"></i>
                                    </div>`;
        selector.addEventListener("click", function (e) {

            if (i === 13 || i === 15) {
                blockUlElements[i].innerHTML = `<li><p onclick="setInBitrix(this)">${lists[i][0]}</p></li>`;
            } else if (i !== 13 || i !== 15) {
                blockUlElements[i].innerHTML = `<li><p onclick="setInBitrix(this)">${lists[i][0]}</p></li><li><p onclick="setInBitrix(this)">${lists[i][1]}</p></li><li><p onclick="setInBitrix(this)">${lists[i][2]}</p></li>`;
            }
            this.innerHTML = `<h4 class="main__block__h4">развернуть весь список</h4>
                                    <div class="main__block__more__down-arrow">
                                        <i class="arrow arrow-down"></i>
                                    </div>`;
        });
    });
}

function setInBitrix(context) {
    document.querySelector(".b24-form-field-string").querySelector("input[type=string]").value = context.innerHTML;
    document.querySelector(".b24-form-field-string").querySelector("input[type=string]").classList.add("b24-form-control-not-empty");
    document.querySelector(".b24-form-control-alert-message").style.display = "none";
    document.querySelector(".bitrix-script-container").scrollIntoView();
}