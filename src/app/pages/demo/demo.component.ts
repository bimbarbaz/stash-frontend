import { Component, OnInit } from '@angular/core';
import { Performer, PerformerCreateDocument } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

  performer!: Performer;

  constructor() { }

  ngOnInit(): void {

    this.performer =  <Performer> {
      id: '',
      name: 'Bitch'
    }
  }

}
