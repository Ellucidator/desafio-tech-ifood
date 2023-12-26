
class Hero{
    constructor(name,age,type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar(){
        let atq
        if (this.type ==='mago')atq='magia'
        if(this.type==='guerreiro')atq='espada'
        if(this.type==='monge')atq='artes marciais'
        if (this.type==='ninja')atq='shuriken'
        console.log(`o ${this.type} atacou usando ${atq}`)
    }
}


const heroi = new Hero('Marcelo', 25, 'ninja')

heroi.atacar()