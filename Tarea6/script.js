function convertToCelsius(temp) {
    let celsius = (temp - 32) * 5 / 9;
    celsius = Math.round(celsius * 10) / 10; // Redondear a un decimal
    console.log(`${temp}°F es aproximadamente ${celsius}°C`);
    return celsius;
}

function convertToFahrenheit(temp) {
    let fahrenheit = (temp * 9 / 5) + 32;
    fahrenheit = Math.round(fahrenheit * 10) / 10; // Redondear a un decimal
    console.log(`${temp}°C es aproximadamente ${fahrenheit}°F`);
    return fahrenheit;
}

// Pruebas en la consola
convertToCelsius(100);  // 100°F es aproximadamente 37.8°C
convertToFahrenheit(37.8); // 37.8°C es aproximadamente 100°F
