import { Component, Input, OnInit } from '@angular/core';
import { Performer } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
})
export class PerformerComponent implements OnInit {

  @Input() performer!: Performer;

  constructor() { }

  ngOnInit(): void {
  }

}
