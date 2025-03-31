function getSum(nums) {
    // Método reduce() para sumar todos los números
    const suma = nums.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(suma);
}
