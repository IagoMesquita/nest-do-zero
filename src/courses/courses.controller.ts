import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// @Controller()
@Controller('courses')
export class CoursesController {
  // @Get('courses')
  @Get()
  findAll() {
    return 'Lista de Cursos';
  }

  @Get(':id')
  // findOne(@Param() params) {
  //   return `Curso #${params.id}`;
  // }
  // desconstruindo:
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  // para pegar algo especifoco, descontruo oq quero pegar
  create(@Body('price') body) {
    return body;
  }
}
