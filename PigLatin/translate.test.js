const translator = require("./translate");
describe("translate function tests", () => {
  const testCases = [
    ["apple", "appleway"],
    ["elephant", "elephantway"],
    ["indigo", "indigoway"],
  ];
  test.each(testCases)("given %p as an input, return %p", (input, expected) => {
    const result = translator(input);
    expect(result).toBe(expected);
  });
});

test("translates a word starting with a vowel", () => {
  //arrange act assert
  let testWord = translator("apple");
  expect(testWord).toBe("appleway");
});
test("words starting with vowels, capital vowel", () => {
  //arrange act assert
  let testWord = translator("Eden");
  expect(testWord).toBe("Edenway");
});
test("words start with consonant, first vowel a", () => {
  //arrange act assert
  let testWord = translator("Tank");
  expect(testWord).toBe("ankTay");
});
test("words start with consonant, first vowel e", () => {
  //arrange act assert
  let testWord = translator("Den");
  expect(testWord).toBe("enDay");
});
test("words start with consonant, first vowel i", () => {
  //arrange act assert
  let testWord = translator("Pig");
  expect(testWord).toBe("igPay");
});
test("words start with consonant, first vowel o", () => {
  //arrange act assert
  let testWord = translator("Mouse");
  expect(testWord).toBe("ouseMay");
});
test("words start with consonant, first vowel u", () => {
  //arrange act assert
  let testWord = translator("Pump");
  expect(testWord).toBe("umpPay");
});
test("words start with consonant, second letter consonant", () => {
  //arrange act assert
  let testWord = translator("drag");
  expect(testWord).toBe("agdray");
});
test("words start with consonant, third letter consonant", () => {
  //arrange act assert
  let testWord = translator("strike");
  expect(testWord).toBe("ikestray");
});
