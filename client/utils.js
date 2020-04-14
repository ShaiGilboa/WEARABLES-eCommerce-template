
const modifyString = (part, whole) => {
  const indexOfPart = whole.toLowerCase().indexOf(part);
  const part1 = whole.slice(0,indexOfPart)
  const part2 = whole.slice(indexOfPart+part.length)
  const modification = [part1, part2]
  return modification;
}
// need to add the image tp be sent back
export const typeaheadSuggestion = (input, totalOptions) => {
  const suggestions1 = [];
  totalOptions.forEach(option => {
    if(option.name.toLowerCase().includes(input.toLowerCase())) suggestions1.push({
      id: option.id,
      name: option.name,
      });
  });
  const suggestions2 = [];
  suggestions1.forEach(suggestion=>suggestions2.push({
    id: suggestion.id,
    parts: modifyString(input, suggestion.name), //returns an array with 2 indexes: 1-everything in the 'name' string BEFORE the input. 
    // 2 -everything in the 'name' string AFTER the input.
    }))
  return suggestions2;
}

const modifyPriceArr = (priceArr) => {
  return priceArr.map(priceItem => ({
    priceNumber: priceItem.price.slice(1)*100, // eliminates the '$', and multiplies by 100 to get rid of the decimal point.
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
    const totalSum = modifiedPriceArr.reduce((temporarySum, priceItem) => temporarySum + (priceItem.priceNumber*priceItem.quantity), 0) // calculates the sum, multiplying each price in the quantity
    return totalSum/100; // need to divide by 100, because we multiplied by 100
  } else return -1; // if there is a problem, returns -1
}

export const validateString = (string) => {
  if(typeof string === 'string' && string.length>0){
    return true;
  } else {
    return false;
  }
}

export const validateEmail = (email) => {
  if(email.includes('@',1) && email.includes('.',3)) return true;
  return false;
}

