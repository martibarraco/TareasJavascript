function sumAll(a, b) {
    let suma = 0;
    
    // Asegurar que a sea el menor y b el mayor
    let inicio = Math.min(a, b);
    let fin = Math.max(a, b);
    
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    
    console.log(suma);
}

// Ejemplo de uso
sumAll(1, 5);   // Imprime: 15 (1+2+3+4+5)
sumAll(3, 7);   // Imprime: 25 (3+4+5+6+7)
sumAll(10, 5);  // Imprime: 45 (5+6+7+8+9+10)
