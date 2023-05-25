import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person } from '../models/task.interface';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})

export class AddPersonComponent implements OnInit {
  personForm: FormGroup;
  activePersons: Person[] = [];


  constructor(private personService: PersonService, private fb: FormBuilder, private http: HttpClient) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      active: [true],  // set the active field as true
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    const newPerson: Person = {
      id: 0,
      name: this.personForm.get('name')?.value,
      email: this.personForm.get('email')?.value,
      active: this.personForm.get('active')?.value,
      tasks: [],
    };

    this.personService.getAllPersons().subscribe((persons) => {
      this.activePersons = persons;
    }, error => {
      console.error('Error fetching persons:', error);
    });
    

    this.personService.createPerson(newPerson).subscribe(
      (response) => {
        console.log('Person created', response);
      },
      (error) => {
        console.log('Error creating person:', error);
      }
    );
  }
}
