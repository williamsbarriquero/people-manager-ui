import { Endereco } from './endereco'

export class Pessoa {
  id: number
  nome: string;
  email: string;
  endereco: Endereco;
  dataNascimento: string
  cpf: string;
  nacionalidade: string;
  naturalidade: string;
  sexo: string;
}
