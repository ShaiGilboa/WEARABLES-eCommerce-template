const modifyString = (part, whole) => {
  const indexOfPart = whole.toLowerCase().indexOf(part);
  const part1 = whole.slice(0,indexOfPart)
  const part2 = whole.slice(indexOfPart+part.length)
  const modification = [part1, part2]
  console.log('mod',modification)
  return modification;
}

export const typeaheadSuggestion = (input, totalOptions) => {
  const suggestions1 = [];
  totalOptions.forEach(option => {
    if(option.name.toLowerCase().includes(input.toLowerCase())) suggestions1.push(option.name);
  });
  const suggestions2 = [];
  suggestions1.forEach(suggestion=>suggestions2.push(modifyString(input, suggestion)))
  console.log('sug',suggestions2)
  return suggestions2;
}
