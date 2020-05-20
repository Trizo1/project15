import { Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../worker.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(workers: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return workers;
    } else {
      return workers.filter((worker) => {
        return worker.name.toLowerCase().includes(searchStr.toLowerCase()) || worker.surname.toLowerCase().includes(searchStr.toLowerCase())
          || worker.phone.includes(searchStr);
      });
    }
  }
}
