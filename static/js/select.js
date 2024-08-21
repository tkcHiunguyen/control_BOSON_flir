class Dropdown {
    constructor(selector) {
        this.dropdown = document.querySelector(selector);
        this.dropdownSelect = this.dropdown.querySelector('.dropdown-select');
        this.dropdownList = this.dropdown.querySelector('.dropdown-list');
        this.dropdownItems = this.dropdown.querySelectorAll('.dropdown-list_item');
        this.select = this.dropdown.querySelector('.select');

        this.init();
    }

    init() {
        this.dropdownSelect.addEventListener('click', () => {
            this.dropdownList.classList.toggle('show-dropdown');
        });

        document.addEventListener('click', (event) => {
            if (!this.dropdownSelect.contains(event.target) && !this.dropdownList.contains(event.target)) {
                this.dropdownList.classList.remove('show-dropdown');
            }
        });

        this.dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                const value = item.innerHTML;
                console.log(value);
                this.select.innerHTML = value;
                this.dropdownList.classList.remove('show-dropdown');
            });
        });
    }
}

const video_device_select = new Dropdown('.video_device_select');
const postCollor = new Dropdown(".dropdown-list")

var checkbox = document.getElementById("square-toggle_usb");

// Lấy đối tượng div chứa dropdown
var dropdownContainer = document.querySelector(".video_device_select .dropdown-select");

var listDropdownContainer = document.querySelector(".video_device_select .dropdown-list");
if (checkbox.checked) {
    dropdownContainer.classList.remove("enable_dropdown");
    listDropdownContainer.classList.remove("hide")

}
else {
    dropdownContainer.classList.add("enable_dropdown");
    listDropdownContainer.classList.add("hide")
}

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        dropdownContainer.classList.remove("enable_dropdown");
        listDropdownContainer.classList.remove("hide")
    } else {
        dropdownContainer.classList.add("enable_dropdown");
        listDropdownContainer.classList.add("hide")
        video_device_select.select.innerHTML = ""
    }
});

const chosen = postCollor.select

const value_post_colorize = document.querySelector(".value_post-colorize")
if (chosen.innerHTML == "") {
    value_post_colorize.innerHTML = "N/A"

} else if (chosen.innerHTML == "Pre-AGC") {
    value_post_colorize.innerHTML = "Pre-AGC"
} else {
    value_post_colorize.innerHTML = "Post-Colorize"
}

postCollor.dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const value = item.innerHTML;
        value_post_colorize.innerHTML = value
    });
});