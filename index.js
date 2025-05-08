class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
    
        if (this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro" ) {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "arte marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "ataque desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Aragorn", 87, "guerreiro");
const heroi2 = new Heroi("Gandalf", 2019, "mago");
const heroi3 = new Heroi("Bruce", 33, "monge");
const heroi4 = new Heroi("Naruto", 17, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

