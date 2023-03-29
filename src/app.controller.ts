import { Controller, Get, Header, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Estudante } from './types';

@Controller('/alunos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Header(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'",
  )
  @HttpCode(200)
  @Get()
  async findAll(): Promise<Estudante[]> {
    return this.appService.findAll();
  }

  @Header(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'",
  )
  @HttpCode(200)
  @Get('/:id')
  async findOne(@Param() id: number): Promise<Estudante> {
    return this.appService.findOne(id);
  }
}
