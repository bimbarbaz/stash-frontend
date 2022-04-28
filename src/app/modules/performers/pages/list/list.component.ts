import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FindPerformersGQL, Performer } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  performers!: Observable<Performer[]>

  constructor(private findPerformersGQL: FindPerformersGQL) {}

  ngOnInit(): void {
    this.performers = <Observable<Performer[]>>this.findPerformersGQL.watch().valueChanges.pipe(
      map(result  => result.data.findPerformers.performers)
    );
  }
  
}
