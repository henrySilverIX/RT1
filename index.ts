import Empresa from "./models/Empresa";
import Funcionario from "./models/Funcionario";
import Endereco from "./models/Endereco";
import Telefone from "./models/Telefone";


//Declaração das variáveis
let end = new Endereco(194, "Rua das Rosas", "Jardim Florestal", "Nova Horizonte");
let endEmp = new Endereco(675, "Avenida 13 de Março", "Jardim Industrial", "São Carlos");

let tel = new Telefone("(22)", "99764-4137");
let emp = new Funcionario("Pietra", "164749813", "764.419.481-84", endEmp, tel);

//Lista de funcionários
let funcionarios = [emp];

//Lista de telefones
let tel1 = new Telefone("(12)", "9944-3574");
let tel2 = new Telefone("(12)", "3349-8541");



let telefones = [tel1, tel2];


let company = new Empresa("Netflix Entretenimento Brasil LTDA", "Netflix", "13.590.585/0001", end, funcionarios);

console.log(company.descritor())