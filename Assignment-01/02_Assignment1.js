function CelsiusToFahrenheit(celsius) {
    console.log(`${celsius}\u2103 is ${(celsius*1.8) + 32}\u2109`);
}
function FahrenheitToCelsius(fahrenheit) {
    console.log( `${fahrenheit}\u2109 is ${(fahrenheit-32) / 1.8}\u2103`);
}

CelsiusToFahrenheit(60);
FahrenheitToCelsius(45);