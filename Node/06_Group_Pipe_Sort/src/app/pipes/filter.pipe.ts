import { Pipe, PipeTransform } from '@angular/core';
import { Group, Audience } from '../classes';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: Audience[], group: Group): Audience[] {
    try {
      console.log(group.name);
      if (arr.length === 0 || !group || group.name === 'all') {
        return arr;
      }
      return arr.filter(
        (x) => x.faculty === group.faculty && x.capacity >= group.size
      );
    } catch (ex) {
      console.log(ex);
      return arr;
    }
  }
}
