"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filiere_1 = require("./filiere");
var etudiant_1 = require("./etudiant");
var classe_1 = require("./classe");
var GestionEcole = /** @class */ (function () {
    function GestionEcole() {
        this.filieres = [];
        this.etudiants = [];
        this.classes = [];
    }
    GestionEcole.prototype.ajouterFiliere = function (libelle) {
        var filiere = new filiere_1.Filiere(libelle);
        this.filieres.push(filiere);
        return filiere;
    };
    GestionEcole.prototype.afficherFilieres = function () {
        console.log("Liste des filieres");
        this.filieres.forEach(function (filiere) {
            console.log("ID: ".concat(filiere.id, ", Libelle: ").concat(filiere.libelle));
        });
    };
    GestionEcole.prototype.ajouterEtudiant = function (prenom, nom, date_naissance, adresse) {
        var etudiant = new etudiant_1.Etudiant(prenom, nom, date_naissance, adresse);
        this.etudiants.push(etudiant);
        return etudiant;
    };
    GestionEcole.prototype.afficherEtudiant = function () {
        console.log("Liste des etudiants");
        this.etudiants.forEach(function (etudiant) {
            var formattedDate = etudiant.date_naissance.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long', // Or '2-digit' for numerical month
                day: 'numeric'
            });
            var age = etudiant.getAge();
            console.log("ID: ".concat(etudiant.id, ", Prenom: ").concat(etudiant.prenom, ", Nom: ").concat(etudiant.nom, ", Date de naissance: ").concat(formattedDate, ", adresse: ").concat(etudiant.adresse));
        });
    };
    GestionEcole.prototype.ajouterClasse = function (libelle, niveau, filiereId, etudiantId) {
        var filiere = this.filieres.find(function (f) { return f.id === filiereId; });
        var etudiant = this.etudiants.find(function (e) { return e.id === etudiantId; });
        if (!filiere || !etudiant) {
            console.error("Introuvable");
            return null;
        }
        var classe = new classe_1.Classe(libelle, niveau, filiereId, etudiantId);
        this.classes.push(classe);
        return classe;
    };
    GestionEcole.prototype.listerClasse = function () {
        var _this = this;
        if (this.classes.length === 0) {
            console.log("on a rien trouve");
        }
        else {
            this.classes.forEach(function (classe) {
                console.log(classe.toString(_this.filieres, _this.etudiants));
            });
        }
    };
    GestionEcole.prototype.afficherClasse = function () {
        var _this = this;
        if (this.classes.length === 0) {
            console.log("Aucune classe trouvé.");
        }
        else {
            this.classes.forEach(function (rdv) {
                console.log(rdv.toString(_this.filieres, _this.etudiants)); // Passer les listes ici
            });
        }
    };
    return GestionEcole;
}());
var ecole = new GestionEcole();
var etudiant1 = ecole.ajouterEtudiant("Niass", "Awa", new Date("1990-05-15"), "Dakar");
var etudiant2 = ecole.ajouterEtudiant("Ndiaye", "Ass", new Date("1990-02-10"), "Thies");
var filiere1 = ecole.ajouterFiliere("maths");
var filiere2 = ecole.ajouterFiliere("physique");
var classe1 = ecole.ajouterClasse("lllll", "l2", filiere1.id, etudiant1.id);
var classe2 = ecole.ajouterClasse("ssssss", "l3", filiere2.id, etudiant2.id);
ecole.listerClasse();
ecole.afficherEtudiant();
ecole.afficherClasse();
ecole.afficherFilieres();
