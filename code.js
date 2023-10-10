function Copy(elem) {
    //поиск элемента с выбранным id
    var textToCopy = document.getElementById(elem);
    //проверка на то, был ли у пользователя диапозон выбора текста
    var currentRange;
    //если есть -> сохранить
    if (document.getSelection().rangeCount > 0) {
        currentRange = document.getSelection().getRangeAt(0);
        window.getSelection().removeRange(currentRange);
    }
    //иначе -> ничего не было выбрано
    else {
        currentRange = false;
    }
    //создание диапозона выбора
    var CopyRange = document.createRange();
    //выборка элемента, откда хотим скопировать текст
    CopyRange.selectNode(textToCopy);
    //выделение текста
    window.getSelection().addRange(CopyRange);
    //копирование текста
    document.execCommand("copy");
    //удаление диапозона
    window.getSelection().removeRange(CopyRange);
    //возвращение старого диапозона
    if (currentRange) {
        window.getSelection().addRange(currentRange);
    }
    alert("Вы успешно скопировали промокод!")
}
