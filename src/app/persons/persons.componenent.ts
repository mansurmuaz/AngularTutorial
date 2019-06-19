import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  // private personService: PersonsService;
  isFetching: false;

  private personsSubscription: Subscription;

  constructor(private personService: PersonsService) {
    // this.personList = prsService.persons;
    // this.personService = prsService;
  }

  ngOnInit() {
    // this.personList = this.personService.persons;
    this.personsSubscription = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    console.log(personName + ' clicked.');
    this.personService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personsSubscription.unsubscribe();
  }
}
