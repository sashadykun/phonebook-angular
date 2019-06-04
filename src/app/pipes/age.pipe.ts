import { Pipe, PipeTransform } from '@angular/core';

// {{contact.dob | age }}
// -->31 years 

// {{contact.dob | age : 1 }}
// -->31 years

// {{contact.dob | age : 2 }}
// -->31 years and 5 months

// {{contact.dob | age : 3 }}
// -->31 years 5 months and 2 days

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flag?: number): any {
    if(!dob) {
      return '';
    }
    let dt1 = new Date(dob);
    console.log( 'dt1', dt1)
    let diff = Date.now() - dt1.getTime();
    console.log('diff', diff)
    let dt2 = new Date(diff);
    console.log ('dt2', dt2)
    let years = dt2.getFullYear() - 1970;
    console.log('year', years);
    let months = dt2.getMonth();
    console.log('month', months);
    let days = dt2.getDate();
    console.log('days', days) 

    let output = '';
    switch(flag) {
      case 2:
        output = `${years} years and ${months} month`;
        break;
      case 3:
          output = `${years} years and ${months} month and ${days} days`;
          break;
      case 1:
      default:
        output = `${years} years`
    }

    return output;
  }

}
