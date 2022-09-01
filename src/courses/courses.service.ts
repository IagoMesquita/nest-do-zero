import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Um framework Node.js para o back-and',
      tags: ['node.js', 'nest.js', 'javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find(
      (course: Course) => course.id === Number(id),
    );

    if (!course) {
      // throw new HttpException(`Course ID ${id} not found`, 404);
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
    this.courses[indexCourse] = {
      ...this.courses[indexCourse],
      ...updateCourseDto,
    };
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}

/* 
  Tratando Exceções:
  usar " throw new HttpException" que recebe dois parametros.
  A mensagem a ser exibida e o status, que pode ser direto o numero ou
  ou os metodos que vem no Nest
     throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND );
*/
