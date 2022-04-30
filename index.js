"use strict";

(function() {
    var _faceClasses = ["one", "two", "three", "four", "five", "six"],
        _diceRow = getElement(".dice-row"),
        _dieTemplate,
        _spinners,
        _faces;

    function init() {
        _spinners = getElements(".spin");
        _faces = getElements("[data-die-face]");
    }

    function createDie() {
        var template = _dieTemplate || getElement(".die-container");
        var die = template.cloneNode(true);

        var spinners = getElements(".spin", die);
        alterElements(spinners, function(x) {
            var rnd = Math.random();
            /*
            var rollCenter = 35 + Math.floor(rnd * 20);
            if(rollCenter > 45) { rollCenter += 10; }
            x.style.transformOrigin = rollCenter+'% '+rollCenter+'%';
            */
            x.parentElement.style.transform =
                "rotate(" + 90 * Math.floor(rnd * 4) + "deg)";

            if (rnd > 0.5) {
                x.classList.toggle("go");
            }
        });

        return die;
    }

    function roll() {
        //console.log(/*getTime(), dieIndex+1,*/ _spinners.css('transform'));
        alterElements(_spinners, function(x) {
            x.classList.toggle("go");
        });
        alterElements(_faces, function(x) {
            var dieIndex = Math.floor(Math.random() * 6);
            x.setAttribute("class", _faceClasses[dieIndex]);
        });
    }

    function addDie() {
        _diceRow.appendChild(createDie());
        init();
    }

    function removeDie() {
        var allDice = getElements(".die-container");
        if (allDice.length > 1) {
            allDice[allDice.length - 1].remove();
            init();
        }
    }

    getElement("#dice-container").onclick = roll;
    getElement("#add-die").onclick = addDie;
    getElement("#remove-die").onclick = removeDie;

    _dieTemplate = createDie();
    init();
    roll();

    //Tools...
    function getElement(selector, context) {
        return (context || document).querySelector(selector);
    }

    function getElements(selector, context) {
        var elms = (context || document).querySelectorAll(selector);
        return Array.prototype.slice.call(elms);
    }

    function alterElements(elms, work) {
        elms.forEach(work);
    }

    function getTime() {
        //http://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js
        var date = new Date();
        //"15:09:18 GMT+0200 (W. Europe Summer Time)"
        var time = date.toTimeString();
        time = time.split(" ")[0];

        return time;
    }
    //IE <Edge...
    if (!("remove" in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
})();