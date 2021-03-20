const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    if(
        !propietario.value || !telefono.value || !direccion.value || !nombreMascota.value ||
        !enfermedad.value) {
        alert("Debe completar todos los campos");
        return;
    };

    const tipoAnimal  = tipo.value;
    if(tipoAnimal === "perro") {
        const perro = new Mascota (propietario.value, direccion.value, telefono.value,
            tipoAnimal, nombreMascota.value, enfermedad.value);

            resultado.innerHTML = `<ul>${perro.datosPropietario()}.</ul>
            <ul>${perro.getipo}, mientras que el nombre de la mascota es: ${perro.getNonmbreMascota}
            y el motivo de la consulta es: ${perro.getEnfermedad}.</ul>`;
    }else if(tipoAnimal === "gato") {
        const gato = new Mascota (propietario.value, direccion.value, telefono.value,
            tipoAnimal, nombreMascota.value, enfermedad.value);

            resultado.innerHTML = `<ul>${gato.datosPropietario()}.</ul>
            <ul>${gato.getipo}, mientras que el nombre de la mascota es: ${gato.getNonmbreMascota}
            y el motivo de la consulta es: ${gato.getEnfermedad}.</ul>`;
    }else if(tipoAnimal === "conejo") {
        const conejo = new Mascota (propietario.value, direccion.value, telefono.value,
            tipoAnimal, nombreMascota.value, enfermedad.value);

            resultado.innerHTML = `<ul>${conejo.datosPropietario()}.</ul>
            <ul>${conejo.getipo}, mientras que el nombre de la mascota es: ${conejo.getNonmbreMascota}
            y el motivo de la consulta es: ${conejo.getEnfermedad}.</ul>`;
    };
});

class Propietario {
    
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    };
    datosPropietario() {
        return `El nombre del dueño es : ${this._nombre}. Su domicilio es: ${this._direccion},
        y el número de teléfonico de contacto es: ${this._telefono} `
    };
};

class Animal extends Propietario {
    
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    };
    get getipo() {
        return `El tipo de animal es: ${this._tipo}`
    };
};

class Mascota extends Animal {
    
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    };
    get getNonmbreMascota(){
        return this._nombreMascota;
    };
    set setNombreMascota(val){
        this._nombreMascota = val;
    };
    get getEnfermedad(){
        return this._enfermedad;
    };
    set setEnfermedad(val){
        this._enfermedad = val;
    };
};