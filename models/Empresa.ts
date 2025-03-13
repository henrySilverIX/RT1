import Funcionario from "./Funcionario";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Empresa{
    public razaoSocial: string;
    public nomeFantasia: string;
    public cnpj: string;
    public endereco: Endereco;
    public funcionarios: Funcionario[];
    public telefones: Telefone[];

    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionarios: Funcionario[]){
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios
    }

    descritor(){
        return `
    Razão Social: ${this.razaoSocial}
    Nome Fantasia: ${this.nomeFantasia}
    CNPJ: ${this.cnpj}
    Endereço:
    Rua: ${this.endereco.rua}, Bairro: ${this.endereco.bairro}, Cidade: ${this.endereco.cidade}, Número: ${this.endereco.numero}

    Funcionários: ${this.funcionarios.map(funcionario => `
    Nome: ${funcionario.nome}
    Matrícula: ${funcionario.matricula}
    CPF: ${funcionario.cpf}
    Rua: ${funcionario.endereco.rua}, Bairro: ${funcionario.endereco.bairro}, Cidade: ${funcionario.endereco.cidade}, Número: ${funcionario.endereco.numero}
    `).join("\n\n")}`};
}