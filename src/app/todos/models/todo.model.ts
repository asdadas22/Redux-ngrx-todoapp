export class Todo {
    public id: number;
    public texto: string;
    public estado: boolean;

    constructor(texto: string){
        this.texto = texto;
        this.id = Math.random();
        this.estado = false;
    }
}