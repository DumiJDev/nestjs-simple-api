export type Estudante = {
  id: number;
  dataDeNascimento: string;
  nome: string;
  genero: string;
  email: string;
  telefone: string;
  endereco: string;
  notas: { disciplina: number; valor: number }[];
  faltas: { disciplina: number; data: string }[];
};
