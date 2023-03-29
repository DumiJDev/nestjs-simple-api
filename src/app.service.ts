import { Injectable } from '@nestjs/common';

import Alunos from './data';
import { Estudante } from './types';

@Injectable()
export class AppService {
  async findAll(): Promise<Estudante[]> {
    return Alunos;
  }

  async findOne(id: number): Promise<Estudante> {
    return Alunos.filter((aluno) => aluno.id === id)[0];
  }
}
