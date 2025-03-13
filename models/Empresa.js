"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(razaoSocial, nomeFantasia, cnpj, endereco, funcionarios) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios;
    }
    Empresa.prototype.descritor = function () {
        return "\n    Raz\u00E3o Social: ".concat(this.razaoSocial, "\n    Nome Fantasia: ").concat(this.nomeFantasia, "\n    CNPJ: ").concat(this.cnpj, "\n    Endere\u00E7o:\n    Rua: ").concat(this.endereco.rua, ", Bairro: ").concat(this.endereco.bairro, ", Cidade: ").concat(this.endereco.cidade, ", N\u00FAmero: ").concat(this.endereco.numero, "\n\n    Funcion\u00E1rios: ").concat(this.funcionarios.map(function (funcionario) { return "\n    Nome: ".concat(funcionario.nome, "\n    Matr\u00EDcula: ").concat(funcionario.matricula, "\n    CPF: ").concat(funcionario.cpf, "\n    Rua: ").concat(funcionario.endereco.rua, ", Bairro: ").concat(funcionario.endereco.bairro, ", Cidade: ").concat(funcionario.endereco.cidade, ", N\u00FAmero: ").concat(funcionario.endereco.numero, "\n    "); }).join("\n\n"), "\n    ");
    };
    ;
    return Empresa;
}());
exports.default = Empresa;
