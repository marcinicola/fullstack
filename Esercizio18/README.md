# Classes

Definire un metodo statico chiamato fromObject all'interno della classe Person che accetta un oggetto letterale come parametro e istanzia un oggetto Person.
persona di classe {
costruttore(nome, cognome) {
this.firstName = primoNome;
this.cognome = cognome;
}
}

const oggetto = {
nome: 'Mario',
cognome: 'Rossi'
};

const persona = Persona.daOggetto(oggetto);
console.log(persona.primoNome + " " + persona.cognome);