function addition(numOne, numTwo) {
    console.log(numOne, numTwo)
    let result;
    if (numOne == undefined || numTwo == undefined){
        result = 'Addition must have two arguments'
    }else if (isNaN(numOne) || isNaN(numTwo)){
        result = 'Arguments must be numbers'
    } else {
        result = numOne + numTwo;
    }
    
    return result;
}

module.exports = addition