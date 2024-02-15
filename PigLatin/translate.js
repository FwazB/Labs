function translator(sentence) {
  var words = sentence.split(" ");
  var pigLatinWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var firstVowelIndex = -1;

    if (
      word[0] === "a" ||
      word[0] === "e" ||
      word[0] === "i" ||
      word[0] === "o" ||
      word[0] === "u" ||
      word[0] === "A" ||
      word[0] === "E" ||
      word[0] === "I" ||
      word[0] === "O" ||
      word[0] === "U"
    ) {
      pigLatinWords.push(word + "way");
    } else {
      for (var j = 0; j < word.length; j++) {
        if (
          word[j] === "a" ||
          word[j] === "e" ||
          word[j] === "i" ||
          word[j] === "o" ||
          word[j] === "u" ||
          word[j] === "A" ||
          word[j] === "E" ||
          word[j] === "I" ||
          word[j] === "O" ||
          word[j] === "U"
        ) {
          firstVowelIndex = j;
          break;
        }
      }
      if (firstVowelIndex !== -1) {
        var start = word.slice(firstVowelIndex);
        var end = word.slice(0, firstVowelIndex);
        pigLatinWords.push(start + end + "ay");
      } else {
        pigLatinWords.push(word);
      }
    }
  }

  return pigLatinWords.join(" ");
}

module.exports = translator;
