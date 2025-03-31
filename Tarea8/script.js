function findTheOldest(people) {
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        // Si la persona no tiene "yearOfDeath", asumimos que sigue viva y tomamos el año actual
        const currentYear = new Date().getFullYear();
        
        const ageOldest = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
        const ageCurrent = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;

        return ageCurrent > ageOldest ? currentPerson : oldestPerson;
    });

    console.log(`La persona más vieja es:`, oldest);
    return oldest;
}

// Ejemplo de uso
const people = [
    { name: "Carly", yearOfBirth: 1942, yearOfDeath: 1970 },
    { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011 },
    { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941 },
    { name: "Alice", yearOfBirth: 1920, yearOfDeath: 2020 },
    { name: "Bob", yearOfBirth: 1950 } // Sin yearOfDeath, sigue vivo
];

findTheOldest(people); 
// Salida en consola: La persona más vieja es Alice (vivió 100 años) o Bob si sigue vivo.
