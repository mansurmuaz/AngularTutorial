import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: 'person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  // @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  constructor(private personsService: PersonsService) {}

  onCreatePerson() {
    console.log('Created a Person: ' + this.enteredPersonName);
    // this.personCreate.emit(this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
