export class CreateCourseDto {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly tags: string[];
}

/*
  Como nao vamos manipular esse atributos, podemos defini-los 
  como somete de leitura, para deixar a aplicação ainda mais 
  seguro, visto que só ira definir o corpo do que vem na requisição
*/
