/**
 * @jest-environment jsdom
 */

const OneValue = require("..");
const TwoValue = require("..");
const ThreeValue = require("..");
const FourValue = require("..");
const FiveValue = require("..");
const SixValue = require("..");

// VERIFICATION VALUE EGALE A 1 //
test("OneValue", () => {
    for (let i = 0; i < 500; i++) {
        var Table = [];
        for (let y = 0; y < 4; y++) {
            var r = Math.floor(Math.random() * 7);
            Table.push(r);
        }
        var Test_OneValue = OneValue(Table);
        var occurence = Table.filter(x => x == 1).length;
        occurence *= 1;
        occurence = occurence == 0 ? false : occurence;
        expect(Test_OneValue).toBe(occurence)
    }
})

// VERIFICATION VALUE EGALE A 2 //
test("TwoValue", () => {
    for (let i = 0; i < 500; i++) {
        var Table = [];
        for (let y = 0; y < 4; y++) {
            var r = Math.floor(Math.random() * 7);
            Table.push(r);
        }
        var Test_TwoValue = TwoValue(Table);
        var occurence = Table.filter(x => x == 2).length;
        occurence *= 2;
        occurence = occurence == 0 ? false : occurence;
        expect(Test_TwoValue).toBe(occurence)
    }
})

// VERIFICATION VALUE EGALE A 3 //
test("ThreeValue", () => {
    for (let i = 0; i < 500; i++) {
        var Table = [];
        for (let y = 0; y < 4; y++) {
            var r = Math.floor(Math.random() * 7);
            Table.push(r);
        }
        var Test_ThreeValue = ThreeValue(Table);
        var occurence = Table.filter(x => x == 3).length;
        occurence *= 3;
        occurence = occurence == 0 ? false : occurence;
        expect(Test_ThreeValue).toBe(occurence)
    }
})

// VERIFICATION VALUE EGALE A 4 //
test("FourValue", () => {
    for (let i = 0; i < 500; i++) {
        var Table = [];
        for (let y = 0; y < 4; y++) {
            var r = Math.floor(Math.random() * 7);
            Table.push(r);
        }
        var Test_FourValue = FourValue(Table);
        var occurence = Table.filter(x => x == 4).length;
        occurence *= 4;
        occurence = occurence == 0 ? false : occurence;
        expect(Test_FourValue).toBe(occurence)
    }
})

// VERIFICATION VALUE EGALE A 5 //
test("FiveValue", () => {
    for (let i = 0; i < 500; i++) {
        var Table = [];
        for (let y = 0; y < 4; y++) {
            var r = Math.floor(Math.random() * 7);
            Table.push(r);
        }
        var Test_FiveValue = FiveValue(Table);
        var occurence = Table.filter(x => x == 5).length;
        occurence *= 5;
        occurence = occurence == 0 ? false : occurence;
        expect(Test_FiveValue).toBe(occurence)
    }
})

// VERIFICATION VALUE EGALE A 6 //
test("SixValue", () => {
    for (let i = 0; i < 500; i++) {
        var Table = [];
        for (let y = 0; y < 4; y++) {
            var r = Math.floor(Math.random() * 7);
            Table.push(r);
        }
        var Test_SixValue = SixValue(Table);
        var occurence = Table.filter(x => x == 6).length;
        occurence *= 6;
        occurence = occurence == 0 ? false : occurence;
        expect(Test_SixValue).toBe(occurence)
    }
})