import { Persona } from '../models/persona.model';

class IndexHelper{
    private static instance:IndexHelper;
    public static getInstance():IndexHelper{
        return !IndexHelper.instance ? new IndexHelper : IndexHelper.instance;
    }
    public getPersonas(){
        const personas:Persona[]=
        [
            {id:0,nombre:'Isaac',app:'Corona Jimenez',cargo:'Coordinador TI',sueldo:4500},
            {id:1,nombre:'Ana',app:'Olguin Olvera',cargo:'Coordinador Contabilidad',sueldo:8500},
            {id:2,nombre:'Emi',app:'Manzanilla',cargo:'Coordinador RH',sueldo:3500},
            {id:3,nombre:'Felipe',app:'Ortiz',cargo:'Coordinador Almacen',sueldo:5220},
            {id:4,nombre:'Amanda',app:'Otañez',cargo:'Coordinador Compras',sueldo:8000},
            {id:5,nombre:'Agustin',app:'Valdez',cargo:'Coordinador Licitaciones',sueldo:7500},
            {id:6,nombre:'Astrid',app:'Avila',cargo:'Coordinador Atn Clientes',sueldo:3500}
        ];
        return personas;
    }
    public structureHTML(personas:Persona[]){
        var template='';
        personas.forEach(persona => {
            template+=`
                <tr>
                    <td>${persona.id}</td>
                    <td>${persona.nombre}</td>
                    <td>${persona.app}</td>
                    <td>${persona.cargo}</td>
                    <td>${persona.sueldo}</td>
                </tr>`
       });
       return template;
    }
   
}
export const indexHelper = IndexHelper.getInstance();