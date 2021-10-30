$(document).ready(function () {
    $('#demo4').scrollbox({
        direction: 'h',
        switchItems: 50,
        distance: 670
    });
});

let modal = document.getElementById("my_modal");
let btn001 = document.getElementById("btn_modal_window-001");
let btn002 = document.getElementById("btn_modal_window-002");
let btn003 = document.getElementById("btn_modal_window-003");
let btn004 = document.getElementById("btn_modal_window-004");
let btn005 = document.getElementById("btn_modal_window-005");
let btn006 = document.getElementById("btn_modal_window-006");
let span = document.getElementsByClassName("close_modal_window")[0];

btn001.onclick = function () {
    modal.style.display = "block";
}
btn002.onclick = function () {
    modal.style.display = "block";
}
btn003.onclick = function () {
    modal.style.display = "block";
}
btn004.onclick = function () {
    modal.style.display = "block";
}
btn005.onclick = function () {
    modal.style.display = "block";
}
btn006.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}