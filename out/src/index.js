"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var descritorEmpresa_1 = __importDefault(require("../models/descritorEmpresa"));
var Empresa_1 = __importDefault(require("../models/Empresa"));
var Funcionario_1 = __importDefault(require("../models/Funcionario"));
var Endereco_1 = __importDefault(require("../models/Endereco"));
var Telefone_1 = __importDefault(require("../models/Telefone"));
//Declaração das variáveis
var end = new Endereco_1.default(194, "Rua das Rosas", "Jardim Florestal", "Nova Horizonte");
var endEmp = new Endereco_1.default(675, "Avenida 13 de Março", "Jardim Industrial", "São Carlos");
var endEmp2 = new Endereco_1.default(684, "Rua das Rosas", "Jardim Florestal", "São Paulo");
var tel = new Telefone_1.default("(22)", "99764-4137");
var telFunc = new Telefone_1.default("(12)", "99621-6574");
var emp = new Funcionario_1.default("Pietra", "164749813", "764.419.481-84", endEmp, tel);
var emp2 = new Funcionario_1.default("Ana", "68461385", "123.468.349-68", endEmp2, telFunc);
//Lista de funcionários
var funcionarios = [emp, emp2];
//Lista de telefones
var tel1 = new Telefone_1.default("(12)", "9944-3574");
var tel2 = new Telefone_1.default("(12)", "3349-8541");
var telefones = [tel1, tel2];
var company = new Empresa_1.default("Netflix Entretenimento Brasil LTDA", "Netflix", "13.590.585/0001", end, funcionarios);
var descritor = new descritorEmpresa_1.default();
descritor.descrever(company);
