import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FindSceneGQL, FindSceneQuery, Scene } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  
  scene: Scene;

  constructor(route: ActivatedRoute) {
    this.scene = route.snapshot.data['scene'];
  }

  ngOnInit(): void { }

}
