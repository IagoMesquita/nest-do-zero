import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    this.courseService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.courseService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}

/*
  Nome das Rotas: a rota pode ser passada no @Controller e implementada nos verbos, ou podem ser passadar direto
  nos verbos:
  @Controller()
  @Get('courses')
  
  Rotas aninhadas podemos fazer
    @Controller('products')
    @get('sapatos')
    equivalente a http://localhost:3000/produtos/sapatos

  Desconstruindo: parametro, aqui desconstruimos com '' e não com {}
    findOne(@Param() params) {
      return `Curso #${params.id}`;
    }
    findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }
  
  Status Code:
  Status Estático: usamos @HttpCode com o número do status, ou usamos o HttpStatus como parametro 
  util qando código de status é estático
    @HttpCode(HttpStatus.NO_CONTENT)

  Status dinâmico: Aqui usamos um Status personalizado, bem parecido com o que fazemos no Express. 
  Usando o @Res como parametro do method e recebendo response. Retornamos o status e send ou json
  de dentro do response, como no Expresss.
    @Get('listagem')
    findLis(@Res() response) {
      return response.status(200).send('Lista de produtos com @Res');
    }
 

  Descontruido do req Body: se descontruirmo um item do body, ele retorna apenas o que foi desconstruido
  Passando Status: Passando status NO_CONTENT, retorna 204 e não retornar nada, mesmo com "return"
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  // para pegar algo especifoco, descontruo oq quero pegar
  create(@Body('price') body) {
    return body;
  }
*/
