import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonsService {

  personsChanged = new Subject<string[]>();
  persons = ['Max', 'Manuel', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
    console.log(name + ' added to the list.');
  }

  removePerson(name: string) {
    if (name !== '') {
      this.persons = this.persons.filter( person => {
        return person !== name;
      });
      this.personsChanged.next(this.persons);
      console.log(this.persons);
    }
  }
}
