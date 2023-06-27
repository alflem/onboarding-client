import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/person.service';
import { Person } from '../../models/task.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})

export class AddPersonComponent implements OnInit {
  personForm: FormGroup;
  activePersons: Person[] = [];
  allPersons: Person[] = [];

  constructor(private personService: PersonService, private fb: FormBuilder, private http: HttpClient) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      active: [true],  // set the active field as true
    });
  }

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe({
      next: (persons) => {
        this.allPersons = persons;
      },
      error: (error) => {
        console.error('Error fetching active persons:', error);
      }
    });
  }

  submitForm(): void {
    const newPerson: Person = {
      id: 0,
      name: this.personForm.get('name')?.value,
      email: this.personForm.get('email')?.value,
      active: this.personForm.get('active')?.value,
      tasks: [],
    };

    this.personService.getAllPersons().subscribe({
      next: (persons) => {
        this.activePersons = persons;
      },
      error: (error) => {
        console.error('Error fetching persons:', error);
      }
    });

    this.personService.createPerson(newPerson).subscribe({
      next: (response) => {
        console.log('Person created', response);
      },
      error: (error) => {
        console.log('Error creating person:', error);
      }
    });
  }

  toggleActive(person: Person): void {
    if (person.active) {
      this.personService.deactivatePerson(person.id).subscribe({
        next: (response) => {
          console.log('Person deactivated', response);
          this.reloadPersons();
        },
        error: (error) => {
          console.log('Error deactivating person:', error);
        }
      });
    } else {
      this.personService.activatePerson(person.id).subscribe({
        next: (response) => {
          console.log('Person activated', response);
          this.reloadPersons();
        },
        error: (error) => {
          console.log('Error activating person:', error);
        }
      });
    }
  }

  reloadPersons(): void {
    this.personService.getAllPersons().subscribe({
      next: (persons) => {
        this.allPersons = persons;
      },
      error: (error) => {
        console.error('Error fetching persons:', error);
      }
    });
  }
}
