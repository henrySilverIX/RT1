"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa_1 = require("./models/Empresa");
var Funcionario_1 = require("./models/Funcionario");
var Endereco_1 = require("./models/Endereco");
var Telefone_1 = require("./models/Telefone");
//Declaração das variáveis
var end = new Endereco_1.default(194, "Rua das Rosas", "Jardim Florestal", "Nova Horizonte");
var endEmp = new Endereco_1.default(675, "Avenida 13 de Março", "Jardim Industrial", "São Carlos");
var tel = new Telefone_1.default("(22)", "99764-4137");
var emp = new Funcionario_1.default("Pietra", "164749813", "764.419.481-84", endEmp, tel);
//Lista de funcionários
var funcionarios = [emp];
//Lista de telefones
var tel1 = new Telefone_1.default("(12)", "9944-3574");
var tel2 = new Telefone_1.default("(12)", "3349-8541");
var telefones = [tel1, tel2];
var company = new Empresa_1.default("Netflix Entretenimento Brasil LTDA", "Netflix", "13.590.585/0001", end, funcionarios);
console.log(company.descritor());
