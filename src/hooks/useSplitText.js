export default function useSplitText(text = '') {
  const wordArray = text.split(' ');
  let charactersArray = [];

  for (const [i, word] of wordArray.entries()) {
    const characters = (word + (i === wordArray.length - 1 ? '' : ' ')).split(
      ''
    );

    for (const character of characters) {
      charactersArray.push(character);
    }
  }

  return { wordArray, charactersArray };
}
