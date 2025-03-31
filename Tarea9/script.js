function getOdds(nums) {
    const oddNumbers = nums.filter(num => num % 2 !== 0);
    console.log("Números impares:", oddNumbers);
    return oddNumbers;
}

// Ejemplo 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30];

getOdds(numbers);
