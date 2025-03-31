function duplicates(nums) {
    // Almacenar los números únicos y un contador para duplicados
    const elementosUnicos = new Set();
    let contadorDuplicados = 0;

    // Filtrar los números duplicados
    nums.forEach(num => {
        if (elementosUnicos.has(num)) {
            contadorDuplicados += 1;
        } else {
            elementosUnicos.add(num);
        }
    });

    // Imprimir la cantidad de duplicados
    console.log(contadorDuplicados);
}
