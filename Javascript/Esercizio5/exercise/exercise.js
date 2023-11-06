const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = {...person1};

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/* modificando l'oggetto `persona2`, anche l'oggetto` persona1` sarebbe modificato.
Perchè se non usiamo Object.assign o lo spreed operator ci stiamo riferendo allo stesso oggetto. */

// Modify the property `firstName` of the `person2` in "Simon".
