# RT1

## Desenvolva o código fonte, das classes, a partir do diagrama UML

Atenção aos atributos de cada classe e seus tipos.

```mermaid
classDiagram
    direction TB


    Empresa "1" -- "0..*" Funcionario : possui
    Empresa "1" -- "0..*" Telefone : tem
    Empresa "1" -- "1" Endereco : localizada em

    Funcionario "1" -- "1" Endereco : reside em
    Funcionario "1" -- "1..*" Telefone : usa

    class Empresa {
        +string razaoSocial
        +string nomeFantasia
        +string cnpj
        +Endereco endereco
        +Funcionario[] funcionarios
    }

    class Funcionario {
        +string nome
        +string matricula
        +string cpf
        +Endereco endereco
        +Telefone[] telefones
    }

    class Endereco {
        +number numero
        +string rua
        +string bairro
        +string cidade
    }

    class Telefone {
        +string ddd
        +string numero
    }

    class Empresa{
        constructor(Funcionario[] funcionarios, Endereco endereco, string razaoSocial, string nomeFantasia, string cnpj)
    }

    class Funcionario {
        constructor(string nome, string matricula, string cpf, Endereco endereco, Telefone telefone)
    }

    class Endereco {
        constructor(number numero, string rua, string bairro, string cidade)
    }

    class Telefone {
        constructor(string ddd, string numero)
    }
```

## Faça o teu código funcionar!

```typescript
import Descritor from "../models/descritorEmpresa"
import Empresa from "../models/Empresa";
import Funcionario from "../models/Funcionario";
import Endereco from "../models/Endereco";
import Telefone from "../models/Telefone";



//Declaração das variáveis
let end = new Endereco(194, "Rua das Rosas", "Jardim Florestal", "Nova Horizonte");
let endEmp = new Endereco(675, "Avenida 13 de Março", "Jardim Industrial", "São Carlos");
let endEmp2 = new Endereco(684, "Rua das Rosas", "Jardim Florestal", "São Paulo");

let tel = new Telefone("(22)", "99764-4137");
let telFunc = new Telefone("(12)", "99621-6574")
let emp = new Funcionario("Pietra", "164749813", "764.419.481-84", endEmp, tel);
let emp2 = new Funcionario("Ana", "68461385", "123.468.349-68", endEmp2, telFunc)


//Lista de funcionários
let funcionarios = [emp, emp2];

//Lista de telefones
let tel1 = new Telefone("(12)", "9944-3574");
let tel2 = new Telefone("(12)", "3349-8541");

let telefones = [tel1, tel2];

let company = new Empresa("Netflix Entretenimento Brasil LTDA", "Netflix", "13.590.585/0001", end, funcionarios);


let descritor = new Descritor()
descritor.descrever(company)
```

Crie um método para imprimir, no terminal, os atributos de uma empresa. Use o código como exemplo!

## Saída do console
    Razão Social: Netflix Entretenimento Brasil LTDA
    Nome Fantasia: Netflix
    CNPJ: 13.590.585/0001
    Endereço:
    Rua: Rua das Rosas, Bairro: Jardim Florestal, Cidade: Nova Horizonte, Número: 194

    Funcionários:
    Nome: Pietra
    Matrícula: 164749813
    CPF: 764.419.481-84
    Rua: Avenida 13 de Março, Bairro: Jardim Industrial, Cidade: São Carlos, Número: 675


    Nome: Ana
    Matrícula: 68461385
    CPF: 123.468.349-68
    Rua: Rua das Rosas, Bairro: Jardim Florestal, Cidade: São Paulo, Número: 684
