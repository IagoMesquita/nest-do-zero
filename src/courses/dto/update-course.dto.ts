import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}

// export class UpdateCourseDto {
//   readonly name?: string;
//   readonly description?: string;
//   readonly tags?: string[];
// }

/*
  Para não repetir o dto de Create e pelo fato do dto de Update
  ser opcional, podemos usar o Patitial da biblioteca @nestjs/mapped-types
*/
