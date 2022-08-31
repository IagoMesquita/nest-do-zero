import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

// @Controller()
@Controller('courses')
export class CoursesController {
  // @Get('courses')
  @Get()
  findAll() {
    return 'Lista de Cursos';
  }

  /*Aqui usamos um Status personalizado, bem parecido com o que fazemos no Express. Usando o @Res*/
  @Get('listagem')
  findLis(@Res() response) {
    return response.status(200).send('Lista de produtos com @Res');
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
  /* passa um status que não é default, podemos passar o numero ou usar o HttpStatus 
  util qando código de status é estático*/
  @HttpCode(HttpStatus.NO_CONTENT)
  // para pegar algo especifoco, descontruo oq quero pegar
  create(@Body('price') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Exclusão do Curso #${id}`;
  }
}
