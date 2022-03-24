
export const formatNumber = (num: number, isAtomicUnit: boolean): string => {

    // Atomic unit cannot be less than 1
    if (isAtomicUnit && num < 1) {
        return '';
    }

    // Remove scientific notation in input field
    if (num < 0.000001 && num > 0) {
        return removeScientificNotation(num);
    }
    return num.toString()
}

const removeScientificNotation = (num: number): string => {
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