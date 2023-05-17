// --------------------------------Is Relevant--------------------------------------------
// isRelevant(topics, paragraph) returns whether the paragraph contains any of the given topics.

// const isRelevant = (topics, paragraph) => {
//     // Set all letters to lower case.
//     let lowerParagraph = paragraph.toLowerCase();
//     paragraphArray = lowerParagraph.split(" ");
//     let topicsString = topics.join(" ");
//     lowerTopics = topicsString.toLowerCase();
//     let topicsArray = lowerTopics.split(" ");
//     // Check that the topic is included in the paragraph.
//     for (const topic of topicsArray) {
//         if (paragraphArray.includes(topic)) return true;
//     }

//     return false;
// }

// console.log(isRelevant(['cat', 'kitten'], "The quick brown fox jumps over the lazy dog"));
// console.log(isRelevant(['cat', 'Fox'], "The quick brown fox jumps over the lazy dog"));

// -------------------------------------About------------------------------------------------
// about(topics) returns a function that takes a sentence and returns whether that sentence is relevant to the given topics.

// const about = (topics) => (paragraph) => isRelevant(topics,paragraph);
// Code block is isRelevant() not used.
// {
//     let lowerParagraph = paragraph.toLowerCase();
//     paragraphArray = lowerParagraph.split(" ");
//     let topicsString = topics.join(" ");
//     lowerTopics = topicsString.toLowerCase();
//     let topicsArray = lowerTopics.split(" ");
//     // Check that the topic is included in the paragraph.
//     for (const topic of topicsArray) {
//         if (paragraphArray.includes(topic)) return true;
//     }

//     return false;
// }

// const aboutCats = about(["cat", "kitten", "cats"]);
// console.log(aboutCats("The quick brown fox jumps over the lazy dog."));
// console.log(aboutCats("The quick brown cat jumps over the lazy dog."));

// ------------------------Get Relevant Sentences----------------------------
// getRelevantSentences(criteriaFn, sentences) takes an array of sentences and returns only the sentences that meet certain criteria, which is determined by criteriaFn.

// criteriaFn is a function that takes a sentence and returns whether the sentence meets the criteria.

// const getRelevantSentences = (criteriaFn, sentences) => {
//     let answer = [];
//     // Iterate through sentences and check criteria
//     for (const sentence of sentences) {
//         // If criteria is met return sentence
//         if (criteriaFn(sentence)) {
//             answer.push(sentence);
//         }
//     }

//     return answer;
// }

// const aboutCats = about(["cat", "kitten", "cats"]);
// const sentences = [
//   "I have a pet cat.",
//   "I have a pet dog.",
//   "I don't have a pet.",
// ];

// console.log(getRelevantSentences(aboutCats, sentences)); // ["I have a pet cat."]
// console.log(getRelevantSentences((s) => s.length > 17, sentences)); // ["I don't have a pet."]

// -------------------Get Length Distance-------------------------------------------------
// getLengthDistance(s1, s2) returns the absolute difference in length between strings s1 and s2.

const getLengthDistance = (s1, s2) => {
  return Math.abs(s1.length - s2.length);
};

// console.log(getLengthDistance("goat", "whale")); // 1
// console.log(getLengthDistance("goat", "boat")); // 0
// console.log(getLengthDistance("whale", "goat")); // 1

// -----------------------Get Closest in Length-------------------------------------------------

const getClosestInLength = (words, word, limit) => {
  let answer = "";
  let minCount = Infinity;
  for (const element of words) {
    if (getLengthDistance(element,word) < minCount) {
      answer = element;
      minCount = getLengthDistance(element,word);
    }
  }
  if (minCount > limit) {
    return word;
  } else return answer;
}

// getClosestInLength(words, word, limit) will calculate the difference between the 
// length of each word in words and the length of word and return the word with the minimum difference, unless that 
// difference is greater than the limit, in which case word will be returned.

const words = ["hello", "bye", "goodbye"];
console.log(getClosestInLength(words, "hi", 3)); // "bye"
console.log(getClosestInLength(words, "hi", 0)); // "hi"

// ------------------------------------------Get Closest Word-----------------------------------
// getClosestWord(words, word, distanceFn, limit) returns the closest word in words to the given word, 
// where the distance between two words is calculated using the given distanceFn, unless the minimum distance 
// is greater than the limit, in which case word will be returned.

const distanceFn = getClosestInLength();
const getClosestWord = (words, word, distanceFn, limit) => {
  for (const element in words)
}

const words = ["bridge", "river", "bed", "fence"];
getClosestWord(words, "bye", getEditDistance, 10); // "bed"
getClosestWord(words, "plank", getEditDistance, 2); // "plank"