function removeFromArray(arreglo, item) {
    let resultado = arreglo.filter(elemento => elemento !== item);
    console.log(resultado);
}

// Ejemplo
removeFromArray([1, 2, 3, 4, 5], 3);  // [1, 2, 4, 5]
removeFromArray(["rojo", "azul", "verde"], "azul");  // ["rojo", "verde"]
