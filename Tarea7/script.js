function getTheTitles(books) {
    const titles = books.map(book => book.title);
    console.log(titles);
    return titles;
}

// Ejemplo de uso
const books = [
    { title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' }
];

getTheTitles(books); 
// Salida en consola: ["El Señor de los Anillos", "1984", "Cien años de soledad", "Don Quijote de la Mancha"]
