import { Filiere } from "./filiere";
import { Etudiant } from './etudiant';
import { Classe } from "./classe";

class GestionEcole{
    private filieres: Filiere[] =[];
    private etudiants: Etudiant[] =[];
    private classes: Classe[]= [];

    public ajouterFiliere(libelle:string){
        const filiere= new Filiere(libelle);
        this.filieres.push(filiere);
        return filiere;
    }

   afficherFilieres(){
        console.log("Liste des filieres")
        this.filieres.forEach(filiere=> {
            console.log(`ID: ${filiere.id}, Libelle: ${filiere.libelle}`)
        })
   }

    public ajouterEtudiant(prenom:string, nom:string, date_naissance:Date, adresse:string){
        const etudiant= new Etudiant(prenom,nom,date_naissance,adresse);
        this.etudiants.push(etudiant);
        return etudiant;
    }

    afficherEtudiant(){
        console.log("Liste des etudiants")
        this.etudiants.forEach(etudiant=>{
            const formattedDate = etudiant.date_naissance.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long', // Or '2-digit' for numerical month
                day: 'numeric'
            });
            const age = etudiant.getAge();
            console.log(`ID: ${etudiant.id}, Prenom: ${etudiant.prenom}, Nom: ${etudiant.nom}, Date de naissance: ${formattedDate}, adresse: ${etudiant.adresse}`)
        })
    }

    public ajouterClasse(libelle: string, niveau: string, filiereId:number, etudiantId:number){
        const filiere= this.filieres.find(f=>f.id === filiereId);
        const etudiant=this.etudiants.find(e=>e.id === etudiantId);

        if(!filiere || !etudiant ){
            console.error("Introuvable");
            return null;
        }

        const classe= new Classe(libelle,niveau,filiereId,etudiantId);
        this.classes.push(classe);
        return classe;
    }

   public listerClasse():void{
    if(this.classes.length === 0){
        console.log("on a rien trouve")
    }else{
        this.classes.forEach(classe =>{
            console.log(classe.toString(this.filieres, this.etudiants));
        })
    }
   }

    public afficherClasse(): void {
        if (this.classes.length === 0) {
            console.log("Aucune classe trouvé.");
        } else {
            this.classes.forEach(rdv => {
                console.log(rdv.toString(this.filieres, this.etudiants)); // Passer les listes ici
            });
        }
    }
}

const ecole = new GestionEcole();


const etudiant1 = ecole.ajouterEtudiant("Niass", "Awa", new Date("1990-05-15"),"Dakar");
const etudiant2 = ecole.ajouterEtudiant("Ndiaye", "Ass", new Date("1990-02-10"),"Thies");

const filiere1= ecole.ajouterFiliere("maths");
const filiere2= ecole.ajouterFiliere("physique");

const classe1= ecole.ajouterClasse("lllll","l2",filiere1.id,etudiant1.id);
const classe2= ecole.ajouterClasse("ssssss","l3",filiere2.id,etudiant2.id);

ecole.listerClasse();
ecole.afficherEtudiant();
ecole.afficherClasse();
ecole.afficherFilieres();




