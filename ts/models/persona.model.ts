export class Persona{
    public id:number;
    public nombre:string;
    public app:string;
    public cargo:string;
    public sueldo:number;
    
    constructor ( id:number,nombre:string,app:string,cargo:string,sueldo:number){
        this.id=id;
        this.nombre=nombre;
        this.app= app;
        this.cargo= cargo;
        this.sueldo=sueldo
    }
}