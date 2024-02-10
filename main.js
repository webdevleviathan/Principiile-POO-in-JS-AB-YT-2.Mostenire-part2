function Persoana(nume, prenume){
    this.nume = nume;
    this.prenume = prenume;
}

Persoana.prototype.salut = function(){
    console.log(`salut. ma numesc ${this.name} $this.prenume`);
};

function Angajat(nume, prenume, meserie){
    Persoana.call(this, nume, prenume);
    this.meserie = meserie;
}

Angajat.prototype = Object.create(Persoana.prototype);

Angajat.prototype.primesteSalariu = function(){
console.log('am primit salariul');
};

Angajat.prototype.salut = function(){
    console.log(`salut, ma numesc ${this.nume} ${this.prenume} si sunt ${this.meserie}.`);
}

const p = new Persoana('Leviathan', 'Xan');
console.log(p);
const a = new Angajat('Tanase', 'Anca', 'profesoara');
console.log(a);

//clasa derivata este specializarea clasei de baza
//functiile noi definite doar in clasa derivata