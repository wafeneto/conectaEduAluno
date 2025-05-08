import { Mentor } from "./Mentor";

function replaceAll(palavra, de, para) {
  var str = palavra;
  var pos = str.indexOf(de);
  while (pos > -1) {
    str = str.replace(de, para);
    pos = str.indexOf(de);
  }
  return str;
}
export class formatadoLista {ß
  public de: number;
  public para: String;
  constructor(de: number, para: String) {
    this.de = de;
    this.para = para;
  }
}
export class ionicClasseBase {
  public ionicIndiceRepositorio: number;
  public ionicFlagConcluido: boolean;
  public ionicFlagNovo: boolean;
  public base64: string;
  public idApp: string;
  public nomeApp: string;
}
export class Aluno extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.Aluno';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new Aluno(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
  
      public nome : String = '' ;
      public nome_ : String ;
  
      public cpf : String = '' ;
      public cpf_ : String ;
  
      public dataNascimento : Date = null ;
      public dataNascimento_ : String ;
      get dataNascimentoFormatado(): String {
        if(typeof(this.dataNascimento) != 'undefined' && this.dataNascimento != null  )
        return Mentor.dateToString(this.dataNascimento);
        else
          return  '' ;
      }
      set dataNascimentoFormatado(valor: String) {
        this.dataNascimento_ =  valor;
        if(replaceAll(this.dataNascimento_,"_","").length ==10)
          this.dataNascimento =  Mentor.stringToDate(valor);
      }
      get dataNascimentoFormatadoIso(): String {
        return  Mentor.dateToStringIso(this.dataNascimento)
      }
      set dataNascimentoFormatadoIso(valor: String) {
        this.dataNascimento =  Mentor.stringToDateIso(valor);
        this.dataNascimento_ =  Mentor.dateToString(this.dataNascimento);
      }
  
      public flagFoto : number = 0 ;
      public flagFoto_ : String ;
      get flagFotoSimNao(){ if (this.flagFoto == 1) return true; else return false;}
      set flagFotoSimNao(flag){ if (flag) this.flagFoto = 1; else this.flagFoto = 0;}
      get flagFotoFormatado(): String {
        return (this.flagFoto_)
      }
      set flagFotoFormatado(valor: String) {
        this.flagFoto_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.flagFoto =  Mentor.stringToMoeda(valor);
      }
  
      public extensaoFoto : String = '' ;
      public extensaoFoto_ : String ;
  
      public senha : String = '' ;
      public senha_ : String ;
      public rlcAlunoResponsavel : RlcAlunoResponsavel[] ;
      public matriculas : AlunosMatriculas[] ;
  
  public listaAtributosKodefy: Array<string> ='codigo#nome#cpf#dataNascimento#flagFoto#extensaoFoto#senha#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
         this.codigo = objeto.codigo;
         this.codigo_ = Mentor.intToString(this.codigo);
         this.nome = objeto.nome;
         this.cpf = objeto.cpf;
           if(typeof(objeto.dataNascimento_) != 'undefined') { try{ 
   this.dataNascimento_ = objeto.dataNascimento_ ;
         this.dataNascimento = Mentor.stringToDate(objeto.dataNascimento_) ;
         this.dataNascimentoFormatado = (objeto.dataNascimento_) ;
  } catch(err){alert(err); 
   throw err;} 
   }
  else{
         this.dataNascimento = Mentor.stringToDate(objeto.dataNascimentoFormatado) ;
         this.dataNascimento_ = (objeto.dataNascimentoFormatado) ;}
         this.flagFoto = objeto.flagFoto;
         this.flagFoto_ = Mentor.intToString(this.flagFoto);
         this.extensaoFoto = objeto.extensaoFoto;
         this.senha = objeto.senha;
          this.rlcAlunoResponsavel = new Array();
  
        if(objeto.rlcAlunoResponsavel != null){
          for(let x:number = 0;x<objeto.rlcAlunoResponsavel.length;x++)
          this.rlcAlunoResponsavel.push(new RlcAlunoResponsavel(objeto.rlcAlunoResponsavel[x]))
        }
          this.matriculas = new Array();
  
        if(objeto.matriculas != null){
          for(let x:number = 0;x<objeto.matriculas.length;x++)
          this.matriculas.push(new AlunosMatriculas(objeto.matriculas[x]))
        }
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.dataNascimento = new Date();
         this.dataNascimento_ = (this.dataNascimentoFormatado) ;
         this.flagFoto = 0;
         this.flagFoto_ = '0';
  
        }else{
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.dataNascimento = new Date();
         this.dataNascimento_ = (this.dataNascimentoFormatado) ;
         this.flagFoto = 0;
         this.flagFoto_ = '0';
  
      }
        }
  
  
      }
  
}
export class AlunosMatriculas extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.AlunosMatriculas';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new AlunosMatriculas(lista[x]));
			return retorno;
		}
	}

		public codigo : number = 0 ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public situacao : number = 0 ;
		public situacao_ : String ;
		get situacaoSimNao(){ if (this.situacao == 1) return true; else return false;}
		set situacaoSimNao(flag){ if (flag) this.situacao = 1; else this.situacao = 0;}
		public situacaoFormatadoLista : formatadoLista[] = new Array();
		get situacaoFormatado(){  return Mentor.formatadoLista(this.situacaoFormatadoLista,this.situacao);}

		public turma : Turma ;

public listaAtributosKodefy: Array<string> ='codigo#situacao#'.split('#');
		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.situacao = objeto.situacao;
			 this.situacao_ = Mentor.intToString(this.situacao);

			if(objeto.turma != null)
				this.turma = new Turma(objeto.turma);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.situacao = 0;
			 this.situacao_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.situacao = 0;
			 this.situacao_ = '0';
				this.turma = new Turma('null');

		}
			}

			this.situacaoFormatadoLista.push(new formatadoLista(1,"Ativo"));
			this.situacaoFormatadoLista.push(new formatadoLista(2,"Inativo"));
			this.situacaoFormatadoLista.push(new formatadoLista(3,"Cancelado"));
			this.situacaoFormatadoLista.push(new formatadoLista(4,"Transferido"));
			this.situacaoFormatadoLista.push(new formatadoLista(5,"Em Espera"));
			this.situacaoFormatadoLista.push(new formatadoLista(6,"Falecido"));
			this.situacaoFormatadoLista.push(new formatadoLista(7,"Evadido"));

		}

}
export class Escola extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.Escola';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new Escola(lista[x]));
			return retorno;
		}
	}

		public codigo : number = 0 ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public nome : String = '' ;
		public nome_ : String ;

public listaAtributosKodefy: Array<string> ='codigo#nome#'.split('#');
		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.nome = objeto.nome;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

		}
			}


		}

}
export class RlcAlunoResponsavel extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.rlcAlunoResponsavel';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new RlcAlunoResponsavel(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
      public responsavel : ResponsavelAluno ;
      public aluno : Aluno ;
  
  public listaAtributosKodefy: Array<string> ='codigo#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
         this.codigo = objeto.codigo;
         this.codigo_ = Mentor.intToString(this.codigo);
  
        if(objeto.responsavel != null)
          this.responsavel = new ResponsavelAluno(objeto.responsavel);
  
        if(objeto.aluno != null)
          this.aluno = new Aluno(objeto.aluno);
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
  
        }else{
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
          this.responsavel = new ResponsavelAluno('null');
          this.aluno = new Aluno('null');
  
      }
        }
  
  
      }
  
}
export class ResponsavelAluno extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.ResponsavelAluno';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new ResponsavelAluno(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
  
      public cpfResponsavel : String = '' ;
      public cpfResponsavel_ : String ;
  
      public nomeResponsavel : String = '' ;
      public nomeResponsavel_ : String ;
  
      public dataNascimentoResponsavel : Date = null ;
      public dataNascimentoResponsavel_ : String ;
      get dataNascimentoResponsavelFormatado(): String {
        if(typeof(this.dataNascimentoResponsavel) != 'undefined' && this.dataNascimentoResponsavel != null  )
        return Mentor.dateToString(this.dataNascimentoResponsavel);
        else
          return  '' ;
      }
      set dataNascimentoResponsavelFormatado(valor: String) {
        this.dataNascimentoResponsavel_ =  valor;
        if(replaceAll(this.dataNascimentoResponsavel_,"_","").length ==10)
          this.dataNascimentoResponsavel =  Mentor.stringToDate(valor);
      }
      get dataNascimentoResponsavelFormatadoIso(): String {
        return  Mentor.dateToStringIso(this.dataNascimentoResponsavel)
      }
      set dataNascimentoResponsavelFormatadoIso(valor: String) {
        this.dataNascimentoResponsavel =  Mentor.stringToDateIso(valor);
        this.dataNascimentoResponsavel_ =  Mentor.dateToString(this.dataNascimentoResponsavel);
      }
  
      public senha : String = '' ;
      public senha_ : String ;
      public rlcAlunoResponsavel : RlcAlunoResponsavel[] ;
  
  public listaAtributosKodefy: Array<string> ='codigo#cpfResponsavel#nomeResponsavel#dataNascimentoResponsavel#senha#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
         this.codigo = objeto.codigo;
         this.codigo_ = Mentor.intToString(this.codigo);
         this.cpfResponsavel = objeto.cpfResponsavel;
         this.nomeResponsavel = objeto.nomeResponsavel;
           if(typeof(objeto.dataNascimentoResponsavel_) != 'undefined') { try{ 
   this.dataNascimentoResponsavel_ = objeto.dataNascimentoResponsavel_ ;
         this.dataNascimentoResponsavel = Mentor.stringToDate(objeto.dataNascimentoResponsavel_) ;
         this.dataNascimentoResponsavelFormatado = (objeto.dataNascimentoResponsavel_) ;
  } catch(err){alert(err); 
   throw err;} 
   }
  else{
         this.dataNascimentoResponsavel = Mentor.stringToDate(objeto.dataNascimentoResponsavelFormatado) ;
         this.dataNascimentoResponsavel_ = (objeto.dataNascimentoResponsavelFormatado) ;}
         this.senha = objeto.senha;
          this.rlcAlunoResponsavel = new Array();
  
        if(objeto.rlcAlunoResponsavel != null){
          for(let x:number = 0;x<objeto.rlcAlunoResponsavel.length;x++)
          this.rlcAlunoResponsavel.push(new RlcAlunoResponsavel(objeto.rlcAlunoResponsavel[x]))
        }
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.dataNascimentoResponsavel = new Date();
         this.dataNascimentoResponsavel_ = (this.dataNascimentoResponsavelFormatado) ;
  
        }else{
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.dataNascimentoResponsavel = new Date();
         this.dataNascimentoResponsavel_ = (this.dataNascimentoResponsavelFormatado) ;
  
      }
        }
  
  
      }
  
  }
  
export class LicencaMunicipioSistema extends ionicClasseBase {
  public static mentorNomeClasse =
    'br.com.assistenciaSocial.app.licencaMunicipioSistema';


  static criaColecao(lista: any) {
    if (lista != null) {
      var retorno = new Array();
      for (let x = 0; x < lista.length; x++)
        retorno.push(new LicencaMunicipioSistema(lista[x]));
      return retorno;
    }
  }

  public codigo: number;
  public codigo_: String;
  get codigoSimNao() {
    if (this.codigo == 1) return true;
    else return false;
  }
  set codigoSimNao(flag) {
    if (flag) this.codigo = 1;
    else this.codigo = 0;
  }
  get codigoFormatado(): String {
    return this.codigo_;
  }
  set codigoFormatado(valor: String) {
    this.codigo_ = valor;
    if (replaceAll(valor, ' ', '') != '')
      this.codigo = Mentor.stringToMoeda(valor);
  }

  public nomeMunicipio: String;
  public nomeMunicipio_: String;

  public sistema: number;
  public sistema_: String;
  get sistemaSimNao() {
    if (this.sistema == 1) return true;
    else return false;
  }
  set sistemaSimNao(flag) {
    if (flag) this.sistema = 1;
    else this.sistema = 0;
  }
  public sistemaFormatadoLista: formatadoLista[] = new Array();
  get sistemaFormatado() {
    return Mentor.formatadoLista(this.sistemaFormatadoLista, this.sistema);
  }

  public nomeCliente: String;
  public nomeCliente_: String;

  public logo: String;
  public logo_: String;

  public dataUltimaVersao: Date;
  public dataUltimaVersao_: String;
  get dataUltimaVersaoFormatado(): String {
    if (
      typeof this.dataUltimaVersao != 'undefined' &&
      this.dataUltimaVersao != null
    )
      return Mentor.dateToString(this.dataUltimaVersao);
    else return '';
  }
  set dataUltimaVersaoFormatado(valor: String) {
    this.dataUltimaVersao_ = valor;
    if (replaceAll(this.dataUltimaVersao_, '_', '').length == 10)
      this.dataUltimaVersao = Mentor.stringToDate(valor);
  }
  get dataUltimaVersaoFormatadoIso(): String {
    return Mentor.dateToStringIso(this.dataUltimaVersao);
  }
  set dataUltimaVersaoFormatadoIso(valor: String) {
    this.dataUltimaVersao = Mentor.stringToDateIso(valor);
    this.dataUltimaVersao_ = Mentor.dateToString(this.dataUltimaVersao);
  }

  public url: String;
  public url_: String;

  public urlUltimaAlteracao: String;
  public urlUltimaAlteracao_: String;

  public urlServidor: String;
  public urlServidor_: String;
  public estado: Estado;

  public mentorClasse: string;
  constructor(objeto: any) {
    super();
    // if (objeto != null) Mentor.mostraSql = objeto.flagExibeSql;
    if (objeto != null && objeto != 'null') {
      if (typeof objeto.ionicFlagNovo == 'undefined')
        this.ionicFlagNovo = false;
      else this.ionicFlagNovo = objeto.ionicFlagNovo;
      this.codigo = objeto.codigo;
      this.codigo_ = Mentor.intToString(this.codigo);
      this.nomeMunicipio = objeto.nomeMunicipio;
      this.sistema = objeto.sistema;
      this.sistema_ = Mentor.intToString(this.sistema);
      this.nomeCliente = objeto.nomeCliente;
      this.logo = objeto.logo;
      this.mentorClasse = LicencaMunicipioSistema.mentorNomeClasse;
      if (typeof objeto.dataUltimaVersao_ != 'undefined') {
        try {
          this.dataUltimaVersao_ = objeto.dataUltimaVersao_;
          this.dataUltimaVersao = Mentor.stringToDate(objeto.dataUltimaVersao_);
          this.dataUltimaVersaoFormatado = objeto.dataUltimaVersao_;
        } catch (err) {
          alert(err);
          throw err;
        }
      } else {
        this.dataUltimaVersao = Mentor.stringToDate(
          objeto.dataUltimaVersaoFormatado
        );
        this.dataUltimaVersao_ = objeto.dataUltimaVersaoFormatado;
      }
      this.url = objeto.url;
      this.urlUltimaAlteracao = objeto.urlUltimaAlteracao;
      this.urlServidor = objeto.urlServidor;

      if (objeto.estado != null) this.estado = new Estado(objeto.estado);
    } else {
      if (objeto == 'null') {
        this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.sistema = 0;
        this.sistema_ = '0';
        this.dataUltimaVersao = new Date();
        this.dataUltimaVersao_ = this.dataUltimaVersaoFormatado;
      } else {
        this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.sistema = 0;
        this.sistema_ = '0';
        this.dataUltimaVersao = new Date();
        this.dataUltimaVersao_ = this.dataUltimaVersaoFormatado;
        this.estado = new Estado('null');
      }
    }

    this.sistemaFormatadoLista.push(new formatadoLista(1, 'assistenciaSocial'));
    this.sistemaFormatadoLista.push(new formatadoLista(2, 'tfd'));
    this.sistemaFormatadoLista.push(
      new formatadoLista(3, 'transporte escolar')
    );
    this.sistemaFormatadoLista.push(new formatadoLista(4, 'ouvidoria'));
    this.sistemaFormatadoLista.push(new formatadoLista(5, 'gestao escolar'));
    this.sistemaFormatadoLista.push(new formatadoLista(6, 'sic'));
    this.sistemaFormatadoLista.push(new formatadoLista(7, 'transparencia'));
    this.sistemaFormatadoLista.push(new formatadoLista(8, 'netDoc'));
    this.sistemaFormatadoLista.push(new formatadoLista(9, 'diarioOficial'));
  }
}
export class Estado extends ionicClasseBase {
  static criaColecao(lista: any) {
    if (lista != null) {
      var retorno = new Array();
      for (let x = 0; x < lista.length; x++) retorno.push(new Estado(lista[x]));
      return retorno;
    }
  }

  public codigo: number;
  public codigo_: String;
  get codigoSimNao() {
    if (this.codigo == 1) return true;
    else return false;
  }
  set codigoSimNao(flag) {
    if (flag) this.codigo = 1;
    else this.codigo = 0;
  }
  get codigoFormatado(): String {
    return this.codigo_;
  }
  set codigoFormatado(valor: String) {
    this.codigo_ = valor;
    if (replaceAll(valor, ' ', '') != '')
      this.codigo = Mentor.stringToMoeda(valor);
  }

  public descricao: String;
  public descricao_: String;

  constructor(objeto: any) {
    super();
    if (objeto != null) {
      if (typeof objeto.ionicFlagNovo == 'undefined')
        this.ionicFlagNovo = false;
      else this.ionicFlagNovo = objeto.ionicFlagNovo;
      this.codigo = objeto.codigo;
      this.codigo_ = Mentor.intToString(this.codigo);
      this.descricao = objeto.descricao;
    } else {
      if (typeof objeto == 'undefined') {
        this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
      } else {
        this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
      }
    }
  }

  
}
export class Funcionarios extends ionicClasseBase {

	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public logi: String;

	public nome: String;

	public senha: String;

	public image: String;

  public cpf: String;

  
	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.logi = objeto.logi;
			this.nome = objeto.nome;
			this.senha = objeto.senha;
			this.image = objeto.image;
      this.cpf = objeto.cpf;

		}
		else {


		}


	}

  

}
export class Turma extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.Turma';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new Turma(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
  
      public nome : String = '' ;
      public nome_ : String ;
      public escola : Escola ;
      public calendario : CalendarioEscolar ;
      public horarios : HorarioEscolar[] ;
  
  public listaAtributosKodefy: Array<string> ='codigo#nome#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
         this.codigo = objeto.codigo;
         this.codigo_ = Mentor.intToString(this.codigo);
         this.nome = objeto.nome;
  
        if(objeto.escola != null)
          this.escola = new Escola(objeto.escola);
  
        if(objeto.calendario != null)
          this.calendario = new CalendarioEscolar(objeto.calendario);
          this.horarios = new Array();
  
        if(objeto.horarios != null){
          for(let x:number = 0;x<objeto.horarios.length;x++)
          this.horarios.push(new HorarioEscolar(objeto.horarios[x]))
        }
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
  
        }else{
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
          this.escola = new Escola('null');
          this.calendario = new CalendarioEscolar('null');
  
      }
        }
  
  
      }
  
}
export class HorarioEscolar extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.HorarioEscolar';

  static criaColecao(lista: any){
    if(lista!=null){
      var retorno = new Array();
      for(let x = 0;x<lista.length;x++)
        retorno.push(new HorarioEscolar(lista[x]));
      return retorno;
    }
  }

    public codigo : number = 0 ;
    public codigo_ : String ;
    get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
    set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
    get codigoFormatado(): String {
      return (this.codigo_)
    }
    set codigoFormatado(valor: String) {
      this.codigo_ =  (valor);
      if(replaceAll(valor," ","") != "")
        this.codigo =  Mentor.stringToMoeda(valor);
    }

    public horaInicial : String = '' ;
    public horaInicial_ : String ;

    public horaFinal : String = '' ;
    public horaFinal_ : String ;

    public diaSemana : number = 0 ;
    public diaSemana_ : String ;
    get diaSemanaSimNao(){ if (this.diaSemana == 1) return true; else return false;}
    set diaSemanaSimNao(flag){ if (flag) this.diaSemana = 1; else this.diaSemana = 0;}
    public diaSemanaFormatadoLista : formatadoLista[] = new Array();
    get diaSemanaFormatado(){  return Mentor.formatadoLista(this.diaSemanaFormatadoLista,this.diaSemana);}


    public ordem : number = 0 ;
    public ordem_ : String ;
    get ordemSimNao(){ if (this.ordem == 1) return true; else return false;}
    set ordemSimNao(flag){ if (flag) this.ordem = 1; else this.ordem = 0;}
    public ordemFormatadoLista : formatadoLista[] = new Array();
    get ordemFormatado(){  return Mentor.formatadoLista(this.ordemFormatadoLista,this.ordem);}

    public horaAula : HorarioAula ;
    public disciplina : ProfessorDisciplina ;

public listaAtributosKodefy: Array<string> ='codigo#horaInicial#horaFinal#diaSemana#ordem#'.split('#');
    constructor(objeto:any){
    super();
    if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;
        this.codigo = objeto.codigo;
        this.codigo_ = Mentor.intToString(this.codigo);
        this.horaInicial = objeto.horaInicial;
        this.horaFinal = objeto.horaFinal;
        this.diaSemana = objeto.diaSemana;
        this.diaSemana_ = Mentor.intToString(this.diaSemana);
        this.ordem = objeto.ordem;
        this.ordem_ = Mentor.intToString(this.ordem);

      if(objeto.horaAula != null)
        this.horaAula = new HorarioAula(objeto.horaAula);

      if(objeto.disciplina != null)
        this.disciplina = new ProfessorDisciplina(objeto.disciplina);

    }
    else{
    if((objeto) == 'null'){
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.diaSemana = 0;
        this.diaSemana_ = '0';
        this.ordem = 0;
        this.ordem_ = '0';

      }else{
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.diaSemana = 0;
        this.diaSemana_ = '0';
        this.ordem = 0;
        this.ordem_ = '0';
        this.horaAula = new HorarioAula('null');
        this.disciplina = new ProfessorDisciplina('null');

    }
      }

      this.diaSemanaFormatadoLista.push(new formatadoLista(1,"Segunda"));
      this.diaSemanaFormatadoLista.push(new formatadoLista(2,"Terça"));
      this.diaSemanaFormatadoLista.push(new formatadoLista(3,"Quarta"));
      this.diaSemanaFormatadoLista.push(new formatadoLista(4,"Quinta"));
      this.diaSemanaFormatadoLista.push(new formatadoLista(5,"Sexta"));
      this.diaSemanaFormatadoLista.push(new formatadoLista(6,"Sábado"));
      this.ordemFormatadoLista.push(new formatadoLista(1,"1ª"));
      this.ordemFormatadoLista.push(new formatadoLista(2,"2ª"));
      this.ordemFormatadoLista.push(new formatadoLista(3,"3ª"));
      this.ordemFormatadoLista.push(new formatadoLista(4,"4ª"));
      this.ordemFormatadoLista.push(new formatadoLista(5,"5ª"));
      this.ordemFormatadoLista.push(new formatadoLista(6,"6ª"));
      this.ordemFormatadoLista.push(new formatadoLista(7,"7ª"));
      this.ordemFormatadoLista.push(new formatadoLista(8,"8ª"));

    }

}
export class HorarioAula extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.HorarioAula';

  static criaColecao(lista: any){
    if(lista!=null){
      var retorno = new Array();
      for(let x = 0;x<lista.length;x++)
        retorno.push(new HorarioAula(lista[x]));
      return retorno;
    }
  }

    public codigo : number = 0 ;
    public codigo_ : String ;
    get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
    set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
    get codigoFormatado(): String {
      return (this.codigo_)
    }
    set codigoFormatado(valor: String) {
      this.codigo_ =  (valor);
      if(replaceAll(valor," ","") != "")
        this.codigo =  Mentor.stringToMoeda(valor);
    }

    public ordem : number = 0 ;
    public ordem_ : String ;
    get ordemSimNao(){ if (this.ordem == 1) return true; else return false;}
    set ordemSimNao(flag){ if (flag) this.ordem = 1; else this.ordem = 0;}
    public ordemFormatadoLista : formatadoLista[] = new Array();
    get ordemFormatado(){  return Mentor.formatadoLista(this.ordemFormatadoLista,this.ordem);}


    public horaInicio : String = '' ;
    public horaInicio_ : String ;

    public horaFim : String = '' ;
    public horaFim_ : String ;

    public turno : number = 0 ;
    public turno_ : String ;
    get turnoSimNao(){ if (this.turno == 1) return true; else return false;}
    set turnoSimNao(flag){ if (flag) this.turno = 1; else this.turno = 0;}
    public turnoFormatadoLista : formatadoLista[] = new Array();
    get turnoFormatado(){  return Mentor.formatadoLista(this.turnoFormatadoLista,this.turno);}


public listaAtributosKodefy: Array<string> ='codigo#ordem#horaInicio#horaFim#turno#'.split('#');
    constructor(objeto:any){
    super();
    if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;
        this.codigo = objeto.codigo;
        this.codigo_ = Mentor.intToString(this.codigo);
        this.ordem = objeto.ordem;
        this.ordem_ = Mentor.intToString(this.ordem);
        this.horaInicio = objeto.horaInicio;
        this.horaFim = objeto.horaFim;
        this.turno = objeto.turno;
        this.turno_ = Mentor.intToString(this.turno);

    }
    else{
    if((objeto) == 'null'){
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.ordem = 0;
        this.ordem_ = '0';
        this.turno = 0;
        this.turno_ = '0';

      }else{
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.ordem = 0;
        this.ordem_ = '0';
        this.turno = 0;
        this.turno_ = '0';

    }
      }

      this.ordemFormatadoLista.push(new formatadoLista(1,"1ª"));
      this.ordemFormatadoLista.push(new formatadoLista(2,"2ª"));
      this.ordemFormatadoLista.push(new formatadoLista(3,"3ª"));
      this.ordemFormatadoLista.push(new formatadoLista(4,"4ª"));
      this.ordemFormatadoLista.push(new formatadoLista(5,"5ª"));
      this.ordemFormatadoLista.push(new formatadoLista(6,"6ª"));
      this.ordemFormatadoLista.push(new formatadoLista(7,"7ª"));
      this.ordemFormatadoLista.push(new formatadoLista(8,"8ª"));
      this.turnoFormatadoLista.push(new formatadoLista(1,"Manhã"));
      this.turnoFormatadoLista.push(new formatadoLista(2,"Tarde"));
      this.turnoFormatadoLista.push(new formatadoLista(3,"Noite"));
      this.turnoFormatadoLista.push(new formatadoLista(4,"Integral"));

    }

}
export class ProfessorDisciplina extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.ProfessorDisciplina';

  static criaColecao(lista: any){
    if(lista!=null){
      var retorno = new Array();
      for(let x = 0;x<lista.length;x++)
        retorno.push(new ProfessorDisciplina(lista[x]));
      return retorno;
    }
  }
    public disciplina : Disciplina ;
    public professor : Funcionarios ;

public listaAtributosKodefy: Array<string> =''.split('#');
    constructor(objeto:any){
    super();
    if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;

      if(objeto.disciplina != null)
        this.disciplina = new Disciplina(objeto.disciplina);

      if(objeto.professor != null)
        this.professor = new Funcionarios(objeto.professor);

    }
    else{
    if((objeto) == 'null'){
this.ionicFlagNovo = true;

      }else{
this.ionicFlagNovo = true;
        this.disciplina = new Disciplina('null');
        this.professor = new Funcionarios('null');

    }
      }


    }

}
export class Disciplina extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.Disciplina';

  static criaColecao(lista: any){
    if(lista!=null){
      var retorno = new Array();
      for(let x = 0;x<lista.length;x++)
        retorno.push(new Disciplina(lista[x]));
      return retorno;
    }
  }

    public codigo : number = 0 ;
    public codigo_ : String ;
    get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
    set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
    get codigoFormatado(): String {
      return (this.codigo_)
    }
    set codigoFormatado(valor: String) {
      this.codigo_ =  (valor);
      if(replaceAll(valor," ","") != "")
        this.codigo =  Mentor.stringToMoeda(valor);
    }

    public nome : String = '' ;
    public nome_ : String ;

    public descricao : String = '' ;
    public descricao_ : String ;

    public sigla : String = '' ;
    public sigla_ : String ;

public listaAtributosKodefy: Array<string> ='codigo#nome#descricao#sigla#'.split('#');
    constructor(objeto:any){
    super();
    if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;
        this.codigo = objeto.codigo;
        this.codigo_ = Mentor.intToString(this.codigo);
        this.nome = objeto.nome;
        this.descricao = objeto.descricao;
        this.sigla = objeto.sigla;

    }
    else{
    if((objeto) == 'null'){
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';

      }else{
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';

    }
      }


    }

}
export class CalendarioEscolar extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.CalendarioEscolar';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new CalendarioEscolar(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
      public datas : CalendarioEscolarDatas[] ;
  
  public listaAtributosKodefy: Array<string> ='codigo#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
          this.codigo = objeto.codigo;
          this.codigo_ = Mentor.intToString(this.codigo);
          this.datas = new Array();
  
        if(objeto.datas != null){
          for(let x:number = 0;x<objeto.datas.length;x++)
          this.datas.push(new CalendarioEscolarDatas(objeto.datas[x]))
        }
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
          this.codigo = 0;
          this.codigo_ = '0';
  
        }else{
  this.ionicFlagNovo = true;
          this.codigo = 0;
          this.codigo_ = '0';
  
      }
        }
  
  
      }
  
}
export class CalendarioEscolarDatas extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.CalendarioEscolarDatas';

  static criaColecao(lista: any){
    if(lista!=null){
      var retorno = new Array();
      for(let x = 0;x<lista.length;x++)
        retorno.push(new CalendarioEscolarDatas(lista[x]));
      return retorno;
    }
  }

    public codigo : number = 0 ;
    public codigo_ : String ;
    get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
    set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
    get codigoFormatado(): String {
      return (this.codigo_)
    }
    set codigoFormatado(valor: String) {
      this.codigo_ =  (valor);
      if(replaceAll(valor," ","") != "")
        this.codigo =  Mentor.stringToMoeda(valor);
    }

    public data : Date = null ;
    public data_ : String ;
    get dataFormatado(): String {
      if(typeof(this.data) != 'undefined' && this.data != null  )
      return Mentor.dateToString(this.data);
      else
        return  '' ;
    }
    set dataFormatado(valor: String) {
      this.data_ =  valor;
      if(replaceAll(this.data_,"_","").length ==10)
        this.data =  Mentor.stringToDate(valor);
    }
    get dataFormatadoIso(): String {
      return  Mentor.dateToStringIso(this.data)
    }
    set dataFormatadoIso(valor: String) {
      this.data =  Mentor.stringToDateIso(valor);
      this.data_ =  Mentor.dateToString(this.data);
    }

    public flagDiaLetivo : number = 0 ;
    public flagDiaLetivo_ : String ;
    get flagDiaLetivoSimNao(){ if (this.flagDiaLetivo == 1) return true; else return false;}
    set flagDiaLetivoSimNao(flag){ if (flag) this.flagDiaLetivo = 1; else this.flagDiaLetivo = 0;}
    get flagDiaLetivoFormatado(): String {
      return (this.flagDiaLetivo_)
    }
    set flagDiaLetivoFormatado(valor: String) {
      this.flagDiaLetivo_ =  (valor);
      if(replaceAll(valor," ","") != "")
        this.flagDiaLetivo =  Mentor.stringToMoeda(valor);
    }

    public descricao : String = '' ;
    public descricao_ : String ;
    public tipo : TipoCalendarioData ;

public listaAtributosKodefy: Array<string> ='codigo#data#flagDiaLetivo#descricao#'.split('#');
    constructor(objeto:any){
    super();
    if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;
        this.codigo = objeto.codigo;
        this.codigo_ = Mentor.intToString(this.codigo);
          if(typeof(objeto.data_) != 'undefined') { try{ 
  this.data_ = objeto.data_ ;
        this.data = Mentor.stringToDate(objeto.data_) ;
        this.dataFormatado = (objeto.data_) ;
} catch(err){alert(err); 
  throw err;} 
  }
else{
        this.data = Mentor.stringToDate(objeto.dataFormatado) ;
        this.data_ = (objeto.dataFormatado) ;}
        this.flagDiaLetivo = objeto.flagDiaLetivo;
        this.flagDiaLetivo_ = Mentor.intToString(this.flagDiaLetivo);
        this.descricao = objeto.descricao;

      if(objeto.tipo != null)
        this.tipo = new TipoCalendarioData(objeto.tipo);

    }
    else{
    if((objeto) == 'null'){
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.data = new Date();
        this.data_ = (this.dataFormatado) ;
        this.flagDiaLetivo = 0;
        this.flagDiaLetivo_ = '0';

      }else{
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.data = new Date();
        this.data_ = (this.dataFormatado) ;
        this.flagDiaLetivo = 0;
        this.flagDiaLetivo_ = '0';
        this.tipo = new TipoCalendarioData('null');

    }
      }


    }

}
export class TipoCalendarioData extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.educacao.beans.TipoCalendarioData';

  static criaColecao(lista: any){
    if(lista!=null){
      var retorno = new Array();
      for(let x = 0;x<lista.length;x++)
        retorno.push(new TipoCalendarioData(lista[x]));
      return retorno;
    }
  }

    public codigo : number = 0 ;
    public codigo_ : String ;
    get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
    set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
    get codigoFormatado(): String {
      return (this.codigo_)
    }
    set codigoFormatado(valor: String) {
      this.codigo_ =  (valor);
      if(replaceAll(valor," ","") != "")
        this.codigo =  Mentor.stringToMoeda(valor);
    }

    public nome : String = '' ;
    public nome_ : String ;

    public descricao : String = '' ;
    public descricao_ : String ;

    public sigla : String = '' ;
    public sigla_ : String ;

    public flagDiaEspecial : number = 0 ;
    public flagDiaEspecial_ : String ;
    get flagDiaEspecialSimNao(){ if (this.flagDiaEspecial == 1) return true; else return false;}
    set flagDiaEspecialSimNao(flag){ if (flag) this.flagDiaEspecial = 1; else this.flagDiaEspecial = 0;}
    public flagDiaEspecialFormatadoLista : formatadoLista[] = new Array();
    get flagDiaEspecialFormatado(){  return Mentor.formatadoLista(this.flagDiaEspecialFormatadoLista,this.flagDiaEspecial);}


public listaAtributosKodefy: Array<string> ='codigo#nome#descricao#sigla#flagDiaEspecial#'.split('#');
    constructor(objeto:any){
    super();
    if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
this.idApp = objeto.idApp;
this.nomeApp = objeto.nomeApp;
        this.codigo = objeto.codigo;
        this.codigo_ = Mentor.intToString(this.codigo);
        this.nome = objeto.nome;
        this.descricao = objeto.descricao;
        this.sigla = objeto.sigla;
        this.flagDiaEspecial = objeto.flagDiaEspecial;
        this.flagDiaEspecial_ = Mentor.intToString(this.flagDiaEspecial);

    }
    else{
    if((objeto) == 'null'){
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.flagDiaEspecial = 0;
        this.flagDiaEspecial_ = '0';

      }else{
this.ionicFlagNovo = true;
        this.codigo = 0;
        this.codigo_ = '0';
        this.flagDiaEspecial = 0;
        this.flagDiaEspecial_ = '0';

    }
      }

      this.flagDiaEspecialFormatadoLista.push(new formatadoLista(0,"Não"));
      this.flagDiaEspecialFormatadoLista.push(new formatadoLista(1,"Sim"));

    }

}
export class RegistroAulaFrequencia extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.RegistroAulaFrequencia';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new RegistroAulaFrequencia(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
  
      public flagFrequencia : number = 0 ;
      public flagFrequencia_ : String ;
      get flagFrequenciaSimNao(){ if (this.flagFrequencia == 1) return true; else return false;}
      set flagFrequenciaSimNao(flag){ if (flag) this.flagFrequencia = 1; else this.flagFrequencia = 0;}
      public flagFrequenciaFormatadoLista : formatadoLista[] = new Array();
      get flagFrequenciaFormatado(){  return Mentor.formatadoLista(this.flagFrequenciaFormatadoLista,this.flagFrequencia);}
  
  
      public flagFaltaJustificada : number = 0 ;
      public flagFaltaJustificada_ : String ;
      get flagFaltaJustificadaSimNao(){ if (this.flagFaltaJustificada == 1) return true; else return false;}
      set flagFaltaJustificadaSimNao(flag){ if (flag) this.flagFaltaJustificada = 1; else this.flagFaltaJustificada = 0;}
      public flagFaltaJustificadaFormatadoLista : formatadoLista[] = new Array();
      get flagFaltaJustificadaFormatado(){  return Mentor.formatadoLista(this.flagFaltaJustificadaFormatadoLista,this.flagFaltaJustificada);}
  
      public registroAula : RegistroAula ;
  
  public listaAtributosKodefy: Array<string> ='codigo#flagFrequencia#flagFaltaJustificada#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
         this.codigo = objeto.codigo;
         this.codigo_ = Mentor.intToString(this.codigo);
         this.flagFrequencia = objeto.flagFrequencia;
         this.flagFrequencia_ = Mentor.intToString(this.flagFrequencia);
         this.flagFaltaJustificada = objeto.flagFaltaJustificada;
         this.flagFaltaJustificada_ = Mentor.intToString(this.flagFaltaJustificada);
  
        if(objeto.registroAula != null)
          this.registroAula = new RegistroAula(objeto.registroAula);
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.flagFrequencia = 0;
         this.flagFrequencia_ = '0';
         this.flagFaltaJustificada = 0;
         this.flagFaltaJustificada_ = '0';
  
        }else{
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.flagFrequencia = 0;
         this.flagFrequencia_ = '0';
         this.flagFaltaJustificada = 0;
         this.flagFaltaJustificada_ = '0';
          this.registroAula = new RegistroAula('null');
  
      }
        }
  
        this.flagFrequenciaFormatadoLista.push(new formatadoLista(0,"Falta"));
        this.flagFrequenciaFormatadoLista.push(new formatadoLista(1,"Presente"));
        this.flagFaltaJustificadaFormatadoLista.push(new formatadoLista(0,"Não Justificada"));
        this.flagFaltaJustificadaFormatadoLista.push(new formatadoLista(1,"Falta Justificada"));
  
      }
  
}
export class RegistroAula extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.RegistroAula';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new RegistroAula(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
  
      public dataRegistro : Date = null ;
      public dataRegistro_ : String ;
      get dataRegistroFormatado(): String {
        if(typeof(this.dataRegistro) != 'undefined' && this.dataRegistro != null  )
        return Mentor.dateToString(this.dataRegistro);
        else
          return  '' ;
      }
      set dataRegistroFormatado(valor: String) {
        this.dataRegistro_ =  valor;
        if(replaceAll(this.dataRegistro_,"_","").length ==10)
          this.dataRegistro =  Mentor.stringToDate(valor);
      }
      get dataRegistroFormatadoIso(): String {
        return  Mentor.dateToStringIso(this.dataRegistro)
      }
      set dataRegistroFormatadoIso(valor: String) {
        this.dataRegistro =  Mentor.stringToDateIso(valor);
        this.dataRegistro_ =  Mentor.dateToString(this.dataRegistro);
      }
      public disciplina : ProfessorDisciplina ;
  
  public listaAtributosKodefy: Array<string> ='codigo#dataRegistro#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
         this.codigo = objeto.codigo;
         this.codigo_ = Mentor.intToString(this.codigo);
           if(typeof(objeto.dataRegistro_) != 'undefined') { try{ 
   this.dataRegistro_ = objeto.dataRegistro_ ;
         this.dataRegistro = Mentor.stringToDate(objeto.dataRegistro_) ;
         this.dataRegistroFormatado = (objeto.dataRegistro_) ;
  } catch(err){alert(err); 
   throw err;} 
   }
  else{
         this.dataRegistro = Mentor.stringToDate(objeto.dataRegistroFormatado) ;
         this.dataRegistro_ = (objeto.dataRegistroFormatado) ;}
  
        if(objeto.disciplina != null)
          this.disciplina = new ProfessorDisciplina(objeto.disciplina);
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.dataRegistro = new Date();
         this.dataRegistro_ = (this.dataRegistroFormatado) ;
  
        }else{
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.dataRegistro = new Date();
         this.dataRegistro_ = (this.dataRegistroFormatado) ;
          this.disciplina = new ProfessorDisciplina('null');
  
      }
        }
  
  
      }
  
}

export class AlunoNotasCaderneta extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.AlunoNotasCaderneta';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new AlunoNotasCaderneta(lista[x]));
        return retorno;
      }
    }
  
      public codigo : number = 0 ;
      public codigo_ : String ;
      get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
      set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
      get codigoFormatado(): String {
        return (this.codigo_)
      }
      set codigoFormatado(valor: String) {
        this.codigo_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.codigo =  Mentor.stringToMoeda(valor);
      }
  
      public notaUm : number = 0 ;
      public notaUm_ : String ;
      get notaUmSimNao(){ if (this.notaUm == 1) return true; else return false;}
      set notaUmSimNao(flag){ if (flag) this.notaUm = 1; else this.notaUm = 0;}
      get notaUmFormatado(): String {
        return (this.notaUm_)
      }
      set notaUmFormatado(valor: String) {
        this.notaUm_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaUm =  Mentor.stringToMoeda(valor);
      }
  
      public notaDois : number = 0 ;
      public notaDois_ : String ;
      get notaDoisSimNao(){ if (this.notaDois == 1) return true; else return false;}
      set notaDoisSimNao(flag){ if (flag) this.notaDois = 1; else this.notaDois = 0;}
      get notaDoisFormatado(): String {
        return (this.notaDois_)
      }
      set notaDoisFormatado(valor: String) {
        this.notaDois_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaDois =  Mentor.stringToMoeda(valor);
      }
  
      public notaTres : number = 0 ;
      public notaTres_ : String ;
      get notaTresSimNao(){ if (this.notaTres == 1) return true; else return false;}
      set notaTresSimNao(flag){ if (flag) this.notaTres = 1; else this.notaTres = 0;}
      get notaTresFormatado(): String {
        return (this.notaTres_)
      }
      set notaTresFormatado(valor: String) {
        this.notaTres_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaTres =  Mentor.stringToMoeda(valor);
      }
  
      public notaQuatro : number = 0 ;
      public notaQuatro_ : String ;
      get notaQuatroSimNao(){ if (this.notaQuatro == 1) return true; else return false;}
      set notaQuatroSimNao(flag){ if (flag) this.notaQuatro = 1; else this.notaQuatro = 0;}
      get notaQuatroFormatado(): String {
        return (this.notaQuatro_)
      }
      set notaQuatroFormatado(valor: String) {
        this.notaQuatro_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaQuatro =  Mentor.stringToMoeda(valor);
      }
  
      public notaRecuperacao : number = 0 ;
      public notaRecuperacao_ : String ;
      get notaRecuperacaoSimNao(){ if (this.notaRecuperacao == 1) return true; else return false;}
      set notaRecuperacaoSimNao(flag){ if (flag) this.notaRecuperacao = 1; else this.notaRecuperacao = 0;}
      get notaRecuperacaoFormatado(): String {
        return (this.notaRecuperacao_)
      }
      set notaRecuperacaoFormatado(valor: String) {
        this.notaRecuperacao_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaRecuperacao =  Mentor.stringToMoeda(valor);
      }
  
      public notaRecuperacaoFinal : number = 0 ;
      public notaRecuperacaoFinal_ : String ;
      get notaRecuperacaoFinalSimNao(){ if (this.notaRecuperacaoFinal == 1) return true; else return false;}
      set notaRecuperacaoFinalSimNao(flag){ if (flag) this.notaRecuperacaoFinal = 1; else this.notaRecuperacaoFinal = 0;}
      get notaRecuperacaoFinalFormatado(): String {
        return (this.notaRecuperacaoFinal_)
      }
      set notaRecuperacaoFinalFormatado(valor: String) {
        this.notaRecuperacaoFinal_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaRecuperacaoFinal =  Mentor.stringToMoeda(valor);
      }
  
      public media : number = 0 ;
      public media_ : String ;
      get mediaSimNao(){ if (this.media == 1) return true; else return false;}
      set mediaSimNao(flag){ if (flag) this.media = 1; else this.media = 0;}
      get mediaFormatado(): String {
        return (this.media_)
      }
      set mediaFormatado(valor: String) {
        this.media_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.media =  Mentor.stringToMoeda(valor);
      }
  
      public mediaRecuperacao : number = 0 ;
      public mediaRecuperacao_ : String ;
      get mediaRecuperacaoSimNao(){ if (this.mediaRecuperacao == 1) return true; else return false;}
      set mediaRecuperacaoSimNao(flag){ if (flag) this.mediaRecuperacao = 1; else this.mediaRecuperacao = 0;}
      get mediaRecuperacaoFormatado(): String {
        return (this.mediaRecuperacao_)
      }
      set mediaRecuperacaoFormatado(valor: String) {
        this.mediaRecuperacao_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.mediaRecuperacao =  Mentor.stringToMoeda(valor);
      }
  
      public status : number = 0 ;
      public status_ : String ;
      get statusSimNao(){ if (this.status == 1) return true; else return false;}
      set statusSimNao(flag){ if (flag) this.status = 1; else this.status = 0;}
      public statusFormatadoLista : formatadoLista[] = new Array();
      get statusFormatado(){  return Mentor.formatadoLista(this.statusFormatadoLista,this.status);}
  
  
      public recuperacaoUm : number = 0 ;
      public recuperacaoUm_ : String ;
      get recuperacaoUmSimNao(){ if (this.recuperacaoUm == 1) return true; else return false;}
      set recuperacaoUmSimNao(flag){ if (flag) this.recuperacaoUm = 1; else this.recuperacaoUm = 0;}
      get recuperacaoUmFormatado(): String {
        return (this.recuperacaoUm_)
      }
      set recuperacaoUmFormatado(valor: String) {
        this.recuperacaoUm_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.recuperacaoUm =  Mentor.stringToMoeda(valor);
      }
  
      public recuperacaoDois : number = 0 ;
      public recuperacaoDois_ : String ;
      get recuperacaoDoisSimNao(){ if (this.recuperacaoDois == 1) return true; else return false;}
      set recuperacaoDoisSimNao(flag){ if (flag) this.recuperacaoDois = 1; else this.recuperacaoDois = 0;}
      get recuperacaoDoisFormatado(): String {
        return (this.recuperacaoDois_)
      }
      set recuperacaoDoisFormatado(valor: String) {
        this.recuperacaoDois_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.recuperacaoDois =  Mentor.stringToMoeda(valor);
      }
  
      public recuperacaoTres : number = 0 ;
      public recuperacaoTres_ : String ;
      get recuperacaoTresSimNao(){ if (this.recuperacaoTres == 1) return true; else return false;}
      set recuperacaoTresSimNao(flag){ if (flag) this.recuperacaoTres = 1; else this.recuperacaoTres = 0;}
      get recuperacaoTresFormatado(): String {
        return (this.recuperacaoTres_)
      }
      set recuperacaoTresFormatado(valor: String) {
        this.recuperacaoTres_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.recuperacaoTres =  Mentor.stringToMoeda(valor);
      }
  
      public recuperacaoQuatro : number = 0 ;
      public recuperacaoQuatro_ : String ;
      get recuperacaoQuatroSimNao(){ if (this.recuperacaoQuatro == 1) return true; else return false;}
      set recuperacaoQuatroSimNao(flag){ if (flag) this.recuperacaoQuatro = 1; else this.recuperacaoQuatro = 0;}
      get recuperacaoQuatroFormatado(): String {
        return (this.recuperacaoQuatro_)
      }
      set recuperacaoQuatroFormatado(valor: String) {
        this.recuperacaoQuatro_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.recuperacaoQuatro =  Mentor.stringToMoeda(valor);
      }
  
      public mediaFinal : number = 0 ;
      public mediaFinal_ : String ;
      get mediaFinalSimNao(){ if (this.mediaFinal == 1) return true; else return false;}
      set mediaFinalSimNao(flag){ if (flag) this.mediaFinal = 1; else this.mediaFinal = 0;}
      get mediaFinalFormatado(): String {
        return (this.mediaFinal_)
      }
      set mediaFinalFormatado(valor: String) {
        this.mediaFinal_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.mediaFinal =  Mentor.stringToMoeda(valor);
      }
  
      public notaRecUm : number = 0 ;
      public notaRecUm_ : String ;
      get notaRecUmSimNao(){ if (this.notaRecUm == 1) return true; else return false;}
      set notaRecUmSimNao(flag){ if (flag) this.notaRecUm = 1; else this.notaRecUm = 0;}
      get notaRecUmFormatado(): String {
        return (this.notaRecUm_)
      }
      set notaRecUmFormatado(valor: String) {
        this.notaRecUm_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaRecUm =  Mentor.stringToMoeda(valor);
      }
  
      public notaRecDois : number = 0 ;
      public notaRecDois_ : String ;
      get notaRecDoisSimNao(){ if (this.notaRecDois == 1) return true; else return false;}
      set notaRecDoisSimNao(flag){ if (flag) this.notaRecDois = 1; else this.notaRecDois = 0;}
      get notaRecDoisFormatado(): String {
        return (this.notaRecDois_)
      }
      set notaRecDoisFormatado(valor: String) {
        this.notaRecDois_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaRecDois =  Mentor.stringToMoeda(valor);
      }
  
      public notaRecTres : number = 0 ;
      public notaRecTres_ : String ;
      get notaRecTresSimNao(){ if (this.notaRecTres == 1) return true; else return false;}
      set notaRecTresSimNao(flag){ if (flag) this.notaRecTres = 1; else this.notaRecTres = 0;}
      get notaRecTresFormatado(): String {
        return (this.notaRecTres_)
      }
      set notaRecTresFormatado(valor: String) {
        this.notaRecTres_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaRecTres =  Mentor.stringToMoeda(valor);
      }
  
      public notaRecQuatro : number = 0 ;
      public notaRecQuatro_ : String ;
      get notaRecQuatroSimNao(){ if (this.notaRecQuatro == 1) return true; else return false;}
      set notaRecQuatroSimNao(flag){ if (flag) this.notaRecQuatro = 1; else this.notaRecQuatro = 0;}
      get notaRecQuatroFormatado(): String {
        return (this.notaRecQuatro_)
      }
      set notaRecQuatroFormatado(valor: String) {
        this.notaRecQuatro_ =  (valor);
        if(replaceAll(valor," ","") != "")
          this.notaRecQuatro =  Mentor.stringToMoeda(valor);
      }
      public aluno : AlunosMatriculas ;
      public caderneta : CadernetaEscolar ;
  
  public listaAtributosKodefy: Array<string> ='codigo#notaUm#notaDois#notaTres#notaQuatro#notaRecuperacao#notaRecuperacaoFinal#media#mediaRecuperacao#status#recuperacaoUm#recuperacaoDois#recuperacaoTres#recuperacaoQuatro#mediaFinal#notaRecUm#notaRecDois#notaRecTres#notaRecQuatro#'.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
         this.codigo = objeto.codigo;
         this.codigo_ = Mentor.intToString(this.codigo);
         this.notaUm = objeto.notaUm;
         this.notaUm_ = Mentor.intToString(this.notaUm);
         this.notaDois = objeto.notaDois;
         this.notaDois_ = Mentor.intToString(this.notaDois);
         this.notaTres = objeto.notaTres;
         this.notaTres_ = Mentor.intToString(this.notaTres);
         this.notaQuatro = objeto.notaQuatro;
         this.notaQuatro_ = Mentor.intToString(this.notaQuatro);
         this.notaRecuperacao = objeto.notaRecuperacao;
         this.notaRecuperacao_ = Mentor.intToString(this.notaRecuperacao);
         this.notaRecuperacaoFinal = objeto.notaRecuperacaoFinal;
         this.notaRecuperacaoFinal_ = Mentor.intToString(this.notaRecuperacaoFinal);
         this.media = objeto.media;
         this.media_ = Mentor.intToString(this.media);
         this.mediaRecuperacao = objeto.mediaRecuperacao;
         this.mediaRecuperacao_ = Mentor.intToString(this.mediaRecuperacao);
         this.status = objeto.status;
         this.status_ = Mentor.intToString(this.status);
         this.recuperacaoUm = objeto.recuperacaoUm;
         this.recuperacaoUm_ = Mentor.intToString(this.recuperacaoUm);
         this.recuperacaoDois = objeto.recuperacaoDois;
         this.recuperacaoDois_ = Mentor.intToString(this.recuperacaoDois);
         this.recuperacaoTres = objeto.recuperacaoTres;
         this.recuperacaoTres_ = Mentor.intToString(this.recuperacaoTres);
         this.recuperacaoQuatro = objeto.recuperacaoQuatro;
         this.recuperacaoQuatro_ = Mentor.intToString(this.recuperacaoQuatro);
         this.mediaFinal = objeto.mediaFinal;
         this.mediaFinal_ = Mentor.intToString(this.mediaFinal);
         this.notaRecUm = objeto.notaRecUm;
         this.notaRecUm_ = Mentor.intToString(this.notaRecUm);
         this.notaRecDois = objeto.notaRecDois;
         this.notaRecDois_ = Mentor.intToString(this.notaRecDois);
         this.notaRecTres = objeto.notaRecTres;
         this.notaRecTres_ = Mentor.intToString(this.notaRecTres);
         this.notaRecQuatro = objeto.notaRecQuatro;
         this.notaRecQuatro_ = Mentor.intToString(this.notaRecQuatro);
  
        if(objeto.aluno != null)
          this.aluno = new AlunosMatriculas(objeto.aluno);
  
        if(objeto.caderneta != null)
          this.caderneta = new CadernetaEscolar(objeto.caderneta);
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.notaUm = 0;
         this.notaUm_ = '0,00';
         this.notaDois = 0;
         this.notaDois_ = '0,00';
         this.notaTres = 0;
         this.notaTres_ = '0,00';
         this.notaQuatro = 0;
         this.notaQuatro_ = '0,00';
         this.notaRecuperacao = 0;
         this.notaRecuperacao_ = '0,00';
         this.notaRecuperacaoFinal = 0;
         this.notaRecuperacaoFinal_ = '0,00';
         this.media = 0;
         this.media_ = '0,00';
         this.mediaRecuperacao = 0;
         this.mediaRecuperacao_ = '0,00';
         this.status = 0;
         this.status_ = '0';
         this.recuperacaoUm = 0;
         this.recuperacaoUm_ = '0,00';
         this.recuperacaoDois = 0;
         this.recuperacaoDois_ = '0,00';
         this.recuperacaoTres = 0;
         this.recuperacaoTres_ = '0,00';
         this.recuperacaoQuatro = 0;
         this.recuperacaoQuatro_ = '0,00';
         this.mediaFinal = 0;
         this.mediaFinal_ = '0,00';
         this.notaRecUm = 0;
         this.notaRecUm_ = '0,00';
         this.notaRecDois = 0;
         this.notaRecDois_ = '0,00';
         this.notaRecTres = 0;
         this.notaRecTres_ = '0,00';
         this.notaRecQuatro = 0;
         this.notaRecQuatro_ = '0,00';
  
        }else{
  this.ionicFlagNovo = true;
         this.codigo = 0;
         this.codigo_ = '0';
         this.notaUm = 0;
         this.notaUm_ = '0,00';
         this.notaDois = 0;
         this.notaDois_ = '0,00';
         this.notaTres = 0;
         this.notaTres_ = '0,00';
         this.notaQuatro = 0;
         this.notaQuatro_ = '0,00';
         this.notaRecuperacao = 0;
         this.notaRecuperacao_ = '0,00';
         this.notaRecuperacaoFinal = 0;
         this.notaRecuperacaoFinal_ = '0,00';
         this.media = 0;
         this.media_ = '0,00';
         this.mediaRecuperacao = 0;
         this.mediaRecuperacao_ = '0,00';
         this.status = 0;
         this.status_ = '0';
         this.recuperacaoUm = 0;
         this.recuperacaoUm_ = '0,00';
         this.recuperacaoDois = 0;
         this.recuperacaoDois_ = '0,00';
         this.recuperacaoTres = 0;
         this.recuperacaoTres_ = '0,00';
         this.recuperacaoQuatro = 0;
         this.recuperacaoQuatro_ = '0,00';
         this.mediaFinal = 0;
         this.mediaFinal_ = '0,00';
         this.notaRecUm = 0;
         this.notaRecUm_ = '0,00';
         this.notaRecDois = 0;
         this.notaRecDois_ = '0,00';
         this.notaRecTres = 0;
         this.notaRecTres_ = '0,00';
         this.notaRecQuatro = 0;
         this.notaRecQuatro_ = '0,00';
          this.aluno = new AlunosMatriculas('null');
          this.caderneta = new CadernetaEscolar('null');
  
      }
        }
  
        this.statusFormatadoLista.push(new formatadoLista(1,"APROVADO"));
        this.statusFormatadoLista.push(new formatadoLista(2,"REPROVADO"));
        this.statusFormatadoLista.push(new formatadoLista(3,"RECUPERAÇÃO"));
        this.statusFormatadoLista.push(new formatadoLista(4,"REPROVADO APÓS RECUPERAÇÃO"));
        this.statusFormatadoLista.push(new formatadoLista(5,"APROVADO APÓS RECUPERAÇÃO"));
        this.statusFormatadoLista.push(new formatadoLista(6,"RECUPERAÇÃO FINAL"));
        this.statusFormatadoLista.push(new formatadoLista(7,"TRANSFERIDO"));
  
      }
  
  }
  
  
  export class CadernetaEscolar extends ionicClasseBase {
  public static mentorNomeClasse = 'br.com.educacao.beans.CadernetaEscolar';
  
    static criaColecao(lista: any){
      if(lista!=null){
        var retorno = new Array();
        for(let x = 0;x<lista.length;x++)
          retorno.push(new CadernetaEscolar(lista[x]));
        return retorno;
      }
    }
      public disciplina : ProfessorDisciplina ;
  
  public listaAtributosKodefy: Array<string> =''.split('#');
      constructor(objeto:any){
      super();
      if(objeto != null && objeto != 'null'){
  if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
  this.idApp = objeto.idApp;
  this.nomeApp = objeto.nomeApp;
  
        if(objeto.disciplina != null)
          this.disciplina = new ProfessorDisciplina(objeto.disciplina);
  
      }
      else{
      if((objeto) == 'null'){
  this.ionicFlagNovo = true;
  
        }else{
  this.ionicFlagNovo = true;
          this.disciplina = new ProfessorDisciplina('null');
  
      }
        }
  
  
      }
  
  }