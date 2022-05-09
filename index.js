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
    startTimer(5, false);
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
    var returnValue = []

    for (let i = 0; i < PlayerDice.length; i++) {
        var number = PlayerDice[i].firstElementChild.firstElementChild.children[1].classList.value;
        allNumber.push(number)
    }
    returnValue.push(Player, allNumber);
    VerificationForGrille(returnValue);
}

function VerificationForGrille(_value) {
    var valueNumber = [];
    for (let i = 0; i < _value[1].length; i++) {
        var number = 0;
        switch (_value[1][i]) {
            case 'one':
                number = 1;
                break;
            case 'two':
                number = 2;
                break;
            case 'three':
                number = 3;
                break;
            case 'four':
                number = 4;
                break;
            case 'five':
                number = 5;
                break;
            case 'six':
                number = 6;
                break;
        }
        valueNumber.push(number);
    }
    var value = [_value[0], valueNumber];

    var _PossibleCase = [
        ["One", OneValue(value[1])],
        ["Two", TwoValue(value[1])],
        ["Three", ThreeValue(value[1])],
        ["Four", FourValue(value[1])],
        ["Five", FiveValue(value[1])],
        ["Six", SixValue(value[1])],
        ["Chance", Chance(value[1])],
        ["Brelan", Brelan(value[1])],
        ["PetiteSuite", PetiteSuite(value[1])],
        ["GrandeSuite", GrandeSuite(value[1])],
        ["Full", Full(value[1])],
        ["Carre", Carre(value[1])],
        ["Yam", Yam(value[1])]
    ]
    var PossibleCase = [];

    for (let i = 0; i < _PossibleCase.length; i++) {
        if (_PossibleCase[i][1] == true || Number.isInteger(_PossibleCase[i][1])) {
            PossibleCase.push(_PossibleCase[i]);
        }
    }
    console.log(PossibleCase);
    var LastValue = [PossibleCase, value[0]];

    var TableButton = ["CarrePlayerTwoButton", "BrelanPlayerTwoButton", "PetiteSuitePlayerTwoButton", "GrandeSuitePlayerTwoButton", "FullPlayerTwoButton", "YamPlayerTwoButton", "ChancePlayerTwoButton", "OnePlayerTwoButton", "TwoPlayerTwoButton", "ThreePlayerTwoButton", "FourPlayerTwoButton", "FivePlayerTwoButton", "SixPlayerTwoButton"];
    var TableInput = ["CarreInputPlayerTwo", "BrelanInputPlayerTwo", "PetiteSuiteInputPlayerTwo", "GrandeSuiteInputPlayerTwo", "FullInputPlayerTwo", "YamInputPlayerTwo", "ChanceInputPlayerTwo", "OneInputPlayerTwo", "TwoInputPlayerTwo", "ThreeInputPlayerTwo", "FourInputPlayerTwo", "FiveInputPlayerTwo", "SixInputPlayerTwo"];
    var TableDivVal = ["BrelanPointPlayerTwo", "PetiteSuitePointPlayerTwo", "GrandeSuitePointPlayerTwo", "FullPointPlayerTwo", "CarrePointPlayerTwo", "YamPointPlayerTwo", "ChancePointPlayerTwo", "OnePointPlayerTwo", "TwoPointPlayerTwo", "ThreePointPlayerTwo", "FourPointPlayerTwo", "FivePointPlayerTwo", "SixPointPlayerTwo"];

    for (let i = 0; i < TableButton.length; i++) {
        var toHidden = TableButton[i];
        toHidden = document.getElementById(toHidden);
        toHidden.hidden = true;
    }
    for (let i = 0; i < TableInput.length; i++) {
        var toHidden = TableInput[i];
        toHidden = document.getElementById(toHidden);
        toHidden.value = 0;
    }
    for (let i = 0; i < TableDivVal.length; i++) {
        var toHidden = TableDivVal[i];
        toHidden = document.getElementById(toHidden);
        if (toHidden.classList[1] != "isChoosen")
            toHidden.textContent = "";
    }
    for (let i = 0; i < LastValue[0].length; i++) {
        var toChangePoint = document.getElementById(LastValue[0][i][0] + 'Point' + LastValue[1]);
        var toChangeButton = document.getElementById(LastValue[0][i][0] + LastValue[1] + "Button");
        var toChangeInput = document.getElementById(LastValue[0][i][0] + "Input" + LastValue[1]);

        if (toChangePoint.classList[1] != "isChoosen") {
            toChangeButton.hidden = false;
            toChangeInput.value = LastValue[0][i][1];
            if (toChangePoint.textContent == "") toChangePoint.textContent = LastValue[0][i][1];
        }
    }
    TableValue = LastValue;
}

function Brelan(_value) {
    var Occurence = [];
    for (let i = 0; i < _value.length; i++) {
        var count = 0;
        for (let y = 0; y < _value.length; y++) {
            if (_value[i] == _value[y]) count += 1;
        }
        if (count >= 3) Occurence.push(_value[i]);
    }
    if (Occurence.length >= 3) {
        var total = 0;
        for (let i = 0; i < Occurence.length; i++) total += Occurence[i];
        return total;
    } else return false;
}

function PetiteSuite(_value) {
    _value.sort();
    var Occurence = [];
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] != 5 || _value[i] != 6 || _value[i] != 4) {
            if (_value.includes(_value[i] + 1) && _value.includes(_value[i] + 2) && _value.includes(_value[i] + 3)) Occurence.push(_value[i]);
        }
    }
    if (Occurence.length != 0) return 20;
    else return false;
}

function GrandeSuite(_value) {
    _value.sort();
    var Occurence = [];
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] == 1 || _value[i] == 2) {
            if (_value.includes(_value[i] + 1) && _value.includes(_value[i] + 2) && _value.includes(_value[i] + 3) && _value.includes(_value[i] + 4)) Occurence.push(_value[i]);
        }
    }
    if (Occurence.length != 0) return 40;
    else return false;
}

function Full(_value) {
    var Occurence = [];
    for (let i = 0; i < _value.length; i++) {
        var count = 0;
        for (let y = 0; y < _value.length; y++) {
            if (_value[i] == _value[y]) count += 1;
        }
        if (count >= 3) Occurence.push(_value[i]);
    }
    if (Occurence.length == 3) {
        for (let i = 0; i < Occurence.length; i++) {
            var Index = _value.indexOf(Occurence[i]);
            _value.splice(Index, 1);
        }
        if (_value[0] == _value[1]) return 25;
        else return false;
    } else return false;
}

function Carre(_value) {
    var Occurence = [];
    for (let i = 0; i < _value.length; i++) {
        var count = 0;
        for (let y = 0; y < _value.length; y++) {
            if (_value[i] == _value[y]) count += 1;
        }
        if (count >= 4) Occurence.push(_value[i]);
    }
    if (Occurence.length >= 4) {
        var total = 0;
        for (let i = 0; i < Occurence.length; i++) total += Occurence[i];
        return total;
    } else return false;
}

function Yam(_value) {
    var Occurence = [];
    for (let i = 0; i < _value.length; i++) {
        var count = 0;
        for (let y = 0; y < _value.length; y++) {
            if (_value[i] == _value[y]) count += 1;
        }
        if (count == 5) Occurence.push(_value[i]);
    }
    if (Occurence.length == 5) return 50;
    else return false;
}

function Chance(_value) {
    var total = 0;
    for (let i = 0; i < _value.length; i++) total += _value[i];
    return total;
}

function OneValue(_value) {
    var total = 0;
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] == 1) total += _value[i];
    }
    if (total == 0) return false;
    else return total;
}

function TwoValue(_value) {
    var total = 0;
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] == 2) total += _value[i];
    }
    if (total == 0) return false;
    else return total;
}

function ThreeValue(_value) {
    var total = 0;
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] == 3) total += _value[i];
    }
    if (total == 0) return false;
    else return total;
}

function FourValue(_value) {
    var total = 0;
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] == 4) total += _value[i];
    }
    if (total == 0) return false;
    else return total;
}

function FiveValue(_value) {
    var total = 0;
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] == 5) total += _value[i];
    }
    if (total == 0) return false;
    else return total;
}


function SixValue(_value) {
    var total = 0;
    for (let i = 0; i < _value.length; i++) {
        if (_value[i] == 6) total += _value[i];
    }
    if (total == 0) return false;
    else return total;
}



function AddToTable(name, player) {
    var getDiv = document.getElementById(name + "Point" + player)

    getDiv.style.opacity = 1;
    getDiv.classList.add("isChoosen");

    startTimer(0, true);
    clearInterval(ticker);
    var TableButton = ["CarrePlayerTwoButton", "BrelanPlayerTwoButton", "PetiteSuitePlayerTwoButton", "GrandeSuitePlayerTwoButton", "FullPlayerTwoButton", "YamPlayerTwoButton", "ChancePlayerTwoButton", "OnePlayerTwoButton", "TwoPlayerTwoButton", "ThreePlayerTwoButton", "FourPlayerTwoButton", "FivePlayerTwoButton", "SixPlayerTwoButton"];
    for (let i = 0; i < TableButton.length; i++) {
        var toHidden = TableButton[i];
        toHidden = document.getElementById(toHidden);
        toHidden.hidden = true;
    }
    var TableDivVal = ["BrelanPointPlayerTwo", "PetiteSuitePointPlayerTwo", "GrandeSuitePointPlayerTwo", "FullPointPlayerTwo", "CarrePointPlayerTwo", "YamPointPlayerTwo", "ChancePointPlayerTwo", "OnePointPlayerTwo", "TwoPointPlayerTwo", "ThreePointPlayerTwo", "FourPointPlayerTwo", "FivePointPlayerTwo", "SixPointPlayerTwo"];
    for (let i = 0; i < TableDivVal.length; i++) {
        var toHidden = TableDivVal[i];
        toHidden = document.getElementById(toHidden);
        if (toHidden.classList[1] != "isChoosen")
            toHidden.textContent = "";
    }
}