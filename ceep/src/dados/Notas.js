export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    criarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota)
        this.notificar()
    } 

    apagarNota(index){
        this.notas.splice(index, 1)
        this.notificar()
    }

    inscrever(funcao){
        this._inscritos.push(funcao)
    }

    desinscrever(funcao){
        this._inscritos = this._inscritos.filter(f => f !== funcao)
    }

    notificar(){
        this._inscritos.forEach(func => func(this.notas))
    }

}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}