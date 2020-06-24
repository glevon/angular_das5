import { Pipe, PipeTransform } from '@angular/core';
import {Group} from '../app/services/groups.service'
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Group[], ...args: any[]): Group[] {
    console.log(value,args[0]);
    return value.filter(a=>a.groupName.search(new RegExp(args[0],"ig"))!=-1);

  }

}
