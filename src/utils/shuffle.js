const shuffle = (array) => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Get random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
  return array;
};

export default shuffle;

// Or just use shuffle function from lodash but there's nothing much to do in this project, so re-inventing the wheel (⊙ˍ⊙)
