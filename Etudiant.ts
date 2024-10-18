export class Etudiant{
    private static idCounter=1;
    public id:number;
    public prenom: string;
    public nom: string;
    public date_naissance: Date;
    public adresse: string;

    constructor(prenom:string,nom:string,date_naissance:Date,adresse:string){
        this.id=Etudiant.idCounter++
        this.prenom=prenom;
        this.nom=nom;
        this.date_naissance=date_naissance;
        this.adresse= adresse;
    }

    public getFullName(): string {
        return `${this.prenom} ${this.nom}`;
    }

    

    public getAge(): number {
        const today = new Date();
        let age = today.getFullYear() - this.date_naissance.getFullYear();
        const monthDiff = today.getMonth() - this.date_naissance.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.date_naissance.getDate())) {
            age--;
        }
        return age;
    }
}