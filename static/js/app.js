function formCheckbox(label, id) {

    inputCheckbox = $('<input type="checkbox" class="square-toggle-checkbox" />')
    inputCheckbox.attr('id', id)

    maskCheckbox = $(`<label for="${id}" class="square-toggle-label ${id}" />`)

    formGroup = $('<div class="check-box" />')
    formGroup.append(`<div class="checkbox label">${label}</div>`)
    formGroup.append(inputCheckbox)
    formGroup.append(maskCheckbox)

    return formGroup
}

function formInput(label, id, placeholder, type = 'text', value = '', status = 'enable') {
    formGroup = $('<div class="form-group"></div>')
    formGroup.append(`<label for="${id}" class="form-label">${label}</label>`)
    if (status == 'enable') {
        formGroup.append(`<input type="${type}" id="${id}" name="${id}" placeholder="${placeholder}" value="${value}" class="form-control" required>`)
    } else {
        formGroup.append(`<input type="${type}" id="${id}" name="${id}" placeholder="${placeholder}" value="${value}" class="form-control" disabled>`)
    }

    return formGroup
}

function formLabel(label, id = '', value = '') {
    formGroup = $('<div class="form-group" />')
    formGroup.append(`<label class="form-label">${label}</label>`)
    formGroup.append(`<div class="form-value" id="${id}">${value}</div>`)
    return formGroup
}

function formSelectDisable(label) {
    formGroup = $('<div class="dropdown disable" />')

    dropLabel = $(`<div class="drop label">${label}</div>`)

    dropSelect = $('<div class="dropdown-select" />')
    dropSelect.append(`<span class="select"></span>`)

    formGroup.append(dropLabel, dropSelect)

    return formGroup
}

function formSelect(label = '', id = '', opts = []) {
    formGroup = $('<div class="dropdown" />')
    dropLabel = $(`<div class="drop label">${label}</div>`)
    dropList = $('<div class="dropdown-list"></div>')
    dropList.attr('id', id)
    opts.forEach(function (item) {
        formOption = $(`
            <div class="dropdown-list_item" value="${item}">${item}</div>`)
        formOption.on('click', function () {
            $(this).parent().parent().children('.select').text($(this).attr('value'))

        })
        dropList.append(formOption)
    })

    dropSelect = $('<div class="dropdown-select" />')
    dropSelect.append(`<span class="select">${opts[0]}</span>`)
    dropSelect.append('<i class="fa-solid fa-caret-down"></i>')
    dropSelect.append(dropList)
    dropSelect.on('click', function (event) {
        dropList = $(this).find('.dropdown-list')
        if (dropList.css('display') == 'block') {
            dropList.css('display', 'none')
        } else {
            dropList.css('display', 'block')
        }
        event.stopPropagation();
    })

    // Thêm sự kiện click cho toàn bộ tài liệu
    $(document).on('click', function () {
        dropList.css('display', 'none');
    });

    formGroup.append(dropLabel, dropSelect)
    return formGroup
}

function formSlide(label, id, value, min = 0, max = 100, step = 1) {
    formGroup = $('<div />')

    formText = $('<div class="input" />')
    inputLabel = $(`<label for="text${id}" class="label">${label}</label>`)
    inputText = $(`<input class="input_element" type="number" id="text${id}" value="${value}">`)
    formText.append(inputLabel, inputText)

    formBar = $('<div class="slide" />')
    inputBar = $(`<input id="slide${id}" class="slide_element" type="range" min="${min}" max="${max}" step="${step}" value="${value}">`)
    fillBar = $('<span class="bar" />')
    fillBar.append(`<span id="bar${id}" class="fill" style="width: ${value * 100 / max}%" />`)
    formBar.append(fillBar, inputBar)

    formGroup.append(formText, formBar)

    inputText.val(inputBar.val())

    inputBar.on('input', function () {
        $('#text' + id).val($(this).val());
        setBar($(this).val() * 100 / max)
    });

    inputText.on('input', function () {
        if ($(this).val() > max) {
            $('#slide' + id).val(max);
            $(this).val(max)
        } else {
            $('#slide' + id).val($(this).val());
        }

        setBar($(this).val() * 100 / max)
    });

    function setBar(x) {
        $('#bar' + id).css("width", x + "%")
    }

    return formGroup
}

function formInputNumber(label, id, value) {
    formText = $('<div class="input" />')
    inputLabel = $(`<label for="text${id}" class="label">${label}</label>`)
    inputText = $(`<input class="input_element" type="number" id="text${id}" value="${value}">`)
    formText.append(inputLabel, inputText)
    return formText
}
function formInputText(label, id, value) {
    formText = $('<div class="input" />')
    inputLabel = $(`<label for="text${id}" class="label">${label}</label>`)
    inputText = $(`<input class="input_text" type="text" value="${value}" disabled>`)
    formText.append(inputLabel, inputText)
    return formText;
}
function formButton(label, id) {
    formText = $('<div class="input" />')
    formBtn = $(`<input class="btn" type="button" id="${id}" value="${label}">`)
    formText.append(formBtn)
    return formText  
}

