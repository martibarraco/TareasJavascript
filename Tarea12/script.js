function generatePassword(length) {
    if (length < 8) {
        console.log("La longitud mínima es 8 caracteres");
        return;
    }

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/"; // Caracteres permitidos
    let contraseña = "";
    
    // Generar la contraseña de forma aleatoria
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
    }
    
    return contraseña;
}
