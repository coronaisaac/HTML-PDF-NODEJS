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
            { id: 0, nombre: 'Juan', app: 'Perez Hernandez', cargo: 'Coordinador TI', sueldo: 10500 },
            { id: 1, nombre: 'Maria', app: 'Olmos Olvera', cargo: 'Coordinador Contabilidad', sueldo: 8500 },
            { id: 2, nombre: 'Sharon', app: 'Hernandez Lopez', cargo: 'Coordinador RH', sueldo: 9500 },
            { id: 3, nombre: 'Felipe', app: 'Ortiz Valdez', cargo: 'Coordinador Almacen', sueldo: 10220 },
            { id: 4, nombre: 'Didier', app: 'Otañez Macias', cargo: 'Coordinador Compras', sueldo: 9000 },
            { id: 5, nombre: 'Serafin', app: 'Valdez Sayaveedra', cargo: 'Coordinador Licitaciones', sueldo: 7500 },
            { id: 6, nombre: 'Astrid', app: 'Avila Camacho', cargo: 'Coordinador Atn Clientes', sueldo: 13500 },
            { id: 7, nombre: 'Antonio', app: 'Camacho Manzanilla', cargo: 'Coordinador Ventas', sueldo: 13500 },
            { id: 8, nombre: 'Luis', app: 'Macias Cordova', cargo: 'Coordinador Logistica', sueldo: 10000 },
            { id: 9, nombre: 'Miguel', app: 'Muños Serafin', cargo: 'Director Administrativo', sueldo: 53500 },
            { id: 10, nombre: 'Yetzi', app: 'Marquez Lopez', cargo: 'Director Operativo', sueldo: 43500 }
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
