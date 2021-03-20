"use strict";

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var propietario = document.getElementById("propietario");
var telefono = document.getElementById("telefono");
var direccion = document.getElementById("direccion");
var nombreMascota = document.getElementById("nombreMascota");
var tipo = document.getElementById("tipo");
var enfermedad = document.getElementById("enfermedad");
var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
boton.addEventListener("click", function () {
  if (!propietario.value || !telefono.value || !direccion.value || !nombreMascota.value || !enfermedad.value) {
    alert("Debe completar todos los campos");
    return;
  }

  ;
  var tipoAnimal = tipo.value;

  if (tipoAnimal === "perro") {
    var perro = new Mascota(propietario.value, direccion.value, telefono.value, tipoAnimal, nombreMascota.value, enfermedad.value);
    resultado.innerHTML = "<ul>".concat(perro.datosPropietario(), ".</ul>\n            <ul>").concat(perro.getipo, ", mientras que el nombre de la mascota es: ").concat(perro.getNonmbreMascota, "\n            y el motivo de la consulta es: ").concat(perro.getEnfermedad, ".</ul>");
  } else if (tipoAnimal === "gato") {
    var gato = new Mascota(propietario.value, direccion.value, telefono.value, tipoAnimal, nombreMascota.value, enfermedad.value);
    resultado.innerHTML = "<ul>".concat(gato.datosPropietario(), ".</ul>\n            <ul>").concat(gato.getipo, ", mientras que el nombre de la mascota es: ").concat(gato.getNonmbreMascota, "\n            y el motivo de la consulta es: ").concat(gato.getEnfermedad, ".</ul>");
  } else if (tipoAnimal === "conejo") {
    var conejo = new Mascota(propietario.value, direccion.value, telefono.value, tipoAnimal, nombreMascota.value, enfermedad.value);
    resultado.innerHTML = "<ul>".concat(conejo.datosPropietario(), ".</ul>\n            <ul>").concat(conejo.getipo, ", mientras que el nombre de la mascota es: ").concat(conejo.getNonmbreMascota, "\n            y el motivo de la consulta es: ").concat(conejo.getEnfermedad, ".</ul>");
  }

  ;
});

var Propietario = /*#__PURE__*/function () {
  function Propietario(nombre, direccion, telefono) {
    _classCallCheck(this, Propietario);

    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  _createClass(Propietario, [{
    key: "datosPropietario",
    value: function datosPropietario() {
      return "El nombre del due\xF1o es : ".concat(this._nombre, ". Su domicilio es: ").concat(this._direccion, ",\n        y el n\xFAmero de tel\xE9fonico de contacto es: ").concat(this._telefono, " ");
    }
  }]);

  return Propietario;
}();

;

var Animal = /*#__PURE__*/function (_Propietario) {
  _inherits(Animal, _Propietario);

  var _super = _createSuper(Animal);

  function Animal(nombre, direccion, telefono, tipo) {
    var _this;

    _classCallCheck(this, Animal);

    _this = _super.call(this, nombre, direccion, telefono);
    _this._tipo = tipo;
    return _this;
  }

  _createClass(Animal, [{
    key: "getipo",
    get: function get() {
      return "El tipo de animal es: ".concat(this._tipo);
    }
  }]);

  return Animal;
}(Propietario);

;

var Mascota = /*#__PURE__*/function (_Animal) {
  _inherits(Mascota, _Animal);

  var _super2 = _createSuper(Mascota);

  function Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    var _this2;

    _classCallCheck(this, Mascota);

    _this2 = _super2.call(this, nombre, direccion, telefono, tipo);
    _this2._nombreMascota = nombreMascota;
    _this2._enfermedad = enfermedad;
    return _this2;
  }

  _createClass(Mascota, [{
    key: "getNonmbreMascota",
    get: function get() {
      return this._nombreMascota;
    }
  }, {
    key: "setNombreMascota",
    set: function set(val) {
      this._nombreMascota = val;
    }
  }, {
    key: "getEnfermedad",
    get: function get() {
      return this._enfermedad;
    }
  }, {
    key: "setEnfermedad",
    set: function set(val) {
      this._enfermedad = val;
    }
  }]);

  return Mascota;
}(Animal);

;