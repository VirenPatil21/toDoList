import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableFilter'
 })
 export class TableFilterPipe implements PipeTransform {
 
    transform(list: any[], value: string) {
 
       // If there's a value passed (true or false) it will filter the list otherwise it will return the original unfiltered list. 
       return value ? list.filter(item => item.completed === Boolean(value)) : list;
    }
 }