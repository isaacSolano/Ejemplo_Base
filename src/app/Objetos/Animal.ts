export class Animal {
    private nombre:String;

    constructor(nombre:String){
        this.nombre = nombre;
    }

    public toString():String{
        return `Este es un ${this.nombre}`;
    }
}