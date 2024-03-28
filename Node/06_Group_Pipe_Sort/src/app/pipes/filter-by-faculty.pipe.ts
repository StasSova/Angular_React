import { Pipe, PipeTransform } from '@angular/core';
import { Audience } from '../classes';

@Pipe({
  name: 'filterByFaculty',
})
export class FilterByFacultyPipe implements PipeTransform {
  transform(arr: Audience[], faculty: string): Audience[] {
    try {
      console.log(faculty);
      if (
        !arr ||
        arr.length === 0 ||
        faculty === null ||
        faculty === undefined
      ) {
        return arr;
      }
      if (faculty === 'all') {
        return arr;
      }
      return arr.filter((x) => x.faculty === faculty);
    } catch (ex) {
      console.log(ex);
      return arr;
    }
  }
}
