var source = document.getElementById('source');
var text = document.getElementById('text');
var add = document.getElementById('add');

// Массив в который необходимо добавлять элементы
var arr = [];

add.onclick = function() {
    // у массива есть метод добавления элемента push
    // значение поля ввода можно получить так text.value

    // Тут нужно написать код - добавить значение поля ввода в массив как элемент

    // этот код не трогать (он отображает массив в элементе source)
    source.innerHTML = JSON.stringify(arr, null, 4);
};