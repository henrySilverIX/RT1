"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        console.log("\n    Raz\u00E3o Social: ".concat(empresa.razaoSocial, "\n    Nome Fantasia: ").concat(empresa.nomeFantasia, "\n    CNPJ: ").concat(empresa.cnpj, "\n    Endere\u00E7o:\n    Rua: ").concat(empresa.endereco.rua, ", Bairro: ").concat(empresa.endereco.bairro, ", Cidade: ").concat(empresa.endereco.cidade, ", N\u00FAmero: ").concat(empresa.endereco.numero, "\n\n    Funcion\u00E1rios: ").concat(empresa.funcionarios.map(function (funcionario) { return "\n    Nome: ".concat(funcionario.nome, "\n    Matr\u00EDcula: ").concat(funcionario.matricula, "\n    CPF: ").concat(funcionario.cpf, "\n    Rua: ").concat(funcionario.endereco.rua, ", Bairro: ").concat(funcionario.endereco.bairro, ", Cidade: ").concat(funcionario.endereco.cidade, ", N\u00FAmero: ").concat(funcionario.endereco.numero, "\n    "); }).join("\n")));
    };
    return Descritor;
}());
exports.default = Descritor;
