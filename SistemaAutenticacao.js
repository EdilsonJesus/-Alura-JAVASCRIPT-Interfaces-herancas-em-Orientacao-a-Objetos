/*
Ser autenticavel siginifica ter a método autenticar "senha"
*/
export class SistemaAutenticacao{
    static login(autenticavel,senha){
        if(SistemaAutenticacao.ehautencivavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;    
    }

    static ehautencivavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}