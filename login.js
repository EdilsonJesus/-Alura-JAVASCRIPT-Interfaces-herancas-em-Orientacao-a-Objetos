import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor  = new Diretor ("RIcardo", 10000, 1234567800);
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Pedro", 50000, 10987654321);
gerente.cadastrarSenha("654321")

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "654321");

console.log(estaLogado, gerenteLogado);