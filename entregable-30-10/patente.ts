// clase patente
export class Patente{
    private numero: number;
    private letra: string;
    private nacionalidad: string;

    constructor(numeros: number, letras:string, nacionalidad:string){
        this.numero = numeros;
        this.letra = letras;
        this.nacionalidad = nacionalidad;
    }
    // getters
    getNumero():number{
        return this.numero;
    }
    getLetra():string{
        return this.letra;
    }
    getNacionalidad():string{
        return this.nacionalidad;
    }
}
