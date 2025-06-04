function WordCounter(text) {
  let lowerText = text.toLowerCase();
  let wordMap = {};
  let words = lowerText.split(" ");

  for (let word of words)
    word in wordMap ? wordMap[word]++ : (wordMap[word] = 1);
  return wordMap;
}

const text = "hello my name name name is abhishek rai";
console.log(WordCounter(text));
