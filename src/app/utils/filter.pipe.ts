import { Pipe, PipeTransform} from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({name: 'myFilter', pure: false})
export class MyFilterPipe implements PipeTransform {
  transform(pokes: any[], filter: string):any {
    if(!pokes || !filter ){
      return pokes;
    }
    // filter pokes array, pokes which match and return true will be
    // kept, false will be filtered out
    return pokes.filter(item => item.name.indexOf(filter) !== -1);
  }
}
