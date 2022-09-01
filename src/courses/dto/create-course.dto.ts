import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsString({ each: true })
  readonly tags: string[];
}

/*
  Como nao vamos manipular esse atributos, podemos defini-los 
  como somete de leitura, para deixar a aplicação ainda mais 
  seguro, visto que só ira definir o corpo do que vem na requisição
*/
