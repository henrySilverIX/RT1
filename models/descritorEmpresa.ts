import Empresa from "./Empresa";

export default class Descritor{
    

    descrever(empresa:Empresa):void{
        console.log(`
    Razão Social: ${empresa.razaoSocial}
    Nome Fantasia: ${empresa.nomeFantasia}
    CNPJ: ${empresa.cnpj}
    Endereço:
    Rua: ${empresa.endereco.rua}, Bairro: ${empresa.endereco.bairro}, Cidade: ${empresa.endereco.cidade}, Número: ${empresa.endereco.numero}

    Funcionários: ${empresa.funcionarios.map(funcionario => `
    Nome: ${funcionario.nome}
    Matrícula: ${funcionario.matricula}
    CPF: ${funcionario.cpf}
    Rua: ${funcionario.endereco.rua}, Bairro: ${funcionario.endereco.bairro}, Cidade: ${funcionario.endereco.cidade}, Número: ${funcionario.endereco.numero}
    `).join("\n")}`)
    }
}