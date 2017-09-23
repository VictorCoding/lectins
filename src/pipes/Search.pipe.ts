import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value, query) {

    return value.filter(item => item.toLowerCase().includes(query))
  }
}
