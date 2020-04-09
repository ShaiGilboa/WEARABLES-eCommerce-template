const modifyString = (part, whole) => {
  const indexOfPart = whole.toLowerCase().indexOf(part);
  const part1 = whole.slice(0,indexOfPart)
  const part2 = whole.slice(indexOfPart+part.length)
  const modification = [part1, part2]
  return modification;
}

export const typeaheadSuggestion = (input, totalOptions) => {
  const suggestions1 = [];
  totalOptions.forEach(option => {
    if(option.name.toLowerCase().includes(input.toLowerCase())) suggestions1.push({id: option.id, name: option.name});
  });
  const suggestions2 = [];
  suggestions1.forEach(suggestion=>suggestions2.push({id: suggestion.id, parts: modifyString(input, suggestion.name)}))
  return suggestions2;
}
