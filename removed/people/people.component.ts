import { Component, OnInit } from '@angular/core';
import { people } from '../../src/app/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people = people;

  constructor() { }

  ngOnInit(): void {
  }

}
