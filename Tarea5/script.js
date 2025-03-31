function leapYears(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Ejemplo de uso:
leapYears(2024); // true
leapYears(1900); // false
leapYears(2000); // true
leapYears(2023); // false
