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
    startTimer(590);
    leftBack.hidden = false;
    leftCache.hidden = false;
    startBackground.hidden = true;
}

function actualPlayerFunction() {
    var Player;
    leftBack.hidden ? Player = "PlayerOne" : Player = "PlayerTwo"
    return Player;
}

function GetValueDice(Player) {
    var PlayerDice = document.getElementsByClassName("" + Player);
    PlayerDice = PlayerDice[0].firstElementChild.children;
    var allNumber = [];

    for (let i = 0; i < PlayerDice.length; i++) {
        var number = PlayerDice[i].firstElementChild.firstElementChild.children[1].classList.value;
        allNumber.push(number)
    }
    console.log(Player + " : " + allNumber)
}