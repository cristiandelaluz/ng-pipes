import { Component } from '@angular/core';
import { resolve } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Cristian';
  fullName:string = 'cristian dE lA luZ flores';
  numArr:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi:number = Math.PI;
  a:number = 0.234;
  b:number = 1234.5;

  ninja:any = {
    name: 'Itachi Uchiha',
    clan: 'Uchiha',
    age: 22,
    address: {
      country: 'Fire',
      ville: 'Konoha'
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data!!!'), 3500);
  });

  date = new Date();

  video:string = "W3_5gl9DHfs?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMW3_5gl9DHfs";
  isCrypted:boolean = true;
}
