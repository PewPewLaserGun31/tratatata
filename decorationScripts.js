$(document).ready(function () {
    document.location.href = "#zatemnenie";
});

function CloseMenu(awakeButton) {
    $(awakeButton).parent().fadeOut(500, unwrapSquares);
}

function unwrapSquares() {
    let checkboxes = $(".checkb");
    let width = checkboxes.css("width");
    checkboxes.animate({
        height: width
    }, {
        duration: 1000
    });
    document.location.href = "#";
}


function ProgressBarAnimation(duration) {
    $(".progress-bar2").animate({
        width: 0
    }, {
        duration: duration
    });
}