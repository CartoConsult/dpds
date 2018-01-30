//login screen
$("#show-login").on('click', function (event) {
    $(".carto-info").addClass("carto-info-hide");
    window.setTimeout(function () { $(".login-form").fadeIn(); }, 1000);  
});


//contact form
var modal = document.getElementById('myModal');

$(".btn-contact").on('click', function (event) {
    modal.style.display = "block";
});

$(".close").on('click', function (event) {
    modal.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

