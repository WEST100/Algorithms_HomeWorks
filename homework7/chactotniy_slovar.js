
function slovar(text) {
  let newArr = text.split('');
  console.log(newArr);
  let count = [];
  for (let i = 0; i < newArr.length; i++) {
    let symbol = newArr[i];

    if (count[symbol]) {
      count[symbol]++;
    } else {
      count[symbol] = 1;
    }
    
  }
  return count
}

console.log(slovar('pppttt')); 