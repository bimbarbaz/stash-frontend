import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FindStudiosGQL, Studio } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  studios!: Observable<Studio[]>;

  constructor(private findStudiosGQL: FindStudiosGQL) { }

  ngOnInit(): void {
    this.studios = <Observable<Studio[]>> this.findStudiosGQL.watch().valueChanges.pipe(
      map(result => result.data.findStudios.studios)
    );
  }
}
