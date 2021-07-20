import { Persona } from '../models/persona.model';

class IndexHelper{
    private static instance:IndexHelper;
    public static getInstance():IndexHelper{
        return !IndexHelper.instance ? new IndexHelper : IndexHelper.instance;
    }
    public getPersonas(){
        const personas:Persona[]=
        [
            {id:0,nombre:'Juan',app:'Perez Hernandez',cargo:'Coordinador TI',sueldo:10500},
            {id:1,nombre:'Maria',app:'Olmos Olvera',cargo:'Coordinador Contabilidad',sueldo:8500},
            {id:2,nombre:'Sharon',app:'Hernandez Lopez',cargo:'Coordinador RH',sueldo:9500},
            {id:3,nombre:'Felipe',app:'Ortiz Valdez',cargo:'Coordinador Almacen',sueldo:10220},
            {id:4,nombre:'Didier',app:'Otañez Macias',cargo:'Coordinador Compras',sueldo:9000},
            {id:5,nombre:'Serafin',app:'Valdez Sayaveedra',cargo:'Coordinador Licitaciones',sueldo:7500},
            {id:6,nombre:'Astrid',app:'Avila Camacho',cargo:'Coordinador Atn Clientes',sueldo:13500},
            {id:7,nombre:'Antonio',app:'Camacho Manzanilla',cargo:'Coordinador Ventas',sueldo:13500},
            {id:8,nombre:'Luis',app:'Macias Cordova',cargo:'Coordinador Logistica',sueldo:10000},
            {id:9,nombre:'Miguel',app:'Muños Serafin',cargo:'Director Administrativo',sueldo:53500},
            {id:10,nombre:'Yetzi',app:'Marquez Lopez',cargo:'Director Operativo',sueldo:43500}
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