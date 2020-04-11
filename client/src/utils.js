
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

const modifyPriceArr = (priceArr) => {
  return priceArr.map(priceItem => ({
    priceNumber: priceItem.price.slice(1)*100,
    quantity: priceItem.quantity,
    }))
}

export const totalAmount = (items, itemsId) => {
  const priceArr = itemsId.map(id=>({
    price: items[id].price,
    quantity: items[id].quantity,
    }));
  if (priceArr.length) {
    const modifiedPriceArr = modifyPriceArr(priceArr);
    const totalSum = modifiedPriceArr.reduce((temporarySum, priceItem) => temporarySum + (priceItem.priceNumber*priceItem.quantity), 0)
    return totalSum/100
  } else return -1;
}