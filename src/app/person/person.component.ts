import { Component, OnInit } from '@angular/core';

import { people } from '../people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person = people[0];

  constructor() { }

  ngOnInit() {
  }

}
