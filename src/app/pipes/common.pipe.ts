import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'common'
})
export class CommonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
@Pipe({
  name: 'FilterList'
})
export class FilterList implements PipeTransform {
  transform(array: any[], field: string, data:any): any {
    return array.filter(function(f){
      return f[field] == data;
    })
  }
}