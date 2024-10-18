import { Filiere } from "./filiere";
import { Etudiant } from './etudiant';

export class Classe{
    private static idCounter=1;
    public id: number;
    public libelle: string;
    public niveau: string;
    filiereId: number;
    etudiantId: number


    constructor(libelle:string, niveau:string, filiereId:number, etudiantId:number){
        this.id=Classe.idCounter++
        this.libelle=libelle;
        this.niveau=niveau;
        this.filiereId=filiereId;
        this.etudiantId=etudiantId;
    }

    public toString(filieres: Filiere[], etudiants: Etudiant[] ){
        const filiere= filieres.find(f=>f.id === this.filiereId);
        const etudiant=etudiants.find(e=>e.id === this.etudiantId);

        const filiereLibelle= filiere ? filiere.getLibelle(): "introuvable";
        const EtudiantFullName = etudiant ? etudiant.getFullName(): "introuvable";

        return `Classe ${this.id}: ${this.libelle} ${this.niveau} avec l'etudiant ${EtudiantFullName} et la filiere ${filiereLibelle}`; 

    }

    
}