import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FindTagsGQL, Tag } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  tags!: Observable<Tag[]>;

  constructor(private findTagsGQL: FindTagsGQL) { }

  ngOnInit(): void {
    this.tags = <Observable<Tag[]>> this.findTagsGQL.watch().valueChanges.pipe(
      map(result => result.data.findTags.tags)
    );
  }

}
