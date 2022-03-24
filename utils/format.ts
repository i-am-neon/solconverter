
export const formatNumber = (num: number): string => {
    if (num < 0.000001 && num > 0) {
      let digitsToAdd = 0;
      const sciNotationList = num.toExponential().split('-');
      const numDigitsFromSciNotation = sciNotationList[1]
      const protoNumber = sciNotationList[0].slice(0, -1); // take off the 'e' at the end
      if (protoNumber.includes('.')) {
        digitsToAdd = protoNumber.split('.')[1].length;
      }
      const numDigits = +numDigitsFromSciNotation + +digitsToAdd;
      return Number(num).toFixed(numDigits);
    }
    return num.toString()
  }