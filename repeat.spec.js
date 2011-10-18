require("./repeat.js");

describe("repeat", function() {
    it("repeats strings", function() {
        expect("abc".repeat(2)).toEqual("abcabc");
        expect("abc".repeat(0)).toEqual("");
    });
});
