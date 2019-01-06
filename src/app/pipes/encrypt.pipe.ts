import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encrypt'
})
export class EncryptPipe implements PipeTransform {

  transform(value: string, flag:boolean = true): string {
    if (flag) {
      let response = "";

      for (let i = 0; i < value.length; i++) {
        response += '*';
      }
      
      return response;
    } else {
      return value;
    }
  }

}
