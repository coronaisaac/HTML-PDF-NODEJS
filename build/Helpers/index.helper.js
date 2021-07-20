"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexHelper = void 0;
var IndexHelper = /** @class */ (function () {
    function IndexHelper() {
    }
    IndexHelper.getInstance = function () {
        return !IndexHelper.instance ? new IndexHelper : IndexHelper.instance;
    };
    IndexHelper.prototype.getPersonas = function () {
        var personas = [
            { id: 0, nombre: 'Isaac', app: 'Corona Jimenez', cargo: 'Coordinador TI', sueldo: 4500 },
            { id: 1, nombre: 'Ana', app: 'Olguin Olvera', cargo: 'Coordinador Contabilidad', sueldo: 8500 },
            { id: 2, nombre: 'Emi', app: 'Manzanilla', cargo: 'Coordinador RH', sueldo: 3500 },
            { id: 3, nombre: 'Felipe', app: 'Ortiz', cargo: 'Coordinador Almacen', sueldo: 5220 },
            { id: 4, nombre: 'Amanda', app: 'Otañez', cargo: 'Coordinador Compras', sueldo: 8000 },
            { id: 5, nombre: 'Agustin', app: 'Valdez', cargo: 'Coordinador Licitaciones', sueldo: 7500 },
            { id: 6, nombre: 'Astrid', app: 'Avila', cargo: 'Coordinador Atn Clientes', sueldo: 3500 }
        ];
        return personas;
    };
    IndexHelper.prototype.structureHTML = function (personas) {
        var template = '';
        personas.forEach(function (persona) {
            template += "\n                <tr>\n                    <td>" + persona.id + "</td>\n                    <td>" + persona.nombre + "</td>\n                    <td>" + persona.app + "</td>\n                    <td>" + persona.cargo + "</td>\n                    <td>" + persona.sueldo + "</td>\n                </tr>";
        });
        return template;
    };
    return IndexHelper;
}());
exports.indexHelper = IndexHelper.getInstance();
