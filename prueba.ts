class Persona {
    nombre: string;
    edad: number;
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Empleado extends Persona {
    puesto: string;

    constructor(nombre: string, edad: number, puesto: string) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    trabajar(): void {
        super.saludar();
        console.log(`${this.nombre} está trabajando como ${this.puesto}`);
    }
}

const empleado = new Empleado('Juan', 30, 'Programador');   
empleado.trabajar(); // Juan está trabajando como Programador