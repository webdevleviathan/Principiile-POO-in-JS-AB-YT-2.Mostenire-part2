class Persoana {
    #nume;
    #prenume;
    #dataNasterii;
    
    constructor(nume, prenume, data) {
        if (nume === undefined || prenume === undefined || data === undefined) {
            throw new Error('Error, Invalid arguments');
        }
        this.#nume = nume;
        this.#prenume = prenume;
        this.#dataNasterii = data;
    }
    
    get nume() {
        return this.#nume;
    }
    
    get prenume() {
        return this.#prenume;
    }
    
    get dataNasterii() {
        return this.#dataNasterii;
    }
    
    salut() {
        console.log(`Salut, ma numesc ${this.#nume} ${this.#prenume}, 'inginer'`);
    }
}

class Angajat extends Persoana {
    #salariu;
    
    constructor(nume, prenume, data, meserie) {
        super(nume, prenume, data);
        this.meserie = meserie;
        this.#salariu = 100;
    }
    
    get salariu() {
        return this.#salariu;
    }
    
    salut() {
        console.log(`Salut, ma numesc ${this.nume} ${this.prenume} si sunt ${this.meserie}`);
    }
}

const a = new Angajat('Leviathan', 'Xan', new Date('1999/05/02'), 'inginer');
console.log(a.nume, a.prenume);
a.salut();

const p = new Persoana('Ionescu', 'Diana', new Date('1998/02/02'));
p.salut();

// Public: Accessible from anywhere.
// Private: Accessible only within the class where it is declared.
// Protected: Accessible within the class where it is declared and its subclasses.
