"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filiere = void 0;
var Filiere = /** @class */ (function () {
    function Filiere(libelle) {
        this.id = Filiere.idCounter++;
        this.libelle = libelle;
    }
    Filiere.prototype.getLibelle = function () {
        return "".concat(this.libelle);
    };
    Filiere.idCounter = 1;
    return Filiere;
}());
exports.Filiere = Filiere;
