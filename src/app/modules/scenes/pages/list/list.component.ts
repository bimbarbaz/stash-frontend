import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FindScenesGQL, Scene } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  query: string = '';

  scenes!: Observable<Scene[]>;

  constructor(private findScenesGQL: FindScenesGQL) {}

  ngOnInit(): void {
    this.scenes = <Observable<Scene[]>> this.findScenesGQL.watch({
      filter: { q: this.query }
    }).valueChanges.pipe(
      map(result => result.data.findScenes.scenes)
    );
  }

  onSearchChange() {
  }

}
