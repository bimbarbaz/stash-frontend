import { Component, Input, OnInit } from '@angular/core';
import { Scene } from 'src/app/generated/graphql-types';

@Component({
  selector: '[scene]',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @Input() scene!: Scene;

  constructor() { }

  ngOnInit(): void {
  }

}
