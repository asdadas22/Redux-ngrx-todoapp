import { Pipe, PipeTransform } from '@angular/core';
import { allFilter } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], allfilter: allFilter): Todo[] {
    
    switch( allfilter ) {
      case 'completados':
        return value.filter( todo => todo.estado);
      
      case 'pendientes':
        return value.filter( todo => !todo.estado);

      default:
        console.log(value);
        return value;
    }

  }

}
