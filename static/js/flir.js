const MyEnum = {
    SIDE_1: [
        { text: 'USB VIDEO MODE CONTROLS', onclick: 'USB_VIDEO_MODE_CONTROLS(this)', id: "USB_VIDEO_MODE_CONTROLS" },
        { text: 'ANALOG/CMOS CONTROLS', onclick: 'ANALOG_CMOS_CONTROLS(this)', id: "ANALOG_CMOS_CONTROLS" },
        { text: 'AGC CONTROL', onclick: 'AGC_CONTROL(this)', id: "AGC_CONTROL" },
        { text: 'ADVANCED', onclick: 'ADVANCED(this)', id: "ADVANCED" }
    ],

    SIDE_2: [
        { text: 'FFC CONTROLS', onclick: 'FFC_CONTROLS(this)', id: "FFC_CONTROLS" },
        { text: 'DYNAMIC RANGE CONTROL', onclick: 'DYNAMIC_RANGE_CONTROL(this)', id: "DYNAMIC_RANGE_CONTROL" },
        { text: 'CONFIGURATION CONTROLS', onclick: 'CONFIGURATION_CONTROLS(this)', id: "CONFIGURATION_CONTROLS" },
        { text: 'IMGAGE STATS CONTROLS', onclick: 'IMGAGE_STATS_CONTROLS(this)', id: "IMGAGE_STATS_CONTROLS" },
        { text: 'DETECTIVE PIXEL', onclick: 'DETECTIVE_PIXEL(this)', id: "DETECTIVE_PIXEL" },
        { text: 'SYNC & FRAME RATE', onclick: 'SYNC_FRAME_RATE(this)', id: "SYNC_FRAME_RATE" }
    ],

    SIDE_3: [
        { text: 'DIAGNOSTICS CONTROL', onclick: 'DIAGNOSTICS_CONTROL(this)', id: "DIAGNOSTICS_CONTROL" },
        { text: 'STATUS PANEL', onclick: 'STATUS_PANEL(this)', id: "STATUS_PANEL" },
        { text: 'OVERTEMP STATUS', onclick: 'OVERTEMP_STATUS(this)', id: "OVERTEMP_STATUS" }
    ],
    SIDE_4: [
        { text: 'MEDIA CONFIGURATION', onclick: 'MEDIA_CONFIGURATION(this)', id: "MEDIA_CONFIGURATION" },
    ],
    SIDE_5: [
        { text: 'CURRENT LENS', onclick: 'CURRENT_LENS(this)', id: "CURRENT_LENS" },
        { text: 'LENS GAIN CONTROL', onclick: 'LENS_GAIN_CONTROL(this)', id: "LENS_GAIN_CONTROL" },
        { text: 'SFFC CONTROLS', onclick: 'SFFC_CONTROLS(this)', id: "SFFC_CONTROLS" },
        { text: 'NVFFC CONTROLS', onclick: 'NVFFC_CONTROLS(this)', id: "NVFFC_CONTROLS" }
    ],
    SIDE_6: [
        { text: 'SYMBOLOGY ENABLE', onclick: 'SYMBOLOGY_ENABLE(this)', id: "SYMBOLOGY_ENABLE" },
        { text: 'SYMBOLOGY CONTROLS', onclick: 'SYMBOLOGY_CONTROLS(this)', id: "SYMBOLOGY_CONTROLS" },
        { text: 'SYSTEM SYMBOL CONTROLS', onclick: 'SYSTEM_SYMBOL_CONTROLS(this)', id: "SYSTEM_SYMBOL_CONTROLS" },
        { text: 'SPLASH SCREEN SETTINGS', onclick: 'SPLASH_SCREEN_SETTINGS(this)', id: "SPLASH_SCREEN_SETTINGS" }
    ],
    SIDE_7: [
        { text: 'RADIOMETRY ENABLE', onclick: 'ADIOMETRY_ENABLE(this)', id: "ADIOMETRY_ENABLE" },
        { text: 'SPOT METER ENABLE', onclick: 'SPOT_METER_ENABLE(this)', id: "SPOT_METER_ENABLE" },
        { text: 'TLINENEAR ENABLE', onclick: 'TLINENEAR_ENABLE(this)', id: "TLINENEAR_ENABLE" },
        { text: 'ENVIROMENTAL FACTORS', onclick: 'ENVIROMENTAL_FACTORS(this)', id: "ENVIROMENTAL_FACTORS" },
        { text: 'RADIOMETRY MODEL', onclick: 'RADIOMETRY_MODEL(this)', id: "RADIOMETRY_MODEL" },
        { text: 'RADIOMETRY STATUS', onclick: 'RADIOMETRY_STATUS(this)', id: "RADIOMETRY_STATUS" }

    ],
    SIDE_8: [
        { text: 'ISOTHERMS CONTROLS', onclick: 'ISOTHERM_CONTROLS(this)', id: "ISOTHERM_CONTROLS" },
        { text: 'ISOTHERMS REGIONS', onclick: 'ISOTHERMS_REGIONS(this)', id: "ISOTHERMS_REGIONS" },
    ]
};
function change(e) {
    $(".sideBtn").removeClass("active");
    $(e).addClass("active");
}

$(document).ready(function () {
    const imageAppearance = $('#imageAppearance');
    imageAppearance.addClass('active');
    const USB_VIDEO_MODE_CONTROLS = $("#USB_VIDEO_MODE_CONTROLS");
    USB_VIDEO_MODE_CONTROLS.addClass("active");

    $('.sideBtn').on('click', function () {
        const rowbarElement = $('.rowbar');
        $('.sideBtn').removeClass('active');
        $(this).addClass('active');
    });

    $('.sideBtn').on('click', function () {
        if ($(this).hasClass('active')) {
            console.log(this.id);
        }
    });
});

function side1() {
    const listItems = MyEnum.SIDE_1;
    addLiElements(listItems);
    attachClickEvent();
    $("#USB_VIDEO_MODE_CONTROLS").addClass("active");
    USB_VIDEO_MODE_CONTROLS()
}

function side2() {
    const listItems = MyEnum.SIDE_2;
    addLiElements(listItems);
    const rowbar = document.querySelector('rowbar');
    const ffc = document.querySelector("#FFC_CONTROLS");
    ffc.classList.add('active')
    FFC_CONTROLS()
}

function side3() {
    const listItems = MyEnum.SIDE_3;
    addLiElements(listItems);
    attachClickEvent();
    $("#DIAGNOSTICS_CONTROL").addClass("active");
    DIAGNOSTICS_CONTROL()
}
function side4() {
    const listItems = MyEnum.SIDE_4;
    addLiElements(listItems);
    attachClickEvent();
    $("#MEDIA_CONFIGURATION").addClass("active")
    MEDIA_CONFIGURATION()
}

function side5() {
    const listItems = MyEnum.SIDE_5;
    addLiElements(listItems);
    attachClickEvent();
    $("#CURRENT_LENS").addClass("active")
    CURRENT_LENS()
}

function side6() {
    const listItems = MyEnum.SIDE_6;
    addLiElements(listItems);
    attachClickEvent();
    $("#SYMBOLOGY_ENABLE").addClass("active")
    SYMBOLOGY_ENABLE()
}

function side7() {
    const listItems = MyEnum.SIDE_7;
    addLiElements(listItems);
    attachClickEvent();
    $("#ADIOMETRY_ENABLE").addClass("active")
    ADIOMETRY_ENABLE()
}

function side8() {
    const listItems = MyEnum.SIDE_8;
    addLiElements(listItems);
    attachClickEvent();
    $("#ISOTHERM_CONTROLS").addClass("active")
    ISOTHERM_CONTROLS()
}

function addLiElements(listItems) {
    const rowbarElement = $('.rowbar');
    rowbarElement.empty();
    $.each(listItems, function (index, item) {
        const liElement = $('<li>')
            .addClass('lii')
            .attr('id', item.id)
            .text(item.text)
            .attr('onclick', item.onclick);
        rowbarElement.append(liElement);
    });
}

function addActive() {
    console.log(2)
}

function handleItemClick(event) {
    const liiElements = $('.lii');
    if ($(event.target).hasClass('lii')) {
        liiElements.removeClass('active');
        $(event.target).addClass('active');
    }
}

function attachClickEvent() {
    const liiElements = $('.lii');
    liiElements.on('click', function (event) {
        liiElements.removeClass('active');
        $(this).addClass('active');
    });
}
