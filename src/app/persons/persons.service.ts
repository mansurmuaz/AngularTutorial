import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonsService {

  personsChanged = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http.get<any>('https://swapi.co/api/people').pipe(map(resData => {
      return resData.results.map(character => character.name);
    })).subscribe(transpormedData => {
      console.log(transpormedData);
      this.personsChanged.next(transpormedData);
    });

  }

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
