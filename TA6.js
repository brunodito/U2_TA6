function convertToCelsius(temp){
    return Math.round(((temp - 32) * 5 / 9)* 10)/10 
}

function convertToFahrenheit(temp){
    return Math.round(((temp * 1.8 ) + 32)* 10)/10 
}

console.log(convertToCelsius(100))
console.log(convertToFahrenheit(100))
