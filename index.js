var leftBack = document.getElementById('backgroundLeft');
var rightBack = document.getElementById('backgroundRight');
var leftCache = document.getElementById('cacheLeft');
var rightCache = document.getElementById('cacheRight');
var startBackground = document.getElementById('startBackground');

$(document).ready(function() {
    leftBack.hidden = true;
    rightBack.hidden = true;
    leftCache.hidden = true;
    rightCache.hidden = true;

    $('#StartModal').modal({
        keyboard: false,
        backdrop: 'static'
    })
    $('#StartModal').modal('show')
});

function closeModalAndPlay() {
    $('#StartModal').modal('hide');
    startTimer(5);
    leftBack.hidden = false;
    leftCache.hidden = false;
    startBackground.hidden = true;
}