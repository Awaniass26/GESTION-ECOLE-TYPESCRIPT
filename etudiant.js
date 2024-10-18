"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    function Etudiant(prenom, nom, date_naissance, adresse) {
        this.id = Etudiant.idCounter++;
        this.prenom = prenom;
        this.nom = nom;
        this.date_naissance = date_naissance;
        this.adresse = adresse;
    }
    Etudiant.prototype.getFullName = function () {
        return "".concat(this.prenom, " ").concat(this.nom);
    };
    Etudiant.prototype.getAge = function () {
        var today = new Date();
        var age = today.getFullYear() - this.date_naissance.getFullYear();
        var monthDiff = today.getMonth() - this.date_naissance.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.date_naissance.getDate())) {
            age--;
        }
        return age;
    };
    Etudiant.idCounter = 1;
    return Etudiant;
}());
exports.Etudiant = Etudiant;
