export default function ajax(method, url) {

    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else { // если всё прошло гладко, выводим результат
            alert(`Готово, ${xhr.response.length} байт успешно получено!`);
            return xhr.response;
        }
    };

    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            alert(`Получено ${event.loaded} из ${event.total} байт`);
        } else {
            alert(`Получаем ${event.loaded} байт...`); // если в ответе нет заголовка Content-Length
        }

    };

    xhr.onerror = function () {
        alert("Запрос не удался");
    };
}