export class Filiere{
    private static idCounter=1;
    public id: number;
    public libelle: string;

    constructor(libelle:string){
        this.id=Filiere.idCounter++
        this.libelle= libelle;
    }

    public getLibelle(): string {
        return `${this.libelle}`;
    }
}