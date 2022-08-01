import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

  transform(num: number): string | number {
    if(num < 0 || num > 9) return num;
    const words = ['zero', 'one' , 'two' , 'three']
    return words[num];
}

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

}
