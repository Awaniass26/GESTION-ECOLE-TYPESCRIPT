"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classe = void 0;
var Classe = /** @class */ (function () {
    function Classe(libelle, niveau, filiereId, etudiantId) {
        this.id = Classe.idCounter++;
        this.libelle = libelle;
        this.niveau = niveau;
        this.filiereId = filiereId;
        this.etudiantId = etudiantId;
    }
    Classe.prototype.toString = function (filieres, etudiants) {
        var _this = this;
        var filiere = filieres.find(function (f) { return f.id === _this.filiereId; });
        var etudiant = etudiants.find(function (e) { return e.id === _this.etudiantId; });
        var filiereLibelle = filiere ? filiere.getLibelle() : "introuvable";
        var EtudiantFullName = etudiant ? etudiant.getFullName() : "introuvable";
        return "Classe ".concat(this.id, ": ").concat(this.libelle, " ").concat(this.niveau, " avec l'etudiant ").concat(EtudiantFullName, " et la filiere ").concat(filiereLibelle);
    };
    Classe.idCounter = 1;
    return Classe;
}());
exports.Classe = Classe;
