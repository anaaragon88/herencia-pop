var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os"));
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, puesto) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.puesto = puesto;
        return _this;
    }
    Empleado.prototype.trabajar = function () {
        _super.prototype.saludar.call(this);
        console.log("".concat(this.nombre, " est\u00E1 trabajando como ").concat(this.puesto));
    };
    return Empleado;
}(Persona));
var empleado = new Empleado('Juan', 30, 'Programador');
empleado.trabajar(); // Juan está trabajando como Programador
