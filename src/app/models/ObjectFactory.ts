
import {Storage} from '@ionic/storage'
import {Mentor} from './Mentor'
import {contexto} from './Context'


import * as LibNamespace from './modelo'


export enum scope {
    storage = 0,
    kodefy = 1,
    global = 2,
    page = 3,
    url = 4
}

export class EnumUrls{
    public static validaRecebimento = {
        url : "jsp",
        parametros : "a=b",
        retorno : ["e01","e02","e03"]
    }
}

export enum storages  {
    licenca = "licenca",
    usuarioLogado = "usuarioLogado"
}; 


export class  EnumKodefy{

    public static listagemEstados = {
        visao : 314,
        parametros : ""
    }
    ;

    public static listagemMunicipios = {
        visao : 2890,
        parametros : "varEstado={estado.codigo}&varSistema=5"
    };

    public static salvaEntregaBeneficio = {
        transacao : 1878,
        nomeObjeto : "objEntregaCozinha",
        retorno : null
    }

    public static construtorLicenca = [{
        visao: 2632,
        parametros: "varcodigoLicenca={licenca.codigo}"
    }]

    public static login = {
        visao: 2535,
        parametros: "varcpf={usuario.cpf}&varsenha={usuario.senha}"
    }
}

export  class EnumPages {
    public static licencas = {
        listaMunicipios : "listaMunicipios",
        listaEstados : "listaEstados",
        estado : "estado",
        municipio : "municipio",
        
    }
}


export class ObjectFactory{



    async get(vscope: number,id: any, parametros: Object){
        if(vscope == scope.storage){
            var retorno : any = await this.sto.get(id);
            return this.tipefy(retorno);
        }if(vscope == scope.kodefy){
            var strPar =  ObjectFactory.createStringFromTemplate(id.parametros,parametros)
            var retorno = Mentor.executaVisao(id.visao,strPar);
            return this.tipefy(retorno)
        }
        if(vscope == scope.global){
            return contexto.contexto[id];
        }
        if(vscope == scope.page){
            return this.pagina[id];
        }
    
       }


       async put(vscope: number,id: any, parametros: string){
            if(vscope == scope.storage){
            await this.sto.set(id,parametros);
            }
            if(vscope == scope.kodefy){
                if(id.nomeObjeto != null){
                    var retorno = Mentor.rodaTransacaoFromObjeto(id.transacao, id.nomeObjeto,parametros,true);
                    if(id.retono != null)
                        return this.tipefy(retorno[id.retono]);
                }else{
                    var retorno = Mentor.executaTransacao(id.transacao, parametros);
                    if(id.retono != null)
                        return this.tipefy(retorno[id.retono]);
                }
            
            }
            if(vscope == scope.global){
                contexto.contexto[id] = parametros;
            }
            if(vscope == scope.page){
                this.pagina[id] = parametros;
            }
        
       }

    async remove(vscope: number,id: any){
        if(vscope == scope.storage){
        await this.sto.remove(id);
        }
    }

    async cria(classe: string){
        var cls : any = null;
        cls = LibNamespace[classe];
        var retorno = cls(null);
        retorno.mentorClasse = cls.mentorNomeClasse;
        return new cls(null);
    }

   public pagina = new Object();

   constructor(private sto: Storage){

    this.pagina = new Object();
   }

   public  tipefy(obj: any){
   
    if(obj == null)
        return obj;
    if(Array.isArray(obj)){
        if(obj.length == 0)
            return obj;
        else{
            var classArr= obj[0].mentorClasse.split(".");
            var classe : string = classArr[classArr.length-1];
            classe = this.capitalize(classe);
            var cls : any = null;
            cls = LibNamespace[classe];
            var lista = cls.criaColecao(obj);
            return lista;
        }

    }else{
        var classArr= obj.mentorClasse.split(".");
        var classe : string = classArr[classArr.length-1];
        classe = this.capitalize(classe);
        var cls : any = null;
        cls = LibNamespace[classe];
        return new cls(obj);
        
    }
   }

   capitalize(s : string)
   {
       return s && String(s[0]).toUpperCase() + String(s).slice(1);
   }

   public static createStringFromTemplate(template, variables) {
    return template.replace(new RegExp("\{([^\{]+)\}", "g"), function(_unused, varName){
        return eval("variables." + varName);//ariables[varName];
    });
}
}

