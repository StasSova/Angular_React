import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], searchStr: string, fieldName: string = 'name'): any[] {
    try {
      if (arr.length === 0 || searchStr === '') {
        return arr;
      }
      return arr.filter((item: any) =>
        item[fieldName].toLowerCase().includes(searchStr.toLowerCase())
      );
    } catch (ex) {
      console.log(ex);
    }
    return arr;
  }
}
